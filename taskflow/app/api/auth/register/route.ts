export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  const { name, email, password, confirmPassword } = await request.json();

  if (!name || !email || !password || !confirmPassword) {
    return NextResponse.json(
      { message: "All fields are required" },
      { status: 400 }
    );
  }

  const existingUser = await prisma.user.findUnique({
    where: { email: email },
  });

  if (existingUser) {
    return NextResponse.json(
      { message: "Email already exists" },
      { status: 400 }
    );
  }

  if (password != confirmPassword) {
    return NextResponse.json(
      { message: "Password does not match" },
      { status: 400 }
    );
  }
  const hashPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashPassword,
    },
  });

  if (user) {
    const payload = {
      userId: user.id,
      email: user.email,
    };
    const secret = process.env.JWT_SECRET!;
    const token = await jwt.sign(payload, secret, { expiresIn: "5h" });

    const response = NextResponse.json({
      token,
      user,
      message: "Registered successfully",
    });

    response.cookies.set("token", token, {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });
    return response;
  }

  return NextResponse.json(
    { message: "something went wrong" },
    { status: 500 }
  );
}
