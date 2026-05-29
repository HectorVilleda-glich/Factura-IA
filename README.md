# FacturaApp

Aplicación web para registrar, almacenar y clasificar facturas de gastos personales o empresariales.

## Stack Tecnológico

| Capa | Tecnología |
|------|-----------|
| Framework | Next.js 15 (App Router) |
| Base de Datos | PostgreSQL + Prisma ORM |
| Autenticación | NextAuth (Auth.js) v5 |
| Estilos | Tailwind CSS |
| Despliegue | Vercel |
| Gestor de paquetes | npm |

## Estructura del Proyecto

```
src/
├── app/
│   ├── api/
│   │   ├── auth/
│   │   │   ├── [...nextauth]/route.ts   # NextAuth handler
│   │   │   └── register/route.ts        # Registro de usuarios
│   │   ├── facturas/route.ts            # CRUD facturas
│   │   └── categorias/route.ts          # Catálogo de categorías
│   ├── dashboard/page.tsx               # Panel principal (protegido)
│   ├── login/page.tsx                   # Inicio de sesión
│   ├── register/page.tsx                # Registro
│   ├── layout.tsx
│   └── page.tsx                         # Landing page
├── lib/
│   ├── auth.ts                          # Configuración NextAuth
│   └── prisma.ts                        # Cliente Prisma singleton
├── middleware.ts                         # Protección de rutas
└── types/
    └── next-auth.d.ts                   # Extensión de tipos de sesión
prisma/
├── schema.prisma                         # Modelos de base de datos
└── seed.ts                              # Datos iniciales (categorías, tipos)
```

## Modelos de Base de Datos

- **Usuario** — autenticación y datos del usuario
- **Factura** — registro de cada factura
- **CategoriaGasto** — catálogo de categorías (Alimentación, Transporte, etc.)
- **TipoDocumento** — Factura / Recibo / Otros
- **DetalleEnvio** — registro de envíos a la contadora
- **FacturaEnviada** — relación N:N entre facturas y envíos

## Primeros Pasos

### 1. Instalar dependencias
```bash
npm install
```

### 2. Configurar variables de entorno
```bash
cp .env.example .env
# Editar .env con tu cadena de conexión PostgreSQL y clave secreta
```

### 3. Ejecutar migraciones
```bash
npx prisma migrate dev --name init
```

### 4. Poblar datos iniciales
```bash
npx prisma db seed
```

### 5. Correr en desarrollo
```bash
npm run dev
```

## Despliegue en Vercel

1. Conecta el repositorio en [vercel.com](https://vercel.com)
2. Agrega las variables de entorno (`DATABASE_URL`, `NEXTAUTH_SECRET`, `NEXTAUTH_URL`)
3. Vercel ejecuta automáticamente `prisma generate && next build`

> **Nota:** Para producción usa una base de datos PostgreSQL en la nube (Supabase, Neon, Railway, etc.)

## Variables de Entorno

| Variable | Descripción |
|----------|-------------|
| `DATABASE_URL` | Cadena de conexión PostgreSQL |
| `NEXTAUTH_SECRET` | Clave secreta para JWT (genera con `openssl rand -base64 32`) |
| `NEXTAUTH_URL` | URL de la app (en Vercel se puede omitir) |
