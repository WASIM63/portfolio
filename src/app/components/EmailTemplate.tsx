import * as React from "react";

interface EmailTemplateProps {
	name: string;
    email:string;
    msg:string;
}

export function EmailTemplate({ name, email, msg }: EmailTemplateProps) {
	return (
		<div className="flex flex-row justify-center">
			<h1>Portfolio Mail</h1>
            <p>From: {name}</p>
            <p>Email ID: {email}</p>
            <p>Message: {msg}</p>
		</div>
	);
}
