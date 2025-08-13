import { DbConnection } from "@/lib/connection"

export async function GET(request: Request) {
  await DbConnection()
  return new Response('Hello, Next.js!')
}
