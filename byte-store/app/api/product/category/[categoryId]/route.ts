import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function GET(request: Request, { params }: { params: { categoryId: string } }) {
  try {
    let products;

    if (params.categoryId === 'all') {
      // zwroc wszystkie
      products = await prisma.product.findMany({
        include: {
          category: true,
          brand: true,
          stocks: true
        }
      });
    } else {
      // filtr po kategorii
      products = await prisma.product.findMany({
        where: {
          category: {
            id: params.categoryId
          }
        },
        include: {
          category: true,
          brand: true,
          stocks: true
        }
      })
    }

    return NextResponse.json(products)
  } catch (error) {
    console.error('Error fetching products by category:', error);
    return NextResponse.json({ error: 'Failed to fetch products '}, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
