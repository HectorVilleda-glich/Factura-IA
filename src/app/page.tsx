import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-2xl text-center space-y-6">
        <h1 className="text-5xl font-bold text-indigo-900">FacturaApp</h1>
        <p className="text-xl text-indigo-700">
          Registra, clasifica y comparte tus facturas con tu contadora en segundos.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/login"
            className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition"
          >
            Iniciar Sesión
          </Link>
          <Link
            href="/register"
            className="bg-white text-indigo-600 border border-indigo-300 px-8 py-3 rounded-xl font-semibold hover:bg-indigo-50 transition"
          >
            Registrarse
          </Link>
        </div>
      </div>
    </main>
  );
}
