import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server'
const prisma = new PrismaClient();

export async function GET(request) {
  const url = new URL(request.url)
  const params = new URLSearchParams(url.search)
  const id = params.get('id')
    const categoriasConSubcategorias = await prisma.subCategorias.findMany({
      where: {
        categoriaId: id,
      }
    });
    return NextResponse.json(categoriasConSubcategorias);  
}