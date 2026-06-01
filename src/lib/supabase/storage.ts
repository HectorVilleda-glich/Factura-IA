const BUCKET =
  process.env.NEXT_PUBLIC_SUPABASE_STORAGE_BUCKET ??
  process.env.SUPABASE_STORAGE_BUCKET ??
  "facturas";

export function getFacturasBucket() {
  return BUCKET;
}

export function buildStoragePath(userId: string, fileName: string) {
  const safeName = fileName.replace(/[^a-zA-Z0-9._-]/g, "_");
  return `${userId}/${Date.now()}-${safeName}`;
}

export function extractStoragePathFromUrl(publicUrl: string): string | null {
  const marker = `/storage/v1/object/public/${BUCKET}/`;
  const idx = publicUrl.indexOf(marker);
  if (idx === -1) return null;
  return decodeURIComponent(publicUrl.slice(idx + marker.length));
}
