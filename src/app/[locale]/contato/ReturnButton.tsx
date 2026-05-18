import styles from "./contato.module.scss";
import Link from "next/link";

export default function ReturnButton() {
	return (
		<Link href="/" className={styles.returnButton}>
			<div className={styles.linkContainer}>
				<svg width="72" height="22" viewBox="0 0 72 22" xmlns="http://www.w3.org/2000/svg" className="bow-arrow">
					<path
						fill="none"
						stroke="#4831d4"
						strokeWidth="2"
						strokeMiterlimit="0"
						d="M.043 11.119h70.714M60.917 1.319l9.8 9.8-9.8 9.8"
					/>
				</svg>
			</div>
		</Link>
	);
}
