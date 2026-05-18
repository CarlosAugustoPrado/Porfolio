"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "../../../i18n/routing";
import { useTransition } from "react";
import styles from "./language-switcher.module.scss";

export default function LanguageSwitcher() {
	const locale = useLocale();
	const router = useRouter();
	const [isPending, startTransition] = useTransition();
	const pathname = usePathname();

	const nextLocale = locale === "pt" ? "en" : "pt";
	const label = nextLocale.toUpperCase();

	const toggleLocale = () => {
		startTransition(() => {
			router.replace(pathname, { locale: nextLocale });
		});
	};

	return (
		<button
			className={styles.languageSwitcher}
			onClick={toggleLocale}
			disabled={isPending}
			aria-label={`Switch language to ${label}`}
		>
			{label}
		</button>
	);
}
