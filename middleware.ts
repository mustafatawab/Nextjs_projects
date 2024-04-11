import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
  //   return NextResponse.redirect(new URL('/pages/contact', request.url))
  const pathname = request.nextUrl.pathname;
  const session = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  if (pathname.startsWith("/pages/venderMarketplace")) {
    if (session) {
      return NextResponse.next();
    } else {
      return NextResponse.rewrite(new URL("/pages/signin", request.url));
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/pages/venderMarketplace/:path*"],
};
