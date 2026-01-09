import { NextResponse, NextRequest } from "next/server";
import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";

export async function GET() {
  return NextResponse.json({ status: "healthy" });
}

export async function POST(request: NextRequest) {
  const { email, password } = await request.json();

  // const prisma = new PrismaClient();

  if (!email || !password) {
    return NextResponse.json(
      { message: "Email and Password are required" },
      { status: 400 }
    );
  }

  const user = await prisma.user.findUnique({
    where: { email: email },
  });

  if (!user) {
    return NextResponse.json(
      { message: "Register yourself first" },
      { status: 400 }
    );
  }

  const matchPassword = await bcrypt.compare(password, user.password!);

  if (!matchPassword) {
    return NextResponse.json(
      { message: "Incorrect Password" },
      { status: 401 }
    );
  }

  const payload = {
    userId: user.id,
    email: user.email,
  };
  const secret = process.env.JWT_SECRET!;
  const token = await jwt.sign(payload, secret, { expiresIn: "5h" });

  //   const thiscookie = await cookies();

  //   thiscookie.set({
  //     name: "token",
  //     value: token,
  //     httpOnly: true,
  //     maxAge: 60 * 60 * 24 * 7,
  //   });

  const response = NextResponse.json({ token, user });

  response.cookies.set("token", token, {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });

  if (response.cookies.get("token")?.value) {
    return response;
  }

  return NextResponse.json({ error: "Error occured" });
}
