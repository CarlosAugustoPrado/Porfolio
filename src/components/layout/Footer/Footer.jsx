import Container from "../../ui/Container/Container";
import UpperFooter from "./UpperFooter";
import LowerFooter from "./LowerFooter";

import styles from "./footer.module.scss";

export default function Footer() {
	return (
		<footer className={`${styles.sFooter} section`}>
			<Container>
				<UpperFooter />
				<LowerFooter />
			</Container>
		</footer>
	);
}
