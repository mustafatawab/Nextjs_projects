import { Connect } from "@/lib/dbConfig";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const res = await Connect();

    return NextResponse.json({
      message: "Connected ",
    });
  } catch (error: any) {
    return NextResponse.json({
      error: "SOmething went wrong",
    });
  }
}
