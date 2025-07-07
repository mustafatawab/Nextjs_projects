import { NextResponse, NextRequest } from "next/server";
import { Connect } from "@/lib/dbConfig";
import BusinessModel from "@/models/businessModel";

Connect();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const {
      model,
      classification
    } = body;

    console.log(body);

    const business = new BusinessModel({
        model,
        classification,
    });

    const savedBusiness = await business.save();

    return NextResponse.json({
      message: "Added Business Model Details",
      savedBusiness,
    });
  } catch (error: any) {
    return NextResponse.json({
      error: error.message,
    });
  }
}
