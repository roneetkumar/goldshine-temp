import nodemailer from "nodemailer";
import { NextResponse } from "next/server"; // Use this if in app router

export async function POST(req: Request) {
  const data = await req.json();

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    logger: true,
    debug: true,
  });

  const mailOptions = {
    from: `"Website Contact" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_RECEIVER,
    subject: "New Contact Form Submission",
    text: `
      Name: ${data.fullName}
      Email: ${data.email}
      Phone: ${data.phone}
      Address: ${data.address}
      Service: ${data.service}
      Frequency: ${data.frequency}
      Message: ${data.message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}
