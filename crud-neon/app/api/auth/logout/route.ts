import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({ success: true });

  response.cookies.set("token", "", {
    path: "/",
    maxAge: 0,
  });

  console.log(response.cookies.get("token"))

  return response;
}