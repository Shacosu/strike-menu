import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function GET() {
 const platos = await prisma.categorias.findMany()
 return NextResponse.json(platos)
}