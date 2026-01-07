import { NextResponse, NextRequest } from "next/server";
import bcrypt from "bcrypt";
import { PrismaClient } from "@/app/generated/prisma/client";
import jwt from 'jsonwebtoken'


export async function GET() {
  return NextResponse.json({ status: "healthy" });
}

export async function POST(request: NextRequest) {
  const { email, password } = await request.json();

  const prisma = new PrismaClient();

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    return NextResponse.json(
      { message: "Register yourself first" },
      { status: 501 }
    );
  }

  const matchPassword = await bcrypt.compare(password, user.password);

  if (!matchPassword) {
    return NextResponse.json(
      { message: "Incorrect Password" },
      { status: 501 }
    );
  }

  const secret = process.env.JWT_SECRET || "taskflow"
  const token = jwt.sign(user , secret , { expiresIn : "5h"})

  return NextResponse.json({ user , token });
}
