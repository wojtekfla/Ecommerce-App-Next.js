import prisma from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    console.log("trying to connect ...")
    const users = await prisma.user.findMany()
    console.log("Conection ok, users: ", users)
    return NextResponse.json(users)
  } catch (error: any) {
    console.error("API error: ", error)
    return NextResponse.json({ error: error.message}, { status: 500})
  }
  
}