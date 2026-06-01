"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type DeleteFacturaButtonProps = {
  facturaId: string;
};

export function DeleteFacturaButton({ facturaId }: DeleteFacturaButtonProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [confirm, setConfirm] = useState(false);

  async function handleDelete() {
    if (!confirm) {
      setConfirm(true);
      return;
    }

    setLoading(true);
    const res = await fetch(`/api/facturas/${facturaId}`, { method: "DELETE" });
    setLoading(false);

    if (res.ok) {
      router.push("/dashboard");
      router.refresh();
    } else {
      setConfirm(false);
      alert("No se pudo eliminar la factura");
    }
  }

  return (
    <button
      type="button"
      onClick={handleDelete}
      disabled={loading}
      className={`inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold transition disabled:opacity-50 ${
        confirm
          ? "bg-rose-600 text-white hover:bg-rose-700"
          : "border border-rose-200 text-rose-600 hover:bg-rose-50"
      }`}
    >
      {loading ? "Eliminando..." : confirm ? "Confirmar eliminación" : "Eliminar factura"}
    </button>
  );
}
