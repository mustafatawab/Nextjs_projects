import { NextResponse, NextRequest } from "next/server";
import { Connect } from "@/lib/dbConfig";
import BusinessPartnership from "@/models/businessPartnership";

Connect();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      adminFirstName,
      adminLastName,
      adminEmail,
      adminAccountTitle,
      adminPhone,
      agree,
    } = body;

    console.log(body);

    const business = new BusinessPartnership({
      adminFirstName,
      adminLastName,
      adminEmail,
      adminAccountTitle,
      adminPhone,
      agree,
    });

    const savedBusiness = await business.save();

    return NextResponse.json({
      message: "Added Business Partnership Details",
      savedBusiness,
    });
  } catch (error: any) {
    return NextResponse.json({
      error: error.message,
    });
  }
}
