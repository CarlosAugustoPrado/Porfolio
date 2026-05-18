"use client";

import { useState } from "react";
import { usePathname } from "../../../i18n/routing";
import ButtonMenu from "./ButtonMenu";
import Logo from "./Logo";
import Menu from "./Menu";

import styles from "./header.module.scss";

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const pathname = usePathname();

	const hiddenRoutes = ["/curriculo"];
	if (hiddenRoutes.includes(pathname)) return null;

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const isContactPage = pathname === "/contato";

	return (
		<header className={styles.mainHeader}>
			{!isContactPage && <Logo className={styles.mainLogo} />}
			<div className={styles.rightActions}>
				<ButtonMenu onClick={toggleMenu} isOpen={isMenuOpen} />
			</div>
			<Menu isOpen={isMenuOpen} />
		</header>
	);
}
