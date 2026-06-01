import { NextRequest, NextResponse } from "next/server";
import { getAuthenticatedUsuario } from "@/lib/api-auth";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const auth = await getAuthenticatedUsuario();
  if (!auth) return NextResponse.json({ error: "No autorizado" }, { status: 401 });

  const { searchParams } = new URL(req.url);
  const mes = searchParams.get("mes");
  const anio = searchParams.get("anio");
  const categoria = searchParams.get("categoria");
  const q = searchParams.get("q")?.trim();

  const where: Record<string, unknown> = {
    identificadorUsuario: auth.usuario.id_usuario,
  };

  if (mes && anio) {
    const inicio = new Date(Number(anio), Number(mes) - 1, 1);
    const fin = new Date(Number(anio), Number(mes), 0, 23, 59, 59);
    where.fecha = { gte: inicio, lte: fin };
  }

  if (categoria) {
    where.id_tipo_gasto = categoria;
  }

  if (q) {
    where.OR = [
      { proveedor: { contains: q, mode: "insensitive" } },
      { id_empresa: { contains: q, mode: "insensitive" } },
      { categoriaGasto: { nombre: { contains: q, mode: "insensitive" } } },
    ];
  }

  const facturas = await prisma.factura.findMany({
    where,
    include: { categoriaGasto: true, tipoDocumento: true },
    orderBy: { fecha: "desc" },
  });

  return NextResponse.json(facturas);
}

export async function POST(req: NextRequest) {
  const auth = await getAuthenticatedUsuario();
  if (!auth) return NextResponse.json({ error: "No autorizado" }, { status: 401 });

  try {
    const body = await req.json();
    const { fecha, proveedor, id_tipo_gasto, monto, imagen, id_empresa, id_tipo_documento } =
      body;

    if (!fecha || !proveedor || !id_tipo_gasto || monto === undefined) {
      return NextResponse.json(
        { error: "Fecha, proveedor, categoría y monto son requeridos" },
        { status: 400 }
      );
    }

    const factura = await prisma.factura.create({
      data: {
        fecha: new Date(fecha),
        proveedor,
        id_tipo_gasto,
        monto,
        imagen: imagen || null,
        id_empresa: id_empresa || null,
        id_tipo_documento: id_tipo_documento || null,
        identificadorUsuario: auth.usuario.id_usuario,
      },
      include: { categoriaGasto: true, tipoDocumento: true },
    });

    return NextResponse.json(factura, { status: 201 });
  } catch (error) {
    console.error("Create factura error:", error);
    return NextResponse.json({ error: "Error al crear factura" }, { status: 500 });
  }
}
