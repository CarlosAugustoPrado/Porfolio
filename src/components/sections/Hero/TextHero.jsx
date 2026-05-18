import styles from "./text-hero.module.scss";
import { useTranslations } from "next-intl";

export default function TextHero() {
	const t = useTranslations("hero");
	return (
		<div className={styles.textArea}>
			<p className={styles.smallText}>
				{t("greeting")} <strong>{t("name")}</strong>👋🏻
			</p>
			<h1>
				Creative <br />
				Developer.
			</h1>
			<p className={styles.description} dangerouslySetInnerHTML={{ __html: t.raw("description") }}></p>
			<a href="mailto:devcarlosaugustoprado@gmail.com" className={styles.contato}>
				<span>{t("cta")}</span>
			</a>
		</div>
	);
}
