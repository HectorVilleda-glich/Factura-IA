import { redirect } from "next/navigation";
import { DashboardContent } from "@/components/dashboard/DashboardContent";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { prisma } from "@/lib/prisma";

export default async function DashboardPage() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const categorias = await prisma.categoriaGasto.findMany({
    orderBy: { nombre: "asc" },
  });

  return <DashboardContent email={user.email ?? ""} categorias={categorias} />;
}
