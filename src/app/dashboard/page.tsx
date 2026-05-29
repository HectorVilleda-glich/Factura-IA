import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";

function formatCurrencyHNL(value: number) {
  return new Intl.NumberFormat("es-HN", {
    style: "currency",
    currency: "HNL",
    maximumFractionDigits: 2,
  }).format(value);
}

export default async function DashboardPage() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

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
                Bienvenido de nuevo, <span className="font-medium text-gray-900">{user.email}</span>
              </p>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm shadow-indigo-600/20 hover:bg-indigo-700 transition"
              >
                + Nueva factura
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition"
              >
                Exportar
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-8">
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          <div className="rounded-2xl bg-white/80 backdrop-blur border border-black/5 shadow-sm p-5">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold text-gray-500 tracking-wide">BALANCE NETO</p>
              <span className="text-xs text-gray-400">▲</span>
            </div>
            <p className="mt-3 text-2xl font-bold text-gray-900">{formatCurrencyHNL(0)}</p>
            <p className="mt-1 text-sm text-gray-500">Ingresos netos en tu cuenta</p>
          </div>

          <div className="rounded-2xl bg-white/80 backdrop-blur border border-black/5 shadow-sm p-5">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold text-gray-500 tracking-wide">INGRESOS TOTALES</p>
              <span className="text-xs text-gray-400">◎</span>
            </div>
            <p className="mt-3 text-2xl font-bold text-gray-900">{formatCurrencyHNL(0)}</p>
            <p className="mt-1 text-sm text-emerald-600">Activos y cobros registrados</p>
          </div>

          <div className="rounded-2xl bg-white/80 backdrop-blur border border-black/5 shadow-sm p-5">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold text-gray-500 tracking-wide">GASTOS TOTALES</p>
              <span className="text-xs text-gray-400">◼</span>
            </div>
            <p className="mt-3 text-2xl font-bold text-gray-900">{formatCurrencyHNL(0)}</p>
            <p className="mt-1 text-sm text-rose-600">Egresos y facturas pagadas</p>
          </div>

          <div className="rounded-2xl bg-white/80 backdrop-blur border border-black/5 shadow-sm p-5">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold text-gray-500 tracking-wide">FACTURAS</p>
              <span className="text-xs text-gray-400">▦</span>
            </div>
            <p className="mt-3 text-2xl font-bold text-gray-900">0</p>
            <p className="mt-1 text-sm text-gray-500">Documentos financieros activos</p>
          </div>
        </section>

        <section className="mt-8 grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2 rounded-2xl bg-white/80 backdrop-blur border border-black/5 shadow-sm">
            <div className="p-6 border-b border-black/5">
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                <div>
                  <h2 className="text-lg font-bold text-gray-900">Historial de Facturas</h2>
                  <p className="text-sm text-gray-500">Listado y gestión de movimientos</p>
                </div>

                <div className="w-full sm:w-auto">
                  <div className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2">
                    <span className="text-gray-400 text-sm">⌕</span>
                    <input
                      placeholder="Buscar por proveedor, empresa, categoría..."
                      className="w-full sm:w-[320px] bg-transparent text-sm outline-none text-gray-700 placeholder:text-gray-400"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2">
                <span className="rounded-full bg-gray-900 text-white text-xs font-semibold px-3 py-1.5">
                  TODOS
                </span>
                <span className="rounded-full bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1.5">
                  INGRESOS
                </span>
                <span className="rounded-full bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1.5">
                  GASTOS
                </span>
              </div>
            </div>

            <div className="p-6">
              <div className="rounded-2xl border border-dashed border-gray-200 bg-gradient-to-br from-white to-gray-50 p-10 text-center">
                <p className="text-sm font-semibold text-gray-700">Aún no hay facturas</p>
                <p className="mt-1 text-sm text-gray-500">
                  Cuando registres tu primera factura, aparecerá aquí.
                </p>
                <div className="mt-4 flex justify-center">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700 transition"
                  >
                    + Registrar factura
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white/80 backdrop-blur border border-black/5 shadow-sm">
            <div className="p-6 border-b border-black/5">
              <h2 className="text-lg font-bold text-gray-900">Distribución de Gastos</h2>
              <p className="text-sm text-gray-500">Egresos segmentados por categoría</p>
            </div>

            <div className="p-6">
              <div className="rounded-2xl border border-dashed border-gray-200 bg-gradient-to-br from-white to-gray-50 p-8">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-gray-700">Sin datos aún</p>
                    <p className="mt-1 text-sm text-gray-500">
                      Registra gastos para ver la distribución.
                    </p>
                  </div>
                  <div className="h-14 w-14 rounded-2xl bg-indigo-600/10 text-indigo-700 flex items-center justify-center font-bold">
                    %
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <div className="h-2 rounded-full bg-gray-100 overflow-hidden">
                    <div className="h-full w-[22%] bg-indigo-500/60" />
                  </div>
                  <div className="h-2 rounded-full bg-gray-100 overflow-hidden">
                    <div className="h-full w-[35%] bg-sky-500/60" />
                  </div>
                  <div className="h-2 rounded-full bg-gray-100 overflow-hidden">
                    <div className="h-full w-[14%] bg-emerald-500/60" />
                  </div>
                </div>

                <p className="mt-6 text-xs text-gray-400">
                  Se mostrará un gráfico real cuando existan categorías y gastos.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
