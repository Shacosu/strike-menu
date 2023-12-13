import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET(request) {
  const url = new URL(request.url);
  const params = new URLSearchParams(url.search);
  const subcategoriaId = params.get("id");

  // Convierte el subcategoriaId a un número entero
  const subcategoriaIdAsInt = parseInt(subcategoriaId, 10);

  const platosDeSubcategoria = await prisma.platos.findMany({
    where: {
      subcategoriaId: subcategoriaIdAsInt,
    },
  });

  return NextResponse.json(platosDeSubcategoria);
}
