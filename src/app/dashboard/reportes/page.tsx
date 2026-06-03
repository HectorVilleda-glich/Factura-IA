"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { formatCurrencyHNL, formatDateES } from "@/lib/format";

type Factura = {
  id_factura: string;
  fecha: string;
  proveedor: string;
  monto: number;
  es_ingreso: boolean;
  categoriaGasto: { nombre: string };
  tipoDocumento: { nombre: string } | null;
};

type Envio = {
  id: string;
  fecha: string;
  medio: string;
  estado: string;
  contador: number;
  facturas: { id: string; proveedor: string; monto: number; fecha: string }[];
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

export default function ReportesPage() {
  const now = new Date();
  const [mes, setMes] = useState(String(now.getMonth() + 1));
  const [anio, setAnio] = useState(String(now.getFullYear()));
  const [loading, setLoading] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [error, setError] = useState("");
  const [exito, setExito] = useState("");

  const [resumen, setResumen] = useState<{
    ingresos: number;
    gastos: number;
    balance: number;
    total: number;
  } | null>(null);
  const [facturas, setFacturas] = useState<Factura[]>([]);
  const [envios, setEnvios] = useState<Envio[]>([]);

  const [emailDestino, setEmailDestino] = useState("");
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [showHistorial, setShowHistorial] = useState(false);

  const cargarReporte = useCallback(async () => {
    setLoading(true);
    setError("");
    setExito("");
    const res = await fetch(`/api/facturas/reporte?mes=${mes}&anio=${anio}`);
    const data = await res.json();
    setLoading(false);
    if (!res.ok) {
      setError(data.error || "Error al cargar reporte");
      return;
    }
    setResumen(data.resumen);
    setFacturas(data.facturas);
  }, [mes, anio]);

  const cargarEnvios = useCallback(async () => {
    const res = await fetch("/api/envios");
    if (res.ok) setEnvios(await res.json());
  }, []);

  useEffect(() => {
    void cargarReporte();
  }, [cargarReporte]);

  useEffect(() => {
    if (showHistorial && envios.length === 0) void cargarEnvios();
  }, [showHistorial, envios.length, cargarEnvios]);

  async function descargarPDF() {
    const res = await fetch(`/api/facturas/reporte?mes=${mes}&anio=${anio}&descargar=true`);
    if (!res.ok) return;
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `reporte-${MESES[Number(mes) - 1].label}-${anio}.pdf`;
    a.click();
    URL.revokeObjectURL(url);
  }

  async function enviarWhatsApp() {
    setEnviando(true);
    setError("");
    setExito("");
    const res = await fetch("/api/facturas/enviar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mes, anio, medio: "whatsapp" }),
    });
    const data = await res.json();
    setEnviando(false);
    if (!res.ok) {
      setError(data.error || "Error al enviar");
      return;
    }
    if (data.url) window.open(data.url, "_blank");
    setExito("Enlace de WhatsApp generado");
  }

  async function enviarEmail() {
    if (!emailDestino) return;
    setEnviando(true);
    setError("");
    setExito("");
    const res = await fetch("/api/facturas/enviar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mes, anio, medio: "email", destino: emailDestino }),
    });
    const data = await res.json();
    setEnviando(false);
    if (!res.ok) {
      setError(data.error || "Error al enviar");
      return;
    }
    setExito("Correo enviado correctamente");
    setShowEmailInput(false);
    setEmailDestino("");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <Link
          href="/dashboard"
          className="text-sm font-semibold text-indigo-600 hover:underline"
        >
          ← Volver al panel
        </Link>
        <h1 className="mt-4 text-3xl font-bold text-black">Reporte Mensual</h1>

        <div className="mt-6 flex flex-wrap items-end gap-4">
          <div>
            <label className="block text-sm font-medium text-black mb-1">Mes</label>
            <select
              value={mes}
              onChange={(e) => setMes(e.target.value)}
              className="rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm text-black"
            >
              {MESES.map((m) => (
                <option key={m.value} value={m.value}>{m.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-black mb-1">Año</label>
            <select
              value={anio}
              onChange={(e) => setAnio(e.target.value)}
              className="rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm text-black"
            >
              {[now.getFullYear(), now.getFullYear() - 1, now.getFullYear() - 2].map((y) => (
                <option key={y} value={y}>{y}</option>
              ))}
            </select>
          </div>
          <button
            onClick={cargarReporte}
            disabled={loading}
            className="rounded-xl bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700 transition disabled:opacity-50"
          >
            {loading ? "Cargando..." : "Consultar"}
          </button>
        </div>

        {error && <p className="mt-4 text-sm text-rose-600">{error}</p>}
        {exito && <p className="mt-4 text-sm text-emerald-600">{exito}</p>}

        {resumen && (
          <>
            <section className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="rounded-2xl bg-white/80 backdrop-blur border border-black/5 shadow-sm p-5">
                <p className="text-xs font-semibold text-gray-500 tracking-wide">INGRESOS</p>
                <p className="mt-2 text-xl font-bold text-emerald-600">{formatCurrencyHNL(resumen.ingresos)}</p>
              </div>
              <div className="rounded-2xl bg-white/80 backdrop-blur border border-black/5 shadow-sm p-5">
                <p className="text-xs font-semibold text-gray-500 tracking-wide">GASTOS</p>
                <p className="mt-2 text-xl font-bold text-rose-600">{formatCurrencyHNL(resumen.gastos)}</p>
              </div>
              <div className="rounded-2xl bg-white/80 backdrop-blur border border-black/5 shadow-sm p-5">
                <p className="text-xs font-semibold text-gray-500 tracking-wide">BALANCE</p>
                <p className={`mt-2 text-xl font-bold ${resumen.balance >= 0 ? "text-emerald-600" : "text-rose-600"}`}>
                  {formatCurrencyHNL(resumen.balance)}
                </p>
              </div>
              <div className="rounded-2xl bg-white/80 backdrop-blur border border-black/5 shadow-sm p-5">
                <p className="text-xs font-semibold text-gray-500 tracking-wide">MOVIMIENTOS</p>
                <p className="mt-2 text-xl font-bold text-gray-900">{resumen.total}</p>
              </div>
            </section>

            <section className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={descargarPDF}
                className="rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700 transition"
              >
                Descargar PDF
              </button>
              <button
                onClick={enviarWhatsApp}
                disabled={enviando}
                className="rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700 transition disabled:opacity-50"
              >
                {enviando ? "Enviando..." : "Compartir WhatsApp"}
              </button>
              {!showEmailInput ? (
                <button
                  onClick={() => setShowEmailInput(true)}
                  className="rounded-xl bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-sky-700 transition"
                >
                  Enviar por Correo
                </button>
              ) : (
                <div className="flex items-center gap-2">
                  <input
                    type="email"
                    value={emailDestino}
                    onChange={(e) => setEmailDestino(e.target.value)}
                    placeholder="correo@ejemplo.com"
                    className="rounded-xl border border-gray-300 px-4 py-2.5 text-sm text-black w-64"
                  />
                  <button
                    onClick={enviarEmail}
                    disabled={enviando || !emailDestino}
                    className="rounded-xl bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-sky-700 transition disabled:opacity-50"
                  >
                    {enviando ? "Enviando..." : "Enviar"}
                  </button>
                  <button
                    onClick={() => setShowEmailInput(false)}
                    className="text-sm text-gray-500 hover:text-black"
                  >
                    Cancelar
                  </button>
                </div>
              )}
            </section>

            {facturas.length > 0 && (
              <section className="mt-8 bg-white rounded-2xl shadow-sm border border-black/5">
                <div className="p-6 border-b border-black/5">
                  <h2 className="text-lg font-bold text-black">Movimientos del periodo</h2>
                </div>
                <div className="p-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-gray-500 border-b border-gray-100">
                        <th className="pb-3 font-semibold">Fecha</th>
                        <th className="pb-3 font-semibold">Proveedor</th>
                        <th className="pb-3 font-semibold">Tipo</th>
                        <th className="pb-3 font-semibold">Categoría</th>
                        <th className="pb-3 font-semibold text-right">Monto</th>
                      </tr>
                    </thead>
                    <tbody>
                      {facturas.map((f) => (
                        <tr key={f.id_factura} className="border-b border-gray-50">
                          <td className="py-3 text-gray-900">{formatDateES(f.fecha)}</td>
                          <td className="py-3 font-medium text-gray-900">{f.proveedor}</td>
                          <td className="py-3">
                            <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                              f.es_ingreso ? "bg-emerald-100 text-emerald-700" : "bg-rose-100 text-rose-700"
                            }`}>
                              {f.es_ingreso ? "Ingreso" : "Gasto"}
                            </span>
                          </td>
                          <td className="py-3 text-gray-900">{f.categoriaGasto.nombre}</td>
                          <td className={`py-3 text-right font-semibold ${
                            f.es_ingreso ? "text-emerald-600" : "text-rose-600"
                          }`}>
                            {formatCurrencyHNL(f.monto)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )}
          </>
        )}

        <section className="mt-8">
          <button
            onClick={() => setShowHistorial(!showHistorial)}
            className="text-sm font-semibold text-indigo-600 hover:text-indigo-700"
          >
            {showHistorial ? "Ocultar" : "Ver"} historial de envíos
          </button>

          {showHistorial && (
            <div className="mt-4 bg-white rounded-2xl shadow-sm border border-black/5">
              <div className="p-6 border-b border-black/5">
                <h2 className="text-lg font-bold text-black">Historial de Envíos</h2>
              </div>
              <div className="p-6">
                {envios.length === 0 ? (
                  <p className="text-sm text-gray-500">No hay envíos registrados.</p>
                ) : (
                  <div className="space-y-4">
                    {envios.map((e) => (
                      <div key={e.id} className="border border-gray-100 rounded-xl p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-gray-500">
                            {new Date(e.fecha).toLocaleString("es-HN")}
                          </span>
                          <div className="flex gap-2">
                            <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                              e.medio === "whatsapp" ? "bg-emerald-100 text-emerald-700" : "bg-sky-100 text-sky-700"
                            }`}>
                              {e.medio === "whatsapp" ? "WhatsApp" : "Email"}
                            </span>
                            <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                              e.estado === "enviado" ? "bg-emerald-100 text-emerald-700" : "bg-rose-100 text-rose-700"
                            }`}>
                              {e.estado === "enviado" ? "Enviado" : "Fallido"}
                            </span>
                          </div>
                        </div>
                        <p className="text-xs text-gray-500">
                          #{e.contador} · {e.facturas.length} factura(s) incluidas
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
