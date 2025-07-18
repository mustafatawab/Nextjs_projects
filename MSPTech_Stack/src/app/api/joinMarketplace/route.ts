import { NextRequest, NextResponse } from "next/server";
import JoinMarketplaceModel from "@/models/joinMarketplace";
import { Connect } from "@/lib/dbConfig";

Connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const {
        CompanyName,
        CompanyWebsite,
        name,
        email,
        job,
        country,
        preferredPerson,
    } = reqBody;
    console.log("Body :", reqBody);

    // //check if user already exist
    // const user = await Usear.findOne({ email, username });
    // if (user) {
    //   return NextResponse.json(
    //     { error: "User already exists" },
    //     { status: 400 }
    //   );
    // }

    //hash password

    const join = new JoinMarketplaceModel({
        CompanyName,
        CompanyWebsite,
        name,
        email,
        job,
        country,
        preferredPerson,
    });

    const savedMarkeplace = await join.save();

    console.log("Saved User for Joining the Marketplace  ", savedMarkeplace);

    return NextResponse.json({
      message: "Demo Scheduled successfully",
      success: true,
      savedMarkeplace,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        err: "Connot fetch " + error.message,
      },
      { status: 500 }
    );
  }
}
