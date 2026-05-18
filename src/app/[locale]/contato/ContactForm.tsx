"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { sendEmailAction, type FormState } from "./actions";
import { useTranslations } from "next-intl";

import styles from "./contato.module.scss";

const initialState: FormState = {
	success: false,
	message: "",
};

function SubmitButton() {
	const { pending } = useFormStatus();
	const t = useTranslations("contact");

	return (
		<button type="submit" disabled={pending} aria-disabled={pending} className={styles.submitButton}>
			{pending ? (
				t("sending")
			) : (
				<>
					{t("submit")}
					<svg width="72" height="22" viewBox="0 0 72 22" xmlns="http://www.w3.org/2000/svg" className="bow-arrow">
						<path
							fill="none"
							stroke="#4831d4"
							strokeWidth="2"
							strokeMiterlimit="0"
							d="M.043 11.119h70.714M60.917 1.319l9.8 9.8-9.8 9.8"
						/>
					</svg>
				</>
			)}
		</button>
	);
}

export default function ContactForm() {
	const [state, formAction] = useActionState(sendEmailAction, initialState);
	const t = useTranslations("contact");

	return (
		<form action={formAction} className={styles.formContainer} noValidate>
			<input
				type="text"
				name="_honeypot"
				style={{ display: "none" }}
				tabIndex={-1}
				autoComplete="off"
				aria-hidden="true"
			/>
			<div className={styles.header}>
				<h1>{t("title")}</h1>
				<p>{t("subtitle")}</p>
			</div>

			<div className={styles.row}>
				<div className={styles.inputGroup}>
					<label htmlFor="name">{t("name_label")}</label>
					<input
						type="text"
						id="name"
						name="name"
						placeholder={t("name_placeholder")}
						aria-describedby={state?.errors?.name ? "name-error" : undefined}
						required
						className={state?.errors?.name ? styles.inputError : ""}
					/>
					{state?.errors?.name && (
						<span id="name-error" aria-live="polite" className={styles.errorText}>
							{t(state.errors.name[0])}
						</span>
					)}
				</div>

				<div className={styles.inputGroup}>
					<label htmlFor="email">{t("email_label")}</label>
					<input
						type="email"
						id="email"
						name="email"
						placeholder={t("email_placeholder")}
						aria-describedby={state?.errors?.email ? "email-error" : undefined}
						required
						className={state?.errors?.email ? styles.inputError : ""}
					/>
					{state?.errors?.email && (
						<span id="email-error" aria-live="polite" className={styles.errorText}>
							{t(state.errors.email[0])}
						</span>
					)}
				</div>
			</div>

			<div className={styles.inputGroup}>
				<label htmlFor="message">{t("message_label")}</label>
				<textarea
					id="message"
					name="message"
					placeholder={t("message_placeholder")}
					rows={5}
					aria-describedby={state?.errors?.message ? "message-error" : undefined}
					required
					className={state?.errors?.message ? styles.inputError : ""}
				/>
				{state?.errors?.message && (
					<span id="message-error" aria-live="polite" className={styles.errorText}>
						{t(state.errors.message[0])}
					</span>
				)}
			</div>

			{state?.message && !state.errors && (
				<div role="alert" className={state.success ? styles.successMessage : styles.errorMessage}>
					{t(state.message)}
				</div>
			)}

			<div className={styles.buttonContainer}>
				<SubmitButton />
			</div>
		</form>
	);
}
