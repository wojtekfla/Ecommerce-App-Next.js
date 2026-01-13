import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import prisma from "@/lib/prisma"
import bcrypt from 'bcrypt'

const handler = NextAuth ({
  providers: [
    CredentialsProvider ({
      name: "Credentials",
      credentials: {
        identifier: { label: "Email or Phone", type: "text"},
        password: { label: "Password", type: "password" }
      },

      async authorize(credentials) {
        if (!credentials?.identifier || !credentials?.password) {
          return null
        }

        const user = await prisma.user.findFirst({
          where: {
            OR: [
              { email: credentials.identifier},
              { mobileNumber: credentials.identifier},
            ],
          }
        })

        if (!user) return null

        const isPasswordValid = await bcrypt.compare(credentials.password, user.passwordHash)

        if (!isPasswordValid) return null

        return {
          id: user.id.toString(),
          email: user.email,
          name: user.email,
        }
      }
    })
  ],

  session: {
    strategy: "jwt"
  },

  pages: {
    signIn: "/login"
  }
}) 

export { handler as GET, handler as POST }