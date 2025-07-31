import { NextResponse } from "next/server";
import { Resend } from "resend";
import { EmailTemplate } from "@/app/components/EmailTemplate";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

interface ContactRequestBody {
	name: string;
	email: string;
	message: string;
}

export async function POST(request: Request) {
	const senderDetails: ContactRequestBody =
		(await request.json()) as ContactRequestBody;

	try {
		const { data, error } = await resend.emails.send({
			from: "Acme <onboarding@resend.dev>",
			to: process.env.NEXT_PUBLIC_EMAIL_ID_2 ?? "",
			subject: "Contact request from Portfolio viewrs",
			react: EmailTemplate({
				name: senderDetails.name,
				email: senderDetails.email,
				msg: senderDetails.message,
			}),
		});
		console.log(data, error);
		if (error) {
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
