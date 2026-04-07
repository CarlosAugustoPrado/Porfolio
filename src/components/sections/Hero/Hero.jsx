import styles from "./hero.module.scss";

import Container from "../../ui/Container/Container";
import TextHero from "./TextHero";
import ImageAreaHero from "./ImageAreaHero";
import MarqueeContainer from "./MarqueeContainer";

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
