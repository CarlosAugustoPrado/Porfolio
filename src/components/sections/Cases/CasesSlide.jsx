import Image from "next/image";
import Link from "next/link";

import styles from "./cases-slide.module.scss";

export default function CaseSlide({ project }) {
	const { title, description, link, image } = project;

	return (
		<div className={styles.case}>
			<div className={styles.imageArea}>
				<Image className={styles.image} src={image} alt={`Imagem do projeto ${title}`} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
			</div>

			<div className={styles.textArea}>
				<h3>{title}</h3>
				<p>{description}</p>
				<Link href={link} target="_blank" rel="noopener noreferrer">
					<span>Ver projeto</span>
				</Link>
			</div>
		</div>
	);
}
