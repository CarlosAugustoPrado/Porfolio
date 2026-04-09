import styles from "./text-hero.module.scss";

export default function TextHero() {
	return (
		<div className={styles.textArea}>
			<p className={styles.smallText}>
				Olá, sou o <strong>Carlos Augusto Prado</strong>👋🏻
			</p>
			<h1>
				Creative <br />
				Developer.
			</h1>
			<p className={styles.description}>
				Transformo designs ambiciosos em código com precisão <strong>pixel-perfect</strong>. <br /> Especialista em
				interfaces imersivas e animações complexas de alta performance.
			</p>
			<a href="mailto:devcarlosaugustoprado@gmail.com" className={styles.contato}>
				<span>Comece um projeto</span>
			</a>
		</div>
	);
}
