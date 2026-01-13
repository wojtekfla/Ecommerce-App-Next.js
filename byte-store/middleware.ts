import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { nanoid } from 'nanoid'

export function middleware(request: NextRequest) {
  // check if sessionCardId cookie exist
  if (!request.cookies.get('sessionCartId')) {
    // generate new sessionCardId
    const sessionCardId = nanoid(10)

    // create response with cookie
    const response = NextResponse.next({
      request: {
        headers: new Headers(request.headers),
      },
    })

    // set cookie ( expires in 1 day )
    response.cookies.set('sessionCardId', sessionCardId, {
      maxAge: 24 * 60 * 60, // 1 day
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production'
    })

    return response
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}