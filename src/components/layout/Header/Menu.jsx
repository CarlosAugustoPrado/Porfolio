import Link from "next/link";

import styles from "./menu.module.scss";

export default function Menu({ isOpen }) {
	const menuClasses = `${styles.mainMenu} ${isOpen ? styles.active : ""}`;

	return (
		<nav id="main-menu" className={menuClasses}>
			<ul>
				<li>
					<a href="/CV-CarlosAugustoPrado-2025.pdf" download="CV-CarlosAugustoPrado-2025.pdf">
						<span>Currículo</span>
					</a>
				</li>
			</ul>
			<div className={styles.contact}>
				<p>Fale comigo</p>
				<a href="mailto:devcarlosaugustoprado@gmail.com">
					<span>devcarlosaugustoprado@gmail.com</span>
				</a>
			</div>
		</nav>
	);
}
