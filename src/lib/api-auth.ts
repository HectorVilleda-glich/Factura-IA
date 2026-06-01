import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export async function getAuthenticatedUsuario() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user?.email) return null;

  let usuario = await prisma.usuario.findUnique({
    where: { correo: user.email },
  });

  if (!usuario) {
    usuario = await prisma.usuario.create({
      data: {
        id_usuario: user.id,
        correo: user.email,
        password: await bcrypt.hash(crypto.randomUUID(), 12),
      },
    });
  }

  return { supabaseUser: user, usuario };
}
