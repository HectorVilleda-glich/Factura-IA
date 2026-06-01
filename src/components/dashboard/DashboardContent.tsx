"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { FacturaList } from "@/components/facturas/FacturaList";
import { formatCurrencyHNL } from "@/lib/format";
import { createSupabaseBrowserClient } from "@/lib/supabase/browser";
import { useRouter } from "next/navigation";

type Categoria = { id_categoria_gasto: string; nombre: string; description?: string | null };

type Factura = {
  monto: string | number;
  id_tipo_gasto: string;
  categoriaGasto: { nombre: string };
};

type DashboardContentProps = {
  email: string;
  categorias: Categoria[];
};

export function DashboardContent({ email, categorias }: DashboardContentProps) {
  const router = useRouter();
  const [facturas, setFacturas] = useState<Factura[]>([]);

  const loadStats = useCallback(async () => {
    const d = new Date();
    const params = new URLSearchParams({
      mes: String(d.getMonth() + 1),
      anio: String(d.getFullYear()),
    });
    const res = await fetch(`/api/facturas?${params}`);
    const data = await res.json();
    setFacturas(res.ok ? data : []);
  }, []);

  useEffect(() => {
    void loadStats();
  }, [loadStats]);

  const totalGastos = facturas.reduce((sum, f) => sum + Number(f.monto), 0);
  const count = facturas.length;

  const gastosPorCategoria = facturas.reduce<Record<string, number>>((acc, f) => {
    const name = f.categoriaGasto.nombre;
    acc[name] = (acc[name] ?? 0) + Number(f.monto);
    return acc;
  }, {});

  const categoriasOrdenadas = Object.entries(gastosPorCategoria).sort((a, b) => b[1] - a[1]);
  const maxGasto = categoriasOrdenadas[0]?.[1] ?? 1;

  async function handleLogout() {
    const supabase = createSupabaseBrowserClient();
    await supabase.auth.signOut();
    router.push("/login");
    router.refresh();
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(70%_50%_at_0%_0%,rgba(99,102,241,0.18)_0%,rgba(99,102,241,0)_60%),radial-gradient(60%_45%_at_100%_0%,rgba(14,165,233,0.16)_0%,rgba(14,165,233,0)_55%),linear-gradient(to_bottom,#f8fafc,#eef2ff)]">
      <header className="sticky top-0 z-10 border-b border-black/5 bg-white/70 backdrop-blur">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="min-w-0">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-indigo-700">
                <span className="rounded-full bg-indigo-600/10 px-2 py-1">FACTURAAPP</span>
                <span className="text-gray-500">v1.0</span>
              </div>
              <h1 className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900 truncate">
                Panel de Control
              </h1>
              <p className="mt-1 text-sm text-gray-600 truncate">
                Bienvenido de nuevo,{" "}
                <span className="font-medium text-gray-900">{email}</span>
              </p>
            </div>

            <div className="flex items-center gap-2 flex-wrap justify-end">
              <Link
                href="/dashboard/facturas/nueva"
                className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm shadow-indigo-600/20 hover:bg-indigo-700 transition"
              >
                + Nueva factura
              </Link>
              <button
                type="button"
                onClick={handleLogout}
                className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition"
              >
                Cerrar sesión
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-8">
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          <div className="rounded-2xl bg-white/80 backdrop-blur border border-black/5 shadow-sm p-5">
            <p className="text-xs font-semibold text-gray-500 tracking-wide">BALANCE NETO</p>
            <p className="mt-3 text-2xl font-bold text-gray-900">
              {formatCurrencyHNL(-totalGastos)}
            </p>
            <p className="mt-1 text-sm text-gray-500">Gastos del mes actual</p>
          </div>
          <div className="rounded-2xl bg-white/80 backdrop-blur border border-black/5 shadow-sm p-5">
            <p className="text-xs font-semibold text-gray-500 tracking-wide">INGRESOS TOTALES</p>
            <p className="mt-3 text-2xl font-bold text-gray-900">{formatCurrencyHNL(0)}</p>
            <p className="mt-1 text-sm text-emerald-600">Próximamente</p>
          </div>
          <div className="rounded-2xl bg-white/80 backdrop-blur border border-black/5 shadow-sm p-5">
            <p className="text-xs font-semibold text-gray-500 tracking-wide">GASTOS TOTALES</p>
            <p className="mt-3 text-2xl font-bold text-gray-900">
              {formatCurrencyHNL(totalGastos)}
            </p>
            <p className="mt-1 text-sm text-rose-600">Mes actual</p>
          </div>
          <div className="rounded-2xl bg-white/80 backdrop-blur border border-black/5 shadow-sm p-5">
            <p className="text-xs font-semibold text-gray-500 tracking-wide">FACTURAS</p>
            <p className="mt-3 text-2xl font-bold text-gray-900">{count}</p>
            <p className="mt-1 text-sm text-gray-500">Este mes</p>
          </div>
        </section>

        <section className="mt-8 grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2 rounded-2xl bg-white/80 backdrop-blur border border-black/5 shadow-sm">
            <div className="p-6 border-b border-black/5">
              <h2 className="text-lg font-bold text-gray-900">Historial de Facturas</h2>
              <p className="text-sm text-gray-500">Listado y gestión de movimientos</p>
            </div>
            <div className="p-6">
              <FacturaList categorias={categorias} />
            </div>
          </div>

          <div className="rounded-2xl bg-white/80 backdrop-blur border border-black/5 shadow-sm">
            <div className="p-6 border-b border-black/5">
              <h2 className="text-lg font-bold text-gray-900">Distribución de Gastos</h2>
              <p className="text-sm text-gray-500">Mes actual por categoría</p>
            </div>
            <div className="p-6">
              {categoriasOrdenadas.length === 0 ? (
                <p className="text-sm text-gray-500">Sin gastos registrados este mes.</p>
              ) : (
                <ul className="space-y-4">
                  {categoriasOrdenadas.map(([nombre, total]) => (
                    <li key={nombre}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium text-gray-700">{nombre}</span>
                        <span className="text-gray-900 font-semibold">
                          {formatCurrencyHNL(total)}
                        </span>
                      </div>
                      <div className="h-2 rounded-full bg-gray-100 overflow-hidden">
                        <div
                          className="h-full bg-indigo-500/70 rounded-full"
                          style={{ width: `${Math.round((total / maxGasto) * 100)}%` }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
