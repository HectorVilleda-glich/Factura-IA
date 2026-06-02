import { NextRequest, NextResponse } from "next/server";
import { getAuthenticatedUsuario } from "@/lib/api-auth";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import {
  ensureFacturasBucket,
  formatBucketHint,
} from "@/lib/supabase/ensure-bucket";
import {
  buildStoragePath,
  getFacturasBucket,
  getPublicObjectUrl,
} from "@/lib/supabase/storage";

const MAX_SIZE_MB = 10;
const ALLOWED_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "application/pdf",
]);

export async function POST(req: NextRequest) {
  const auth = await getAuthenticatedUsuario();
  if (!auth) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  try {
    const formData = await req.formData();
    const file = formData.get("file");

    if (!file || !(file instanceof File)) {
      return NextResponse.json({ error: "Archivo requerido" }, { status: 400 });
    }

    if (!ALLOWED_TYPES.has(file.type)) {
      return NextResponse.json(
        { error: "Formato no permitido. Usa JPG, PNG, WEBP o PDF." },
        { status: 400 }
      );
    }

    if (file.size > MAX_SIZE_MB * 1024 * 1024) {
      return NextResponse.json(
        { error: `El archivo no puede superar ${MAX_SIZE_MB} MB` },
        { status: 400 }
      );
    }

    const bucket = getFacturasBucket();
    const path = buildStoragePath(auth.usuario.id_usuario, file.name);
    const buffer = Buffer.from(await file.arrayBuffer());

    const supabase = createSupabaseAdminClient();

    try {
      await ensureFacturasBucket(supabase);
    } catch (bucketError) {
      console.error("Ensure bucket error:", bucketError);
      return NextResponse.json(
        {
          error:
            bucketError instanceof Error
              ? bucketError.message
              : formatBucketHint(process.env.NEXT_PUBLIC_SUPABASE_URL, bucket),
        },
        { status: 500 }
      );
    }

    let uploadError = (
      await supabase.storage.from(bucket).upload(path, buffer, {
        contentType: file.type,
        upsert: false,
      })
    ).error;

    if (uploadError?.message?.toLowerCase().includes("bucket not found")) {
      try {
        await ensureFacturasBucket(supabase);
        uploadError = (
          await supabase.storage.from(bucket).upload(path, buffer, {
            contentType: file.type,
            upsert: false,
          })
        ).error;
      } catch {
        /* retry failed */
      }
    }

    if (uploadError) {
      console.error("Storage upload error:", uploadError);
      const isBucketMissing = uploadError.message
        ?.toLowerCase()
        .includes("bucket not found");
      return NextResponse.json(
        {
          error: isBucketMissing
            ? formatBucketHint(process.env.NEXT_PUBLIC_SUPABASE_URL, bucket)
            : uploadError.message || "Error al subir el archivo",
        },
        { status: 500 }
      );
    }

    const publicUrl = getPublicObjectUrl(path);

    return NextResponse.json({ url: publicUrl, path }, { status: 201 });
  } catch (error) {
    console.error("Upload route error:", error);
    const message =
      error instanceof Error ? error.message : "Error interno al subir archivo";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
