import { NextResponse } from 'next/server'
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

interface ContactRequestBody {
  name: string;
  email: string;
  message: string;
}

export async function POST(request: Request) {
    const senderDetails:ContactRequestBody = await request.json() as ContactRequestBody;

    try {
		const { data, error } = await resend.emails.send({
			from: "example@onresend.com",
			to: process.env.NEXT_PUBLIC_EMAIL_ID ?? "",
			subject: "Contact request from Portfolio viewrs",
			react:
				"Contact person name: " +
				senderDetails.name +
				" \nEmail ID: " +
				senderDetails.email +
				"\n Message: " +
				senderDetails.message,
		});
    console.log(data,error);
	  if(error) {
		  return NextResponse.json({ error }, { status: 500 });
	  }

	  return NextResponse.json(
		  { message: "Message sent successfully" },
		  { status: 200 }
	  );
  } catch (error: unknown) {
	  const errorMessage =
			error instanceof Error ? error.message : "Failed to send message";
		  return NextResponse.json({ message: errorMessage }, { status: 500 });
	  }
}