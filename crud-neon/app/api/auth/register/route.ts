import { NextRequest, NextResponse } from "next/server";
import {  PrismaClient } from "@/app/generated/prisma/client";
import bcrypt from "bcrypt";




export async function GET(request: NextRequest) {
  return NextResponse.json({ status: "healthy" });
}

export async function POST(request: NextRequest) {
  const { name, email, password, confirmPassword } = await request.json();

  const prisma = new PrismaClient();

  const existingUser = await prisma.user.findUnique({
    where: { email : email },
  });

  if (existingUser) {
    return NextResponse.json(
      { message: "Email already exists" },
      { status: 401 }
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
    return NextResponse.json(user);
  }

  return NextResponse.json({ message: "something went wrong" } , {status : 401});
}
