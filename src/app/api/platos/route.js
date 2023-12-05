import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET(request) {
  const url = new URL(request.url);
  const params = new URLSearchParams(url.search);
  const subcategoriaId = params.get("id");

  const platosDeSubcategoria = await prisma.platos.findMany({
    where: {
      subcategoriaId: subcategoriaId,
    },
  });

  return NextResponse.json(platosDeSubcategoria);
}

export async function POST(request) {
  try {
    // Parsea el cuerpo JSON de la solicitud
    const data = await json(request);

    // Crea un nuevo plato en la base de datos
    const nuevoPlato = await prisma.platos.create({
      data,
    });

    // Retorna una respuesta JSON con el nuevo plato creado
    return NextResponse.json(nuevoPlato, { status: 201 });
  } catch (error) {
    // Maneja errores y retorna una respuesta con el código de error apropiado
    console.error("Error al agregar un nuevo plato:", error);
    return NextResponse.json({ error: error.message }, { status: error.status || 500 });
  }
}