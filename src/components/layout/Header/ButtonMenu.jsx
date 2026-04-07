import styles from "./button-menu.module.scss";

export default function ButtonMenu({ onClick, isOpen }) {
	const buttonClasses = `${styles.btnMenu} ${isOpen ? styles.active : ""}`;

	return (
		<button className={buttonClasses} aria-label="Abrir menu" aria-expanded={isOpen} aria-controls="main-menu" onClick={onClick}>
			<span></span>
			<span></span>
		</button>
	);
}
