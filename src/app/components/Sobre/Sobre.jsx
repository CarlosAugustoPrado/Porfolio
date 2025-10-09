import Container from "../Container/Container";
import Background from "./Background/Background";
import styles from "./sobre.module.scss";

export default function Sobre() {
	return (
		<section className={styles.sSobre}>
			<Container>
				<div className="wrapper">
					<Background />
				</div>
			</Container>
		</section>
	);
}
