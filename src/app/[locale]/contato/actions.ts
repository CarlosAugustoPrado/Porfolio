"use server";

import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
	name: z.string().min(2, { message: "error_name_min" }).max(100, { message: "error_name_max" }),
	email: z.email({ message: "error_email" }),
	message: z.string().min(10, { message: "error_message_min" }).max(2000, { message: "error_message_max" }),
});

export type FormState = {
	success: boolean;
	message: string;
	errors?: Record<string, string[] | undefined>;
};
export async function sendEmailAction(prevState: FormState, formData: FormData): Promise<FormState> {
	if (formData.get("_honeypot")) {
		return { success: false, message: "error_general" };
	}

	const validatedFields = contactSchema.safeParse({
		name: formData.get("name"),
		email: formData.get("email"),
		message: formData.get("message"),
	});

	if (!validatedFields.success) {
		return {
			success: false,
			message: "error_form",
			errors: validatedFields.error.flatten().fieldErrors,
		};
	}

	const { name, email, message } = validatedFields.data;

	try {
		await resend.emails.send({
			from: "Carlos Prado <contato@carlosaugustoprado.dev>",
			to: ["devcarlosaugustoprado@gmail.com"],
			subject: `Nova mensagem de ${name}`,
			replyTo: email,
			text: `Nome: ${name}\nE-mail: ${email}\n\nMensagem:\n${message}`,
		});

		return {
			success: true,
			message: "success",
		};
	} catch (error) {
		console.error("Erro ao enviar e-mail:", error);
		return {
			success: false,
			message: "error_general",
		};
	}
}
