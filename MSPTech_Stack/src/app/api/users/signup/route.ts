import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import { Connect } from "@/lib/dbConfig";
import bcryptjs from "bcryptjs";
import { sendEmail } from "@/helper/mailer";

Connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { fullname, email, username, password } = reqBody;
    console.log("Body :", reqBody);

    //check if user already exist
    const user = await User.findOne({ email, username });
    if (user) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    //hash password
    const salt = await bcryptjs.genSalt(10);
    const hashPassword = await bcryptjs.hash(password, salt);

    const newUser = new User({
      fullname,
      email,
      username,
      password: hashPassword,
    });

    const savedUser = await newUser.save();

    console.log("Saved User from Sign Up APi ", savedUser);

    //send verfication email
    await sendEmail({
      email,
      emailType: "VERIFY",
      userId: savedUser._id,
    });

    return NextResponse.json({
      message: "User created SUccessfully",
      success: true,
      savedUser,
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
