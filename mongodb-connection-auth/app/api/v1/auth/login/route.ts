import { NextRequest } from "next/server";

export async function GET(request: Request) {
  return new Response("Hello, Next.js!");
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { email, password } = body;
  try {
  } catch (error) {}
}
