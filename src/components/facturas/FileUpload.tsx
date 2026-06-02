"use client";

import { useState } from "react";

const ACCEPT = "image/jpeg,image/png,image/webp,application/pdf";
const MAX_SIZE_MB = 10;

type FileUploadProps = {
  value?: string | null;
  onChange: (url: string | null) => void;
  disabled?: boolean;
};

export function FileUpload({ value, onChange, disabled }: FileUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setError("");
    if (file.size > MAX_SIZE_MB * 1024 * 1024) {
      setError(`El archivo no puede superar ${MAX_SIZE_MB} MB`);
      return;
    }

    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/facturas/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setUploading(false);

    if (!res.ok) {
      setError(data.error || "Error al subir el archivo");
      return;
    }

    onChange(data.url);
    e.target.value = "";
  }

  function clearFile() {
    onChange(null);
    setError("");
  }

  const isPdf = value?.toLowerCase().includes(".pdf");

  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-gray-700">
        Archivo (imagen o PDF)
      </label>

      {value ? (
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 flex items-center justify-between gap-4">
          <div className="min-w-0">
            <p className="text-sm font-medium text-gray-800 truncate">Archivo adjunto</p>
            <a
              href={value}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-indigo-600 hover:underline truncate block"
            >
              Ver archivo
            </a>
          </div>
          {!disabled && (
            <button
              type="button"
              onClick={clearFile}
              className="text-sm font-semibold text-rose-600 hover:text-rose-700 shrink-0"
            >
              Quitar
            </button>
          )}
        </div>
      ) : null}

      {!value && (
        <label
          className={`flex flex-col items-center justify-center w-full h-36 rounded-xl border-2 border-dashed border-gray-200 bg-white cursor-pointer hover:border-indigo-300 hover:bg-indigo-50/30 transition ${
            disabled || uploading ? "opacity-50 pointer-events-none" : ""
          }`}
        >
          <span className="text-2xl text-gray-400 mb-2">↑</span>
          <span className="text-sm font-medium text-gray-600">
            {uploading ? "Subiendo..." : "Haz clic para subir imagen o PDF"}
          </span>
          <span className="text-xs text-gray-400 mt-1">Máx. {MAX_SIZE_MB} MB</span>
          <input
            type="file"
            accept={ACCEPT}
            className="hidden"
            disabled={disabled || uploading}
            onChange={handleFileChange}
          />
        </label>
      )}

      {value && !disabled && (
        <label className="inline-flex text-sm font-semibold text-indigo-600 hover:text-indigo-700 cursor-pointer">
          Reemplazar archivo
          <input
            type="file"
            accept={ACCEPT}
            className="hidden"
            disabled={uploading}
            onChange={handleFileChange}
          />
        </label>
      )}

      {value && !isPdf && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={value}
          alt="Vista previa"
          className="max-h-48 rounded-xl border border-gray-200 object-contain"
        />
      )}

      {error && <p className="text-sm text-rose-600">{error}</p>}
    </div>
  );
}
