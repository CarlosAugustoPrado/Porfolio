"use client";

import { useState } from "react";
import ButtonMenu from "./ButtonMenu/ButtonMenu";
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";

import styles from "./header.module.scss";

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<header className={styles.mainHeader}>
			<Logo />
			<ButtonMenu onClick={toggleMenu} isOpen={isMenuOpen} />
			<Menu isOpen={isMenuOpen} />
		</header>
	);
}
