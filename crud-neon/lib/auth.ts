import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
export async function getUserFromRequest(request: NextRequest) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    throw new Error("Not authenticated");
  }

  const secret = process.env.JWT_SECRET || "taskflow";

  const isVerified = jwt.verify(token, secret);

  return isVerified;
}
