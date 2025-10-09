import Container from "../Container/Container";
import CasesCarrousel from "./CasessCarrousel/CasesCarrousel";
import CasesTitle from "./CasesTitle/CasesTitle";
import Disclaimer from "./Disclaimer/Disclaimer";
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
