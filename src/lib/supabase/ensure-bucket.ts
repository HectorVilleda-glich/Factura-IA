import type { SupabaseClient } from "@supabase/supabase-js";
import { getFacturasBucket } from "@/lib/supabase/storage";

const MAX_BYTES = 10 * 1024 * 1024;

/** Crea el bucket de facturas si no existe (requiere service role). */
export async function ensureFacturasBucket(supabase: SupabaseClient) {
  const bucketId = getFacturasBucket();

  const { data: buckets, error: listError } = await supabase.storage.listBuckets();
  if (listError) {
    throw new Error(`No se pudo listar buckets: ${listError.message}`);
  }

  const exists = buckets?.some((b) => b.id === bucketId || b.name === bucketId);
  if (exists) return bucketId;

  const { error: createError } = await supabase.storage.createBucket(bucketId, {
    public: true,
    fileSizeLimit: MAX_BYTES,
    allowedMimeTypes: [
      "image/jpeg",
      "image/png",
      "image/webp",
      "application/pdf",
    ],
  });

  if (createError) {
    const msg = createError.message.toLowerCase();
    if (msg.includes("already exists") || msg.includes("duplicate")) {
      return bucketId;
    }
    throw new Error(`No se pudo crear el bucket "${bucketId}": ${createError.message}`);
  }

  return bucketId;
}

export function formatBucketHint(supabaseUrl: string | undefined, bucket: string) {
  const project = supabaseUrl?.match(/https:\/\/([^.]+)\.supabase\.co/)?.[1] ?? "tu-proyecto";
  return (
    `Bucket "${bucket}" no encontrado en el proyecto ${project}. ` +
    `En Supabase → Storage crea un bucket público con ese nombre exacto, ` +
    `o ajusta SUPABASE_FACTURAS_BUCKET en .env.`
  );
}
