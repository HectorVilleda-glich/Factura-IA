import { NextRequest, NextResponse } from "next/server";
import { getAuthenticatedUsuario } from "@/lib/api-auth";
import { prisma } from "@/lib/prisma";

export async function GET(_req: NextRequest) {
  const auth = await getAuthenticatedUsuario();
  if (!auth) return NextResponse.json({ error: "No autorizado" }, { status: 401 });

  const envios = await prisma.detalleEnvio.findMany({
    where: { id_usuario: auth.usuario.id_usuario },
    include: {
      facturasEnviadas: {
        include: { factura: true },
      },
    },
    orderBy: { timestamp: "desc" },
    take: 50,
  });

  const data = envios.map((e) => ({
    id: e.id_detalle_envio,
    fecha: e.timestamp,
    medio: e.medio_envio,
    estado: e.estado,
    contador: e.contador,
    facturas: e.facturasEnviadas.map((fe) => ({
      id: fe.factura.id_factura,
      proveedor: fe.factura.proveedor,
      monto: Number(fe.factura.monto),
      fecha: fe.factura.fecha,
    })),
  }));

  return NextResponse.json(data);
}
