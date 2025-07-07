import { NextRequest, NextResponse } from "next/server";
import ContactDemo from "@/models/contact";
import { Connect } from "@/lib/dbConfig";

Connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { name, email, message } = reqBody;
    console.log("Body :", reqBody);

    

    const contact = new ContactDemo({
      name,
      email,
      message,
    });

    const savedContact = await contact.save();

    console.log("Save COntact Datat from API :  ", savedContact);

    return NextResponse.json({
      message: "Contact Data Submitted Successfully",
      success: true,
      savedContact,
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
