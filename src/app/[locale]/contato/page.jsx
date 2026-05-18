import React from "react";
import styles from "./contato.module.scss";
import ContactForm from "./ContactForm";
import ReturnButton from "./ReturnButton";

import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }) {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: "metadata" });
	return {
		title: t("contato_title"),
		description: t("contato_description"),
	};
}
export default function CurriculoPage() {
	return (
		<main className={styles.mainContato}>
			<ContactForm />
			<ReturnButton />
		</main>
	);
}
