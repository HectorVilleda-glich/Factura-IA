import { NextRequest, NextResponse } from "next/server";
import { getAuthenticatedUsuario } from "@/lib/api-auth";
import { prisma } from "@/lib/prisma";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { formatCurrencyHNL } from "@/lib/format";

export async function GET(req: NextRequest) {
  const auth = await getAuthenticatedUsuario();
  if (!auth) return NextResponse.json({ error: "No autorizado" }, { status: 401 });

  const { searchParams } = new URL(req.url);
  const mes = searchParams.get("mes");
  const anio = searchParams.get("anio");
  const descargar = searchParams.get("descargar") === "true";

  if (!mes || !anio) {
    return NextResponse.json({ error: "mes y anio son requeridos" }, { status: 400 });
  }

  const inicio = new Date(Number(anio), Number(mes) - 1, 1);
  const fin = new Date(Number(anio), Number(mes), 0, 23, 59, 59);

  const facturas = await prisma.factura.findMany({
    where: {
      identificadorUsuario: auth.usuario.id_usuario,
      fecha: { gte: inicio, lte: fin },
    },
    include: { categoriaGasto: true, tipoDocumento: true },
    orderBy: { fecha: "asc" },
  });

  const ingresos = facturas.filter((f) => f.es_ingreso).reduce((s, f) => s + Number(f.monto), 0);
  const gastos = facturas.filter((f) => !f.es_ingreso).reduce((s, f) => s + Number(f.monto), 0);
  const balance = ingresos - gastos;

  if (descargar) {
    const doc = await PDFDocument.create();
    const font = await doc.embedFont(StandardFonts.Helvetica);
    const bold = await doc.embedFont(StandardFonts.HelveticaBold);

    const nombreMes = [
      "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
      "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
    ][Number(mes) - 1];

    let page = doc.addPage([612, 792]);
    const { width, height } = page.getSize();
    let y = height - 50;

    page.drawText("FacturaApp", { x: 50, y, size: 18, font: bold });
    y -= 25;
    page.drawText(`Reporte de ${nombreMes} ${anio}`, { x: 50, y, size: 14, font });
    y -= 30;

    page.drawText(`Ingresos: ${formatCurrencyHNL(ingresos)}`, { x: 50, y, size: 11, font });
    y -= 16;
    page.drawText(`Gastos: ${formatCurrencyHNL(gastos)}`, { x: 50, y, size: 11, font });
    y -= 16;
    page.drawText(`Balance Neto: ${formatCurrencyHNL(balance)}`, { x: 50, y, size: 11, font });
    y -= 16;
    page.drawText(`Total de movimientos: ${facturas.length}`, { x: 50, y, size: 11, font });
    y -= 25;

    page.drawText("Detalle de movimientos:", { x: 50, y, size: 12, font: bold });
    y -= 20;

    const colX = [50, 130, 270, 340, 450];

    page.drawText("Fecha", { x: colX[0], y, size: 9, font: bold });
    page.drawText("Proveedor", { x: colX[1], y, size: 9, font: bold });
    page.drawText("Tipo", { x: colX[2], y, size: 9, font: bold });
    page.drawText("Categoria", { x: colX[3], y, size: 9, font: bold });
    page.drawText("Monto", { x: colX[4], y, size: 9, font: bold });
    y -= 12;

    for (const f of facturas) {
      if (y < 60) {
        page = doc.addPage([612, 792]);
        y = height - 50;
      }

      const tipo = f.es_ingreso ? "Ingreso" : "Gasto";
      const fecha = f.fecha.toLocaleDateString("es-HN");
      const proveedor = f.proveedor.length > 20 ? f.proveedor.slice(0, 18) + ".." : f.proveedor;

      page.drawText(fecha, { x: colX[0], y, size: 8, font });
      page.drawText(proveedor, { x: colX[1], y, size: 8, font });
      page.drawText(tipo, { x: colX[2], y, size: 8, font });
      page.drawText(f.categoriaGasto.nombre, { x: colX[3], y, size: 8, font });
      page.drawText(formatCurrencyHNL(Number(f.monto)), { x: colX[4], y, size: 8, font });
      y -= 14;
    }

    const pdfBytes = await doc.save();

    return new NextResponse(Buffer.from(pdfBytes), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="reporte-${nombreMes}-${anio}.pdf"`,
      },
    });
  }

  return NextResponse.json({
    resumen: { ingresos, gastos, balance, total: facturas.length },
    facturas,
  });
}
