import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const userToken = request.cookies.get("sessionid")?.value;

  if (
    !userToken &&
    (request.nextUrl.pathname.startsWith("/account") ||
      request.nextUrl.pathname.startsWith("/manager/dashboard"))
  ) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (userToken) {
    try {
      const response = await fetch("http://backend:8000/api/valid_session/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Cookie: `sessionid=${userToken}`,
        },
      });

      const session = await response.json();

      const managerResponse = await fetch(
        "http://backend:8000/api/valid_manager/",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Cookie: `sessionid=${userToken}`,
          },
        }
      );
      const manager = await managerResponse.json();

      if (
        session.valid &&
        (request.nextUrl.pathname === "/login" ||
          request.nextUrl.pathname === "/manager" ||
          request.nextUrl.pathname === "/enroll" ||
          request.nextUrl.pathname === "/")
      ) {
        return NextResponse.redirect(new URL("/account", request.url));
      } else if (
        !manager.valid &&
        session.valid &&
        request.nextUrl.pathname.startsWith("/manager/dashboard")
      ) {
        return NextResponse.redirect(new URL("/account", request.url));
      } else if (
        manager.valid &&
        request.nextUrl.pathname.startsWith("/account")
      ) {
        return NextResponse.redirect(
          new URL("/manager/dashboard", request.url)
        );
      }
    } catch (error) {
      // Handle error checking token validity
      console.error("Error checking token validity:", error);
      // Delete session cookie
      const deleteCookieResponse = NextResponse.redirect(
        request.url.toString()
      );
      deleteCookieResponse.cookies.set("sessionid", "", {
        maxAge: 0,
        path: "/",
      });
      return deleteCookieResponse;
    }
  }
}

// export const config = {
//   matcher: [''],
// }
