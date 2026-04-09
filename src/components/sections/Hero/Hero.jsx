import styles from "./hero.module.scss";

import Container from "../../ui/Container/Container";
import TextHero from "./TextHero";
import ImageAreaHero from "./ImageAreaHero";

export default function SectionHero() {
	return (
		<section>
			<section id="inicio" className={`${styles.sHero} section`}>
				<Container>
					<div className={styles.content}>
						<TextHero />
						<ImageAreaHero />
					</div>
				</Container>
			</section>
		</section>
	);
}
