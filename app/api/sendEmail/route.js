// app/api/sendEmail/route.js
import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(request) {
  const { name, email, phone, startDate, endDate, product } =
    await request.json();

  const formattedStartDate = new Date(startDate).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const formattedEndDate = new Date(endDate).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const clientMsg = {
    to: 'hello@spaceproof.tech',
    from: 'hello@spaceproof.tech',
    subject: `New Rental Reservation for ${product}`,
    text: `You have received a new rental request.\n\nDetails:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nRental Dates: ${formattedStartDate} - ${formattedEndDate}\nProduct: ${product}`,
  };

  const customerMsg = {
    to: email,
    from: 'hello@spaceproof.tech',
    subject: `Confirmation for Your Rental Reservation of ${product}`,
    text: `Thank you, ${name}, for your rental request!\n\nWe have received your details:\n\nRental Dates: ${formattedStartDate} - ${formattedEndDate}\nProduct: ${product}\n\nWe will send you a confirmation within 24 hours. Payments are due in full prior to rental pickup. Visa, Mastercard, AMEX, and E-Transfer are accepted.`,
  };

  try {
    await sgMail.send(clientMsg);

    await sgMail.send(customerMsg);

    return NextResponse.json({ message: 'Emails sent successfully' });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'Failed to send emails' },
      { status: 500 }
    );
  }
}
