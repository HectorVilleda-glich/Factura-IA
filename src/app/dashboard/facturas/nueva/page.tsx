import Link from "next/link";
import { redirect } from "next/navigation";
import { FacturaForm } from "@/components/facturas/FacturaForm";
import { getAuthenticatedUsuario } from "@/lib/api-auth";
import { prisma } from "@/lib/prisma";

export default async function NuevaFacturaPage() {
  const auth = await getAuthenticatedUsuario();
  if (!auth) redirect("/login");

  const [categorias, tipos] = await Promise.all([
    prisma.categoriaGasto.findMany({ orderBy: { nombre: "asc" } }),
    prisma.tipoDocumento.findMany({ orderBy: { nombre: "asc" } }),
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="mx-auto max-w-2xl px-6 py-10">
        <Link
          href="/dashboard"
          className="text-sm font-semibold text-indigo-600 hover:underline"
        >
          ← Volver al panel
        </Link>
        <h1 className="mt-4 text-3xl font-bold text-indigo-900">Nueva factura</h1>
        <p className="mt-1 text-gray-600">Registro manual con archivo adjunto opcional</p>

        <div className="mt-8 bg-white rounded-2xl shadow-xl p-8">
          <FacturaForm
            userId={auth.usuario.id_usuario}
            categorias={categorias}
            tipos={tipos}
            mode="create"
          />
        </div>
      </div>
    </div>
  );
}
