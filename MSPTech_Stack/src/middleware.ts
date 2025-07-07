import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { toast, Toaster } from "react-hot-toast";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const isPublicPath = path === "/pages/signin" || path === "/pages/signup";

  const token = request.cookies.get("token")?.value || "";

  if (isPublicPath && token) {
    return NextResponse.redirect(
      new URL("/pages/venderMarketplace", request.nextUrl)
    );
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/pages/signin", request.nextUrl));
  }
  
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/pages/venderMarketplace/:path*", "/pages/signup/:path*"],
};
