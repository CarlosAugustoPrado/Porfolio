import Container from "../../ui/Container/Container";
import CasesCarrousel from "./CasesCarrousel";
import CasesTitle from "./CasesTitle";
import Disclaimer from "./Disclaimer";
import styles from "./cases.module.scss";

export default function Cases({ projects }) {
	return (
		<section id="projetos" className={`${styles.sCases} section`}>
			<Container>
				<CasesTitle />
				<CasesCarrousel projects={projects} />
				<Disclaimer />
			</Container>
		</section>
	);
}
