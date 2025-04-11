import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
<<<<<<< HEAD
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
=======

export async function middleware(req: any) {
>>>>>>> 98c9c67ead9145d502e89e9ef460bf7512025a66
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  const {
    data: { session },
  } = await supabase.auth.getSession()

<<<<<<< HEAD
  // If user is not signed in and the current path starts with /dashboard
  if (!session && req.nextUrl.pathname.startsWith('/dashboard')) {
    const redirectUrl = req.nextUrl.clone()
    redirectUrl.pathname = '/auth/login'
    redirectUrl.searchParams.set(`redirectedFrom`, req.nextUrl.pathname)
    return NextResponse.redirect(redirectUrl)
=======
  // If user is not signed in and the current path is not /, redirect to /
  if (!session && req.nextUrl.pathname !== '/') {
    return NextResponse.redirect(new URL('/', req.url))
>>>>>>> 98c9c67ead9145d502e89e9ef460bf7512025a66
  }

  return res
}

export const config = {
<<<<<<< HEAD
  matcher: ['/dashboard/:path*'],
=======
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
>>>>>>> 98c9c67ead9145d502e89e9ef460bf7512025a66
} 