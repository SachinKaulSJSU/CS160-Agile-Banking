import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const userToken = request.cookies.get('sessionid')?.value;
  if(!userToken) {
     return NextResponse.redirect(new URL('/login',request.url))
  }
}

export const config = {
  matcher: ['/account'],
}