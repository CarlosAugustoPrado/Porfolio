import styles from "./image-area-hero.module.scss";
import Image from "next/image";

export default function ImageAreaHero() {
	return (
		<div className={styles.imageArea}>
			<div className={styles.imageContainer}></div>
			<Image className={styles.vectorTop} src={"/images/home/hero-vector-top.png"} width={120} height={59} alt="Risco"></Image>
			<Image className={styles.vectorBottom} src={"/images/home/hero-vector-bottom.png"} width={148} height={57} alt="Risco"></Image>
		</div>
	);
}
