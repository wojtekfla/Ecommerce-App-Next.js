import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function GET() {
  try {
    const categories = await prisma.category.findMany();

    // all categories for frontend
    const allCategory = {
      id: 'all',
      name: 'All Products',
      description: 'Browse all avaible products in our store',
      image: '/images/categories/all.jpg',
      exploreInfo: 'Discover our complete range of tech product',
      createdAt: new Date()
    };

    return NextResponse.json([allCategory, ...categories]);
  } catch (error) {
    console.error('Error fetching categories: ', error);
    return NextResponse.json({ error: 'Failed to fetch categories' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}