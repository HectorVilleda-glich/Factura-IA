"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { formatCurrencyHNL, formatDateES } from "@/lib/format";

type Categoria = { id_categoria_gasto: string; nombre: string };

type Factura = {
  id_factura: string;
  fecha: string;
  proveedor: string;
  monto: string | number;
  imagen: string | null;
  id_empresa: string | null;
  es_ingreso: boolean;
  categoriaGasto: { nombre: string };
  tipoDocumento: { nombre: string } | null;
};

type FacturaListProps = {
  categorias: Categoria[];
};

const MESES = [
  { value: "1", label: "Enero" },
  { value: "2", label: "Febrero" },
  { value: "3", label: "Marzo" },
  { value: "4", label: "Abril" },
  { value: "5", label: "Mayo" },
  { value: "6", label: "Junio" },
  { value: "7", label: "Julio" },
  { value: "8", label: "Agosto" },
  { value: "9", label: "Septiembre" },
  { value: "10", label: "Octubre" },
  { value: "11", label: "Noviembre" },
  { value: "12", label: "Diciembre" },
];

export function FacturaList({ categorias }: FacturaListProps) {
  const now = new Date();
  const [mes, setMes] = useState(String(now.getMonth() + 1));
  const [anio, setAnio] = useState(String(now.getFullYear()));
  const [categoria, setCategoria] = useState("");
  const [q, setQ] = useState("");
  const [facturas, setFacturas] = useState<Factura[]>([]);
  const [loading, setLoading] = useState(true);

  const loadFacturas = useCallback(async () => {
    setLoading(true);
    const params = new URLSearchParams({ mes, anio });
    if (categoria) params.set("categoria", categoria);
    if (q.trim()) params.set("q", q.trim());

    const res = await fetch(`/api/facturas?${params}`);
    const data = await res.json();
    setFacturas(res.ok ? data : []);
    setLoading(false);
  }, [mes, anio, categoria, q]);

  useEffect(() => {
    const t = setTimeout(() => {
      void loadFacturas();
    }, q ? 300 : 0);
    return () => clearTimeout(t);
  }, [loadFacturas, q]);

  return (
    <div>
      <div className="flex flex-col lg:flex-row lg:items-end gap-4 mb-4">
        <div className="flex flex-wrap gap-2 flex-1">
          <select
            value={mes}
            onChange={(e) => setMes(e.target.value)}
            className="rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm"
          >
            {MESES.map((m) => (
              <option key={m.value} value={m.value}>
                {m.label}
              </option>
            ))}
          </select>
          <select
            value={anio}
            onChange={(e) => setAnio(e.target.value)}
            className="rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm"
          >
            {[now.getFullYear(), now.getFullYear() - 1].map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
          <select
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            className="rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm min-w-[160px]"
          >
            <option value="">Todas las categorías</option>
            {categorias.map((c) => (
              <option key={c.id_categoria_gasto} value={c.id_categoria_gasto}>
                {c.nombre}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2 flex-1 lg:max-w-sm">
          <span className="text-gray-400 text-sm">⌕</span>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Buscar proveedor, empresa..."
            className="w-full bg-transparent text-sm outline-none text-gray-700 placeholder:text-gray-400"
          />
        </div>
      </div>

      {loading ? (
        <p className="text-sm text-gray-500 py-8 text-center">Cargando facturas...</p>
      ) : facturas.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-gray-200 bg-gradient-to-br from-white to-gray-50 p-10 text-center">
          <p className="text-sm font-semibold text-gray-700">No hay facturas en este periodo</p>
          <p className="mt-1 text-sm text-gray-500">Registra una nueva o cambia los filtros.</p>
          <Link
            href="/dashboard/facturas/nueva"
            className="mt-4 inline-flex items-center justify-center rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700 transition"
          >
            + Registrar factura
          </Link>
        </div>
      ) : (
        <ul className="divide-y divide-gray-100">
          {facturas.map((f) => (
            <li key={f.id_factura}>
              <Link
                href={`/dashboard/facturas/${f.id_factura}`}
                className="flex items-center gap-4 py-4 px-2 -mx-2 rounded-xl hover:bg-indigo-50/50 transition group"
              >
                <div className={`h-11 w-11 rounded-xl flex items-center justify-center text-sm font-bold shrink-0 ${
                  f.es_ingreso
                    ? "bg-emerald-600/10 text-emerald-700"
                    : "bg-rose-600/10 text-rose-700"
                }`}>
                  {f.es_ingreso ? "I" : "G"}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-gray-900 truncate group-hover:text-indigo-700">
                    {f.proveedor}
                  </p>
                  <p className="text-sm text-gray-500 truncate">
                    {formatDateES(f.fecha)} · {f.categoriaGasto.nombre}
                    {f.tipoDocumento ? ` · ${f.tipoDocumento.nombre}` : ""}
                  </p>
                </div>
                <p className="text-sm font-bold text-gray-900 shrink-0">
                  {formatCurrencyHNL(Number(f.monto))}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
