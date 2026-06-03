import { NextRequest, NextResponse } from "next/server";
import { getAuthenticatedUsuario } from "@/lib/api-auth";
import { prisma } from "@/lib/prisma";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import {
  extractStoragePathFromUrl,
  getFacturasBucket,
} from "@/lib/supabase/storage";

type RouteContext = { params: Promise<{ id: string }> };

export async function GET(_req: NextRequest, context: RouteContext) {
  const auth = await getAuthenticatedUsuario();
  if (!auth) return NextResponse.json({ error: "No autorizado" }, { status: 401 });

  const { id } = await context.params;

  const factura = await prisma.factura.findFirst({
    where: { id_factura: id, identificadorUsuario: auth.usuario.id_usuario },
    include: { categoriaGasto: true, tipoDocumento: true },
  });

  if (!factura) {
    return NextResponse.json({ error: "Factura no encontrada" }, { status: 404 });
  }

  return NextResponse.json(factura);
}

export async function PATCH(req: NextRequest, context: RouteContext) {
  const auth = await getAuthenticatedUsuario();
  if (!auth) return NextResponse.json({ error: "No autorizado" }, { status: 401 });

  const { id } = await context.params;

  const existing = await prisma.factura.findFirst({
    where: { id_factura: id, identificadorUsuario: auth.usuario.id_usuario },
  });

  if (!existing) {
    return NextResponse.json({ error: "Factura no encontrada" }, { status: 404 });
  }

  try {
    const body = await req.json();
    const { fecha, proveedor, id_tipo_gasto, monto, imagen, id_empresa, id_tipo_documento, es_ingreso } =
      body;

    const factura = await prisma.factura.update({
      where: { id_factura: id },
      data: {
        ...(fecha !== undefined && { fecha: new Date(fecha) }),
        ...(proveedor !== undefined && { proveedor }),
        ...(id_tipo_gasto !== undefined && { id_tipo_gasto }),
        ...(monto !== undefined && { monto }),
        ...(es_ingreso !== undefined && { es_ingreso }),
        ...(imagen !== undefined && { imagen }),
        ...(id_empresa !== undefined && { id_empresa }),
        ...(id_tipo_documento !== undefined && {
          id_tipo_documento: id_tipo_documento || null,
        }),
      },
      include: { categoriaGasto: true, tipoDocumento: true },
    });

    return NextResponse.json(factura);
  } catch (error) {
    console.error("Update factura error:", error);
    return NextResponse.json({ error: "Error al actualizar factura" }, { status: 500 });
  }
}

export async function DELETE(_req: NextRequest, context: RouteContext) {
  const auth = await getAuthenticatedUsuario();
  if (!auth) return NextResponse.json({ error: "No autorizado" }, { status: 401 });

  const { id } = await context.params;

  const existing = await prisma.factura.findFirst({
    where: { id_factura: id, identificadorUsuario: auth.usuario.id_usuario },
  });

  if (!existing) {
    return NextResponse.json({ error: "Factura no encontrada" }, { status: 404 });
  }

  if (existing.imagen) {
    const storagePath = extractStoragePathFromUrl(existing.imagen);
    if (storagePath) {
      const supabase = createSupabaseAdminClient();
      await supabase.storage.from(getFacturasBucket()).remove([storagePath]);
    }
  }

  await prisma.factura.delete({ where: { id_factura: id } });

  return NextResponse.json({ ok: true });
}
