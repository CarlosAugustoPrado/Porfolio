import Container from "../../ui/Container/Container";
import UpperFooter from "./UpperFooter";
import LowerFooter from "./LowerFooter";

export default function Footer() {
	return (
		<footer>
			<Container>
				<UpperFooter />
				<LowerFooter />
			</Container>
		</footer>
	);
}
