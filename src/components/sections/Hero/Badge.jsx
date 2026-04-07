import Image from "next/image";
import styles from "./badge.module.scss";

export default function Badge({ imageSrc, textoBadge }) {
	return (
		<div className={styles.badge}>
			<Image src={imageSrc} width={24} height={24} alt={`Ícone de ${textoBadge}`}></Image>
			<span>{textoBadge}</span>
		</div>
	);
}
