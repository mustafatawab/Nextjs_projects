import nodemailer from "nodemailer";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";

export const sendEmail = async ({ email, emailType, userId }: any) => {
  try {
    const hashedToken = await bcryptjs.hash(userId.toString(), 10);

    if (emailType === "VERIFY") {
      await User.findByIdAndUpdate(userId, {
        verifyToken: hashedToken,
        verifyTokenExpiry: Date.now() + 3600000,
      });
    } else if (emailType === "RESET") {
      await User.findByIdAndUpdate(userId, {
        forgotPasswordToken: hashedToken,
        forgotPasswordTokenExpiry: Date.now() + 3600000,
      });
    }

    let transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "7d524f8a3c6bfc",
        pass: "1f643524c83dc7",
        //add these in .env file
      },
    });

    const mailOptions = {
      from: "tawab05@gmail.com",
      to: email,
      subject: emailType === "VERIFY" ? "Verify Your Email" : "Reset Password",
      html: `<p> Click 
      <a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}">here</a>
                to ${
                  emailType === "VERIFY"
                    ? "Verify your email"
                    : "Reset Your Password"
                }
      </p> or Copy and Paste the Link below <br> ${
        process.env.DOMAIN
      }/verifyemail?token=${hashedToken}`,
    };

    const mailResponse = await transport.sendMail(mailOptions);
    return mailResponse;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
