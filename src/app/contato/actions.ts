"use server";

import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
	name: z.string().min(2, { error: "O nome deve ter pelo menos 2 caracteres." }).max(100, { error: "Nome muito longo." }),
	email: z.email({ error: "Introduza um e-mail válido." }),
	message: z.string().min(10, { error: "A mensagem deve ter pelo menos 10 caracteres." }).max(2000, { error: "A mensagem não pode ter mais de 2000 caracteres." }),
});

export type FormState = {
	success: boolean;
	message: string;
	errors?: Record<string, string[] | undefined>;
};
export async function sendEmailAction(prevState: FormState, formData: FormData): Promise<FormState> {
	// Honeypot: bots preenchem esse campo, humanos não
	if (formData.get("_honeypot")) {
		return { success: false, message: "Spam detectado." };
	}

	const validatedFields = contactSchema.safeParse({
		name: formData.get("name"),
		email: formData.get("email"),
		message: formData.get("message"),
	});

	if (!validatedFields.success) {
		return {
			success: false,
			message: "Por favor, corrija os erros no formulário.",
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
			message: "Mensagem enviada com sucesso! Entrarei em contacto em breve.",
		};
	} catch (error) {
		console.error("Erro ao enviar e-mail:", error);
		return {
			success: false,
			message: "Ocorreu um erro técnico ao enviar. Tente novamente mais tarde.",
		};
	}
}
