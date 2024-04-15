import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const userToken = request.cookies.get("sessionid")?.value;
  if (!userToken && request.nextUrl.pathname.startsWith("/account")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (
    userToken &&
    (request.nextUrl.pathname === "/login" ||
      request.nextUrl.pathname === "/enroll" ||
      request.nextUrl.pathname === "/")
  ) {
    return NextResponse.redirect(new URL("/account", request.url));
  }
}

// export const config = {
//   matcher: [''],
// }