import { NextRequest, NextResponse } from "next/server";
import { getAuthenticatedUsuario } from "@/lib/api-auth";
import { prisma } from "@/lib/prisma";
import { recognizeInvoice } from "@/lib/gemini";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { extractStoragePathFromUrl, getFacturasBucket } from "@/lib/supabase/storage";

export async function POST(req: NextRequest) {
  const auth = await getAuthenticatedUsuario();
  if (!auth) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  try {
    const { imagen } = await req.json();

    if (!imagen || typeof imagen !== "string") {
      return NextResponse.json(
        { error: "URL de imagen requerida" },
        { status: 400 }
      );
    }

    const supabase = createSupabaseAdminClient();
    const bucket = getFacturasBucket();
    const storagePath = extractStoragePathFromUrl(imagen);

    if (!storagePath) {
      return NextResponse.json(
        { error: "No se pudo extraer la ruta de almacenamiento" },
        { status: 400 }
      );
    }

    const { data: fileData, error: downloadError } = await supabase.storage
      .from(bucket)
      .download(storagePath);

    if (downloadError || !fileData) {
      console.error("Download error:", downloadError);
      return NextResponse.json(
        { error: downloadError?.message || "Error al descargar la imagen" },
        { status: 500 }
      );
    }

    const buffer = Buffer.from(await fileData.arrayBuffer());

    const categorias = await prisma.categoriaGasto.findMany({
      orderBy: { nombre: "asc" },
    });

    const result = await recognizeInvoice(buffer, categorias);

    const categoriaMatch = categorias.find(
      (c) =>
        c.nombre.toLowerCase().trim() ===
        result.categoria_sugerida.toLowerCase().trim()
    );

    return NextResponse.json({
      fecha: result.fecha,
      proveedor: result.proveedor,
      monto: result.monto,
      categoria_sugerida: result.categoria_sugerida,
      id_categoria_match: categoriaMatch?.id_categoria_gasto ?? null,
    });
  } catch (error) {
    console.error("Reconocer error:", error);
    const message =
      error instanceof Error ? error.message : "Error al reconocer factura";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
