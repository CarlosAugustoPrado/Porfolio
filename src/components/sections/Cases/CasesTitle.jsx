import styles from "./cases-title.module.scss";
import { useTranslations } from "next-intl";

export default function CasesTitle() {
	const t = useTranslations("cases");
	return (
		<div className={styles.titleArea}>
			<h2>{t("title")}</h2>
			<span>2020 - 2025</span>
		</div>
	);
}
