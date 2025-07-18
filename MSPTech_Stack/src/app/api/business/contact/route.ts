import { NextResponse, NextRequest } from "next/server";
import { Connect } from "@/lib/dbConfig";
import BusinessContact from "@/models/businessContact";
Connect();
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      companyName,
      businessEmail,
      domain,
      partof_franchise,
      country,
      city,
      state,
      postalCode,
      currency,
      headquater_address,
      phoneNumber,
    } = body;

    console.log(body);

    const business = new BusinessContact({
      companyName,
      businessEmail,
      domain,
      partof_franchise,
      country,
      city,
      state,
      postalCode,
      currency,
      headquater_address,
      phoneNumber,
    });

    const savedBusiness = await business.save();

    return NextResponse.json({
      message: "Successfully Added Business Contact Details",
      savedBusiness,
    });
  } catch (error: any) {
    return NextResponse.json({
      error: error.message,
      message: "Something went wrong",
    });
  }
}
