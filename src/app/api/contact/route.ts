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
	try {
		const body = (await request.json()) as Partial<ContactRequestBody>;
		const name = typeof body.name === "string" ? body.name.trim() : "";
		const email = typeof body.email === "string" ? body.email.trim() : "";
		const message = typeof body.message === "string" ? body.message.trim() : "";

		if (!name || !email || !message) {
			return NextResponse.json(
				{ message: "Name, email, and message are required." },
				{ status: 400 }
			);
		}

		if (!process.env.NEXT_PUBLIC_RESEND_API_KEY || !process.env.NEXT_PUBLIC_EMAIL_ID_2) {
			return NextResponse.json(
				{ message: "Contact service is not configured." },
				{ status: 503 }
			);
		}

		const { error } = await resend.emails.send({
			from: "Acme <onboarding@resend.dev>",
			to: process.env.NEXT_PUBLIC_EMAIL_ID_2,
			subject: "Contact request from Portfolio viewrs",
			react: EmailTemplate({
				name,
				email,
				msg: message,
			}),
		});

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
