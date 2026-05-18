import styles from "./background.module.scss";
import { useTranslations } from "next-intl";

export default function Background() {
	const t = useTranslations("sobre");
	return (
		<div className={styles.background}>
			<h2>{t("title")}</h2>
			<p>{t("p1")}</p>
			<p>{t("p2")}</p>
			<p>{t("p3")}</p>
		</div>
	);
}
