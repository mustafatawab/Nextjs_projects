import { NextRequest, NextResponse } from "next/server";
import DemoModel from "@/models/demo";
import { Connect } from "@/lib/dbConfig";

Connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { firstName, lastName, companyName, e_mail, phone, courtry } =
      reqBody;
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

    const demo = new DemoModel({
      firstName,
      lastName,
      companyName,
      e_mail,
      phone,
      courtry,
    });

    const savedDemo = await demo.save();

    console.log("Saved User from Sign Up APi ", savedDemo);

    return NextResponse.json({
      message: "Demo Scheduled successfully",
      success: true,
      savedDemo,
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
