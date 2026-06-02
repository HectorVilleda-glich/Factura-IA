export function getFacturasBucket() {
  return (
    process.env.SUPABASE_FACTURAS_BUCKET ??
    process.env.NEXT_PUBLIC_SUPABASE_STORAGE_BUCKET ??
    "Facturas"
  );
}

export function buildStoragePath(userId: string, fileName: string) {
  const safeName = fileName.replace(/[^a-zA-Z0-9._-]/g, "_");
  return `${userId}/${Date.now()}-${safeName}`;
}

export function getPublicObjectUrl(path: string) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const bucket = getFacturasBucket();
  if (!url) return path;
  return `${url}/storage/v1/object/public/${bucket}/${path}`;
}

export function extractStoragePathFromUrl(publicUrl: string): string | null {
  const bucket = getFacturasBucket();
  const marker = `/storage/v1/object/public/${bucket}/`;
  const idx = publicUrl.indexOf(marker);
  if (idx === -1) return null;
  return decodeURIComponent(publicUrl.slice(idx + marker.length));
}
