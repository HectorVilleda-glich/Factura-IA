import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: "No autorizado" }, { status: 401 });

  const { searchParams } = new URL(req.url);
  const mes = searchParams.get("mes");
  const anio = searchParams.get("anio");

  const where: Record<string, unknown> = { identificadorUsuario: session.user.id };

  if (mes && anio) {
    const inicio = new Date(Number(anio), Number(mes) - 1, 1);
    const fin = new Date(Number(anio), Number(mes), 0, 23, 59, 59);
    where.fecha = { gte: inicio, lte: fin };
  }

  const facturas = await prisma.factura.findMany({
    where,
    include: { categoriaGasto: true, tipoDocumento: true },
    orderBy: { fecha: "desc" },
  });

  return NextResponse.json(facturas);
}

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: "No autorizado" }, { status: 401 });

  try {
    const body = await req.json();
    const { fecha, proveedor, id_tipo_gasto, monto, imagen, id_empresa, id_tipo_documento } = body;

    const factura = await prisma.factura.create({
      data: {
        fecha: new Date(fecha),
        proveedor,
        id_tipo_gasto,
        monto,
        imagen,
        id_empresa,
        id_tipo_documento,
        identificadorUsuario: session.user.id,
      },
      include: { categoriaGasto: true, tipoDocumento: true },
    });

    return NextResponse.json(factura, { status: 201 });
  } catch (error) {
    console.error("Create factura error:", error);
    return NextResponse.json({ error: "Error al crear factura" }, { status: 500 });
  }
}
