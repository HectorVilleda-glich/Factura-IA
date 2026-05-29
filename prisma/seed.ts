import { PrismaClient } from "../src/generated/client";

const prisma = new PrismaClient();

async function main() {
  // Seed categorías de gasto
  const categorias = [
    { nombre: "Alimentación", description: "Gastos en comida y bebidas" },
    { nombre: "Transporte", description: "Gastos en movilización y transporte" },
    { nombre: "Combustible", description: "Gastos en combustible para vehículos" },
    { nombre: "Servicios", description: "Agua, luz, internet, teléfono" },
    { nombre: "Compras de Oficina", description: "Material y suministros de oficina" },
    { nombre: "Salud", description: "Gastos médicos y farmacéuticos" },
    { nombre: "Educación", description: "Cursos, libros y formación" },
    { nombre: "Otros", description: "Gastos no clasificados" },
  ];

  for (const cat of categorias) {
    await prisma.categoriaGasto.upsert({
      where: { nombre: cat.nombre },
      update: {},
      create: cat,
    });
  }

  // Seed tipos de documento
  const tipos = [
    { nombre: "Factura" },
    { nombre: "Recibo" },
    { nombre: "Otros" },
  ];

  for (const tipo of tipos) {
    await prisma.tipoDocumento.upsert({
      where: { nombre: tipo.nombre },
      update: {},
      create: tipo,
    });
  }

  console.log("✅ Seed completado");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
