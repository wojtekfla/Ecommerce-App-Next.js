import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"
import bcrypt from "bcrypt"


export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { email, phone, password, country } = body

    if (!email || !phone || !password || !country) {
      return NextResponse.json (
        { error: "Missing required fields"},
        { status: 400 }
      )
    }

    const existingEmail = await prisma.user.findUnique({
      where: { email }
    })

    if (existingEmail) {
      return NextResponse.json(
        { error: "Email already exist"},
        { status: 409 }
      )
    }

    const existingPhone = await prisma.user.findUnique({
      where: { phone }
    })

    if (existingPhone) {
      return NextResponse.json(
        { error: "Phone number already exist"},
        { status: 409 }
      )
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    await prisma.user.create({
      data: {
        email,
        phone,
        password: hashedPassword,
        country
      }
    })

    return NextResponse.json({ succes: true }, { status: 201 })

  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: "Internal server error"},
      { status: 500 }
    )
  }
}