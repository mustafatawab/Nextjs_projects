import { NextResponse, NextRequest } from "next/server";
import { Connect } from "@/lib/dbConfig";
import BusinessDetails from '@/models/businessDetails'

Connect();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      numberOfEmploye,
      numberOfClients,
      focus,
      endpoints,
      phoneNumber,
      msCompetency,
      interest,
      psaTool,
    } = body;

    console.log(body);

    const business = new BusinessDetails({
      numberOfEmploye,
      numberOfClients,
      focus,
      endpoints,
      phoneNumber,
      msCompetency,
      interest,
      psaTool,
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
