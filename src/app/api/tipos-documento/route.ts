import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const tipos = await prisma.tipoDocumento.findMany({ orderBy: { nombre: "asc" } });
  return NextResponse.json(tipos);
}
