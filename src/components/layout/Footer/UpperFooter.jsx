import styles from "./uper-footer.module.scss"

export default function UpperFooter() {
	return (
		<div className="upper-footer">
			<div className="column">
				<h2>Diga oi</h2>
				<ul>
					<li>
						<a href="mailto:devcarlosaugustoprado@gmail.com">devCarlosAugustoPrado</a>
					</li>
					<li>
						<a href="tel:+5535997444912">WhatsApp</a>
					</li>
				</ul>
			</div>
			<div className="column">
				<ul>
					<li>
						<a href="#">Currículo</a>
					</li>
					<li>
						<a href="#">Stack de tecnologias</a>
					</li>
				</ul>
			</div>
		</div>
	);
}
