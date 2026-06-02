import Link from "next/link";
import { redirect, notFound } from "next/navigation";
import { FacturaForm } from "@/components/facturas/FacturaForm";
import { DeleteFacturaButton } from "@/components/facturas/DeleteFacturaButton";
import { getAuthenticatedUsuario } from "@/lib/api-auth";
import { prisma } from "@/lib/prisma";
import { formatCurrencyHNL, formatDateES } from "@/lib/format";

type PageProps = { params: Promise<{ id: string }> };

export default async function FacturaDetallePage({ params }: PageProps) {
  const auth = await getAuthenticatedUsuario();
  if (!auth) redirect("/login");

  const { id } = await params;

  const [factura, categorias, tipos] = await Promise.all([
    prisma.factura.findFirst({
      where: { id_factura: id, identificadorUsuario: auth.usuario.id_usuario },
      include: { categoriaGasto: true, tipoDocumento: true },
    }),
    prisma.categoriaGasto.findMany({ orderBy: { nombre: "asc" } }),
    prisma.tipoDocumento.findMany({ orderBy: { nombre: "asc" } }),
  ]);

  if (!factura) notFound();

  const isPdf = factura.imagen?.toLowerCase().includes(".pdf");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="mx-auto max-w-2xl px-6 py-10">
        <Link
          href="/dashboard"
          className="text-sm font-semibold text-indigo-600 hover:underline"
        >
          ← Volver al panel
        </Link>

        <div className="mt-4 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-indigo-900">{factura.proveedor}</h1>
            <p className="mt-1 text-gray-600">
              {formatDateES(factura.fecha)} · {formatCurrencyHNL(Number(factura.monto))}
            </p>
          </div>
          <DeleteFacturaButton facturaId={factura.id_factura} />
        </div>

        {factura.imagen && (
          <div className="mt-6 bg-white rounded-2xl shadow p-4">
            <p className="text-sm font-medium text-gray-700 mb-3">Archivo adjunto</p>
            {isPdf ? (
              <a
                href={factura.imagen}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 font-semibold hover:underline"
              >
                Abrir PDF
              </a>
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={factura.imagen}
                alt="Factura"
                className="max-h-64 rounded-xl border border-gray-200 object-contain"
              />
            )}
          </div>
        )}

        <div className="mt-8 bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-lg font-bold text-gray-900 mb-6">Editar factura</h2>
          <FacturaForm
            categorias={categorias}
            tipos={tipos}
            mode="edit"
            initial={{
              id_factura: factura.id_factura,
              fecha: factura.fecha.toISOString(),
              proveedor: factura.proveedor,
              monto: String(factura.monto),
              id_tipo_gasto: factura.id_tipo_gasto,
              id_tipo_documento: factura.id_tipo_documento ?? "",
              id_empresa: factura.id_empresa ?? "",
              imagen: factura.imagen,
            }}
          />
        </div>
      </div>
    </div>
  );
}
