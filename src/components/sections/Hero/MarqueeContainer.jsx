import Badge from "./Badge";
import styles from "./marquee-hero.module.scss";

export default function MarqueeContainer() {
	return (
		<>
			<div className={styles.marqueeContent}>
				<Badge imageSrc="/images/icons/icon-frontend.svg" textoBadge="Front-End" />
				<Badge imageSrc="/images/icons/icon-code.svg" textoBadge="Code" />
				<Badge imageSrc="/images/icons/icon-atom.svg" textoBadge="ReactJS" />
				<Badge imageSrc="/images/icons/icon-nextjs.svg" textoBadge="NextJS" />
				<Badge imageSrc="/images/icons/icon-tailwindcss.svg" textoBadge="TailwindCSS" />
				<Badge imageSrc="/images/icons/icon-css.svg" textoBadge="Animações" />
			</div>
		</>
	);
}
