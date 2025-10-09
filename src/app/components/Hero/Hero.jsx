import styles from "./hero.module.scss";

import Container from "../Container/Container";
import TextHero from "./TextHero/TextHero";
import ImageAreaHero from "./ImageHero/ImageAreaHero";
import MarqueeContainer from "./MarqueeHero/MarqueeContainer";

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
