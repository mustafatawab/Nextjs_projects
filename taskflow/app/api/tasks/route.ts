import { NextResponse, NextRequest } from "next/server";
// import { PrismaClient } from "@prisma/client";
import { getAuthUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
export async function GET() {
  const user = await getAuthUser();

  if (!user) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
  // const prisma = new PrismaClient();

  const tasks = await prisma.tasks.findMany({
    where: {
      userId: user.userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return NextResponse.json({ tasks });
}

export async function POST(request: NextRequest) {
  const { title } = await request.json();

  if (!title) {
    return NextResponse.json(
      { message: "The Title for the todo is requried" },
      { status: 401 }
    );
  }
  const user = await getAuthUser();

  if (!user) {
    return NextResponse.json({ message: "Unathorized" }, { status: 401 });
  }

  // const prisma = new PrismaClient();

  const task = await prisma.tasks.create({
    data: {
      title,
      userId: user.userId,
      completed: false,
    },
  });

  return NextResponse.json({ message: "Task Created", task });
}
