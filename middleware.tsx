import { url } from "inspector";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const login = true;

  if (request.nextUrl.pathname === "/") {
    if (login)
      return NextResponse.redirect(new URL("/dashboard/overview", request.url));
    else
      return NextResponse.redirect(
        new URL("/authentication/login", request.url)
      );
  }

  if (request.nextUrl.pathname === "/dashboard") {
    return NextResponse.redirect(new URL("/dashboard/overview", request.url));
  }

  if (request.nextUrl.pathname === "/authentication") {
    return NextResponse.redirect(new URL("/authentication/login", request.url));
  }
  // Authentication
  if (request.nextUrl.pathname.startsWith("/authentication")) {
    if (login) {
      return NextResponse.redirect(new URL("/dashboard/overview", request.url));
    }
  } else if (request.nextUrl.pathname.startsWith("/dashboard")) {
    if (!login) {
      return NextResponse.redirect(
        new URL("/authentication/login", request.url)
      );
    }
  }
}
