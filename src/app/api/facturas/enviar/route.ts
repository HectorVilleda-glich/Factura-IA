import { NextRequest, NextResponse } from "next/server";
import { getAuthenticatedUsuario } from "@/lib/api-auth";
import { prisma } from "@/lib/prisma";
import { PDFDocument, StandardFonts } from "pdf-lib";
import { Resend } from "resend";
import { formatCurrencyHNL } from "@/lib/format";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(req: NextRequest) {
  const auth = await getAuthenticatedUsuario();
  if (!auth) return NextResponse.json({ error: "No autorizado" }, { status: 401 });

  try {
    const { mes, anio, medio, destino } = await req.json();

    if (!mes || !anio || !medio) {
      return NextResponse.json(
        { error: "mes, anio y medio son requeridos" },
        { status: 400 }
      );
    }

    if (medio !== "whatsapp" && medio !== "email") {
      return NextResponse.json({ error: "medio inválido" }, { status: 400 });
    }

    const inicio = new Date(Number(anio), Number(mes) - 1, 1);
    const fin = new Date(Number(anio), Number(mes), 0, 23, 59, 59);

    const facturas = await prisma.factura.findMany({
      where: {
        identificadorUsuario: auth.usuario.id_usuario,
        fecha: { gte: inicio, lte: fin },
      },
      include: { categoriaGasto: true },
      orderBy: { fecha: "asc" },
    });

    if (facturas.length === 0) {
      return NextResponse.json(
        { error: "No hay facturas en el periodo seleccionado" },
        { status: 400 }
      );
    }

    const ingresos = facturas.filter((f) => f.es_ingreso).reduce((s, f) => s + Number(f.monto), 0);
    const gastos = facturas.filter((f) => !f.es_ingreso).reduce((s, f) => s + Number(f.monto), 0);
    const balance = ingresos - gastos;

    const nombreMes = [
      "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
      "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
    ][Number(mes) - 1];

    const detalleEnvio = await prisma.detalleEnvio.findFirst({
      where: {
        id_usuario: auth.usuario.id_usuario,
        contador: { not: undefined },
      },
      orderBy: { contador: "desc" },
    });

    const nuevoContador = (detalleEnvio?.contador ?? 0) + 1;

    if (medio === "whatsapp") {
      const resumen = `*FacturaApp - Reporte ${nombreMes} ${anio}*\n\nIngresos: ${formatCurrencyHNL(ingresos)}\nGastos: ${formatCurrencyHNL(gastos)}\nBalance: ${formatCurrencyHNL(balance)}\nMovimientos: ${facturas.length}`;

      const envio = await prisma.detalleEnvio.create({
        data: {
          medio_envio: "whatsapp",
          estado: "enviado",
          contador: nuevoContador,
          id_usuario: auth.usuario.id_usuario,
          facturasEnviadas: {
            create: facturas.map((f) => ({ id_factura: f.id_factura })),
          },
        },
      });

      const waUrl = `https://wa.me/${destino ? destino.replace(/[^0-9]/g, "") : ""}?text=${encodeURIComponent(resumen)}`;

      return NextResponse.json({
        ok: true,
        url: waUrl,
        id_envio: envio.id_detalle_envio,
      });
    }

    if (medio === "email") {
      if (!resend) {
        return NextResponse.json(
          { error: "RESEND_API_KEY no configurada en .env" },
          { status: 500 }
        );
      }

      if (!destino) {
        return NextResponse.json(
          { error: "destino (email) es requerido" },
          { status: 400 }
        );
      }

      const pdfDoc = await PDFDocument.create();
      const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
      const bold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

      let page = pdfDoc.addPage([612, 792]);
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
          page = pdfDoc.addPage([612, 792]);
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

      const pdfBytes = await pdfDoc.save();
      const pdfBuffer = Buffer.from(pdfBytes);

      const html = `
        <h2>FacturaApp - Reporte ${nombreMes} ${anio}</h2>
        <p><strong>Ingresos:</strong> ${formatCurrencyHNL(ingresos)}</p>
        <p><strong>Gastos:</strong> ${formatCurrencyHNL(gastos)}</p>
        <p><strong>Balance Neto:</strong> ${formatCurrencyHNL(balance)}</p>
        <p><strong>Movimientos:</strong> ${facturas.length}</p>
        <p>Adjunto encontrarás el detalle completo en PDF.</p>
      `;

      const { error: emailError } = await resend.emails.send({
        from: "FacturaApp <onboarding@resend.dev>",
        to: destino,
        subject: `Reporte ${nombreMes} ${anio} - FacturaApp`,
        html,
        attachments: [
          {
            filename: `reporte-${nombreMes}-${anio}.pdf`,
            content: pdfBuffer.toString("base64"),
          },
        ],
      });

      if (emailError) {
        await prisma.detalleEnvio.create({
          data: {
            medio_envio: "email",
            estado: "fallido",
            contador: nuevoContador,
            id_usuario: auth.usuario.id_usuario,
            facturasEnviadas: {
              create: facturas.map((f) => ({ id_factura: f.id_factura })),
            },
          },
        });

        return NextResponse.json(
          { error: emailError.message },
          { status: 500 }
        );
      }

      const envio = await prisma.detalleEnvio.create({
        data: {
          medio_envio: "email",
          estado: "enviado",
          contador: nuevoContador,
          id_usuario: auth.usuario.id_usuario,
          facturasEnviadas: {
            create: facturas.map((f) => ({ id_factura: f.id_factura })),
          },
        },
      });

      return NextResponse.json({
        ok: true,
        id_envio: envio.id_detalle_envio,
      });
    }
  } catch (error) {
    console.error("Enviar error:", error);
    const message = error instanceof Error ? error.message : "Error al enviar";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
