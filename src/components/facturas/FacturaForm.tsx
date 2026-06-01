"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FileUpload } from "./FileUpload";

type Categoria = { id_categoria_gasto: string; nombre: string };
type TipoDocumento = { id_tipo_documento: string; nombre: string };

export type FacturaFormData = {
  id_factura?: string;
  fecha: string;
  proveedor: string;
  monto: string;
  id_tipo_gasto: string;
  id_tipo_documento: string;
  id_empresa: string;
  imagen: string | null;
};

type FacturaFormProps = {
  userId: string;
  categorias: Categoria[];
  tipos: TipoDocumento[];
  initial?: FacturaFormData;
  mode: "create" | "edit";
};

function toDateInputValue(isoOrDate: string) {
  const d = new Date(isoOrDate);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export function FacturaForm({
  userId,
  categorias,
  tipos,
  initial,
  mode,
}: FacturaFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [fecha, setFecha] = useState(
    initial?.fecha ? toDateInputValue(initial.fecha) : toDateInputValue(new Date().toISOString())
  );
  const [proveedor, setProveedor] = useState(initial?.proveedor ?? "");
  const [monto, setMonto] = useState(initial?.monto ?? "");
  const [idTipoGasto, setIdTipoGasto] = useState(initial?.id_tipo_gasto ?? "");
  const [idTipoDocumento, setIdTipoDocumento] = useState(initial?.id_tipo_documento ?? "");
  const [idEmpresa, setIdEmpresa] = useState(initial?.id_empresa ?? "");
  const [imagen, setImagen] = useState<string | null>(initial?.imagen ?? null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const payload = {
      fecha,
      proveedor,
      monto: Number(monto),
      id_tipo_gasto: idTipoGasto,
      id_tipo_documento: idTipoDocumento || null,
      id_empresa: idEmpresa || null,
      imagen,
    };

    const url =
      mode === "create" ? "/api/facturas" : `/api/facturas/${initial?.id_factura}`;
    const method = mode === "create" ? "POST" : "PATCH";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    setLoading(false);

    if (!res.ok) {
      setError(data.error || "Error al guardar la factura");
      return;
    }

    router.push("/dashboard");
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <FileUpload userId={userId} value={imagen} onChange={setImagen} disabled={loading} />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Fecha</label>
          <input
            type="date"
            required
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Monto (L)</label>
          <input
            type="number"
            required
            min="0"
            step="0.01"
            value={monto}
            onChange={(e) => setMonto(e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Proveedor</label>
        <input
          type="text"
          required
          value={proveedor}
          onChange={(e) => setProveedor(e.target.value)}
          placeholder="Nombre del proveedor"
          className="w-full border border-gray-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Empresa (opcional)</label>
        <input
          type="text"
          value={idEmpresa}
          onChange={(e) => setIdEmpresa(e.target.value)}
          placeholder="Nombre de la empresa"
          className="w-full border border-gray-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Categoría</label>
          <select
            required
            value={idTipoGasto}
            onChange={(e) => setIdTipoGasto(e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white"
          >
            <option value="">Seleccionar categoría</option>
            {categorias.map((c) => (
              <option key={c.id_categoria_gasto} value={c.id_categoria_gasto}>
                {c.nombre}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Tipo de documento</label>
          <select
            value={idTipoDocumento}
            onChange={(e) => setIdTipoDocumento(e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white"
          >
            <option value="">Sin especificar</option>
            {tipos.map((t) => (
              <option key={t.id_tipo_documento} value={t.id_tipo_documento}>
                {t.nombre}
              </option>
            ))}
          </select>
        </div>
      </div>

      {error && <p className="text-sm text-rose-600">{error}</p>}

      <div className="flex flex-wrap gap-3 pt-2">
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700 transition disabled:opacity-50"
        >
          {loading ? "Guardando..." : mode === "create" ? "Registrar factura" : "Guardar cambios"}
        </button>
        <Link
          href="/dashboard"
          className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-6 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition"
        >
          Cancelar
        </Link>
      </div>
    </form>
  );
}
