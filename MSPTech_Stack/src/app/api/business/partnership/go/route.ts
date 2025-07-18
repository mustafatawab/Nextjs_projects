import { NextResponse, NextRequest } from "next/server";
import { Connect } from "@/lib/dbConfig";
import BusinessPartnership from "@/models/businessPartnership";

Connect();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { listned, time, day } = body;

    console.log(body);

    const business = new BusinessPartnership({
      go: { listned, time, day },
    });

    const savedBusiness = await business.save();

    return NextResponse.json({
      message: "Added Business Go Details",
      savedBusiness,
    });
  } catch (error: any) {
    return NextResponse.json({
      error: error.message,
    });
  }
}
