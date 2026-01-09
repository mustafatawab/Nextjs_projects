import { NextResponse, NextRequest } from "next/server";

import { PrismaClient } from "@/app/generated/prisma/client";
import { getAuthUser } from "@/lib/auth";

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  const user = await getAuthUser();

  if (!user) {
    return NextResponse.json({ message: "Unathorized" }, { status: 401 });
  }

  const prisma = new PrismaClient();

  const task = await prisma.tasks.updateMany({
    where: { id: id, userId: user.userId },
    data: { completed: true },
  });

  if (task.count === 0) {
    return NextResponse.json({ message: "Task not found" }, { status: 401 });
  }

  return NextResponse.json({ message: "Task marked as completed" });
}
