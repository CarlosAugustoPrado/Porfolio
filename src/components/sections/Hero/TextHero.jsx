import styles from "./text-hero.module.scss";

export default function TextHero() {
	return (
		<div className={styles.textArea}>
			<p className={styles.smallText}>
				Olá, sou o <strong>Carlos Augusto Prado</strong>👋🏻
			</p>
			<h1>
				Frontend <br />
				Developer.
			</h1>
			<p className={styles.description}>
				Gosto de criar produtos que além de bonitos, <br /> proporcionem uma experiência única ao usuário
			</p>
			<a href="mailto:devcarlosaugustoprado@gmail.com" className={styles.contato}>
				<span>Comece um projeto</span>
			</a>
		</div>
	);
}
