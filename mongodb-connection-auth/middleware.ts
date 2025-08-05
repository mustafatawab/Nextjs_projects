import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
//   const cookieStore = cookies();
//   const token = cookieStore.get("token")
  const { pathname } = request.nextUrl;

  const allCookies = request.cookies.getAll();
  console.log(allCookies);

  if (pathname.startsWith("/profile") || pathname.startsWith('/dashboard')) {
    const token = request.cookies.get("token");
    console.log("Auth Token Is Here " , token)
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/profile" , "/dashboard/:path*"],
};
