import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

type JwtPayload = {
  userId: string;
  email: string;
};

export async function getAuthUser() {
  const cookieStore = await cookies();
  const token = await cookieStore.get("token")?.value;

  if (!token) {
    return null;
  }

  const secret = process.env.JWT_SECRET!;

  try {
    const decoded = jwt.verify(token, secret) as JwtPayload;
    return decoded;
  } catch (error) {
    throw new Error("Invalid Token");
  }
}
