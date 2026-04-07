import Container from "../../ui/Container/Container";
import Background from "./Background";
import styles from "./sobre.module.scss";

export default function Sobre() {
	return (
		<section className={`${styles.sSobre} section`}>
			<Container>
				<div className="wrapper">
					<Background />
				</div>
			</Container>
		</section>
	);
}
