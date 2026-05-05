import Link from "next/link";

import styles from "./menu.module.scss";

export default function Menu({ isOpen }) {
	const menuClasses = `${styles.mainMenu} ${isOpen ? styles.active : ""}`;

	return (
		<nav id="main-menu" className={menuClasses}>
			<ul>
				<li>
					<Link href="/curriculo">
						<span>Currículo</span>
					</Link>
				</li>
			</ul>
			<div className={styles.contact}>
				<p>Fale comigo</p>
				<Link href="/contato">
					<span>Contato</span>
				</Link>
			</div>
		</nav>
	);
}
