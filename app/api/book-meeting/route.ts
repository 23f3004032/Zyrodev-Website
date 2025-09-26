import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, company, preferredDateTime, agenda } = await request.json();

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_SERVER_USER, // Your Gmail address from .env.local
        pass: process.env.EMAIL_SERVER_PASSWORD, // Your App Password from .env.local
      },
    });

    // Email content
    const mailOptions = {
      from: `"Zyrodev Website" <${process.env.EMAIL_SERVER_USER}>`,
      to: process.env.EMAIL_TO, 
      subject: `New Meeting Request from ${name}`,
      html: `
        <h1>New Meeting Request</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Preferred Date & Time:</strong> ${preferredDateTime}</p>
        <hr>
        <h3>Agenda:</h3>
        <p>${agenda}</p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Failed to send email.' }, { status: 500 });
  }
}