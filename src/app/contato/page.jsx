import React from "react";
import styles from "./contato.module.scss";
import ContactForm from "./ContactForm";

export const metadata = {
	title: "Contato | devCarlosAugustoPrado",
	description: "Envie-me uma mensagem. Vamos conversar sobre o seu próximo projeto.",
};

export default function CurriculoPage() {
	return (
		<main className={styles.mainContato}>
			<ContactForm />
		</main>
	);
}
