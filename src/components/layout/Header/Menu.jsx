import { Link } from "../../../i18n/routing";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

import styles from "./menu.module.scss";

export default function Menu({ isOpen }) {
	const t = useTranslations("menu");
	const menuClasses = `${styles.mainMenu} ${isOpen ? styles.active : ""}`;

	return (
		<nav id="main-menu" className={menuClasses}>
			<ul>
				<li>
					<Link href="/curriculo">
						<span>{t("curriculo")}</span>
					</Link>
				</li>
			</ul>
			<div className={styles.contact}>
				<p>{t("contact_label")}</p>
				<Link href="/contato">
					<span>{t("contato")}</span>
				</Link>
				<span className={styles.languageDivider} />
				<LanguageSwitcher />
			</div>
		</nav>
	);
}
