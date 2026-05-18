import styles from "./disclaimer.module.scss";
import { useTranslations } from "next-intl";

export default function Disclaimer() {
	const t = useTranslations("cases");
	return (
		<p className={styles.disclaimer}>
			{t("disclaimer")}
		</p>
	);
}
