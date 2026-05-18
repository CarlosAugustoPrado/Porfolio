import React from "react";
import styles from "./curriculo.module.scss";
import { useTranslations, useLocale } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }) {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: "metadata" });
	return {
		title: t("curriculo_title"),
		description: t("curriculo_description"),
	};
}

export default function CurriculoPage() {
	const t = useTranslations("curriculo");
	const locale = useLocale();
	const cvFile =
		locale === "en"
			? "/CV- Carlos Augusto Prado-2026-English.pdf"
			: "/CV- Carlos Augusto Prado-2026.pdf";

	return (
		<main className={`${styles.sHeroCurriculo}`}>
			<div className={styles.containerCurriculo}>
				<aside className={styles.asideCurriculo}>
					<div className={styles.contactCurriculo}>
						<a href="/">
							<span>Home</span>
						</a>
						<p>{t("location")}</p>
						<a href="mailto:devcarlosaugustoprado@gmail.com">
							<span>devcarlosaugustoprado@gmail.com</span>
						</a>
					</div>
					<div className={styles.asideGroup}>
						<h2>{t("main_tech")}</h2>
						<ul>
							<li>React (Server Components, Hooks, Context API)</li>
							<li>Next.js</li>
							<li>Micro Frontends</li>
							<li>Webpack</li>
							<li>Module Federations</li>
							<li>TypeScript</li>
							<li>JavaScript</li>
						</ul>
					</div>
					<div className={styles.asideGroup}>
						<h2>{t("styling")}</h2>
						<ul>
							<li>TailwindCSS</li>
							<li>Styled Components</li>
							<li>SASS</li>
							<li>CSS3</li>
							<li>HTML5</li>
						</ul>
					</div>
					<div className={styles.asideGroup}>
						<h2>{t("animations")}</h2>
						<ul>
							<li>GSAP</li>
							<li>Framer Motion</li>
						</ul>
					</div>
					<div className={styles.asideGroup}>
						<h2>{t("performance")}</h2>
						<ul>
							<li>Core Web Vitals</li>
							<li>SEO Técnico</li>
							<li>Acessibilidade Web</li>
							<li>Testes Unitários (Jest, RTL)</li>
							<li>Testes E2E (Cypress).</li>
						</ul>
					</div>
					<div className={styles.asideGroup}>
						<h2>{t("backend")}</h2>
						<ul>
							<li>APIs REST</li>
							<li>GraphQL</li>
							<li>WordPress</li>
							<li>Headless</li>
							<li>Docker</li>
							<li>AWS (S3, Lambda)</li>
							<li>Git, CI/CD</li>
						</ul>
					</div>
				</aside>
				<article className={styles.mainContent}>
					<header>
						<h1>
							Carlos <br /> Augusto
						</h1>
						<h2>{t("role")}</h2>
						<p>{t("summary")}</p>
					</header>
					<section className={styles.experiences}>
						<h3>{t("experience_title")}</h3>
						<p>{t("experience_summary")}</p>
						<ul className={styles.listaPrincipal}>
							<li>
								<div className={styles.experienceHeading}>
									<h4>
										{t("jobs.meta.company")} <span className={styles.position}>{t("jobs.meta.position")}</span>
									</h4>
									<div className={styles.data}>
										<span>{t("jobs.meta.period")}</span>
									</div>
								</div>
								<div className={styles.experienceBody}>
									<p>{t("jobs.meta.summary")}</p>
									<ul className={styles.jobPoints}>
										{t.raw("jobs.meta.points").map((point, i) => (
											<li key={i}>{point}</li>
										))}
									</ul>
								</div>
							</li>
							<li>
								<div className={styles.experienceHeading}>
									<h4>
										{t("jobs.nerdweb.company")} <span className={styles.position}>{t("jobs.nerdweb.position")}</span>
									</h4>
									<div className={styles.data}>
										<span>{t("jobs.nerdweb.period")}</span>
									</div>
								</div>
								<div className={styles.experienceBody}>
									<p>{t("jobs.nerdweb.summary")}</p>
									<ul className={styles.jobPoints}>
										{t.raw("jobs.nerdweb.points").map((point, i) => (
											<li key={i}>{point}</li>
										))}
									</ul>
								</div>
							</li>
							<li>
								<div className={styles.experienceHeading}>
									<h4>
										{t("jobs.seven.company")} <span className={styles.position}>{t("jobs.seven.position")}</span>
									</h4>
									<div className={styles.data}>
										<span>{t("jobs.seven.period")}</span>
									</div>
								</div>
								<div className={styles.experienceBody}>
									<p>{t("jobs.seven.summary")}</p>
									<ul className={styles.jobPoints}>
										{t.raw("jobs.seven.points").map((point, i) => (
											<li key={i}>{point}</li>
										))}
									</ul>
								</div>
							</li>
							<li>
								<div className={styles.experienceHeading}>
									<h4>
										{t("jobs.freelancer.company")} <span className={styles.position}>{t("jobs.freelancer.position")}</span>
									</h4>
									<div className={styles.data}>
										<span>{t("jobs.freelancer.period")}</span>
									</div>
								</div>
								<div className={styles.experienceBody}>
									<p>{t("jobs.freelancer.summary")}</p>
									<ul className={styles.jobPoints}>
										{t.raw("jobs.freelancer.points").map((point, i) => (
											<li key={i}>{point}</li>
										))}
									</ul>
								</div>
							</li>
						</ul>
					</section>
				</article>
				<div className={styles.actionCurriculo}>
					<a href="https://www.linkedin.com/in/carlosaugustoprado/" target="_blank" className={styles.linkedinLink}>
						<img src="/images/icons/icon-linkedin-in.svg" alt="ícone do linkedin" />
					</a>
					<a
						href={cvFile}
						download={cvFile}
						className={styles.downloadLink}>
						<svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g id="SVGRepo_bgCarrier" strokeWidth="0" />

							<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />

							<g id="SVGRepo_iconCarrier">
								{" "}
								<path
									d="M12 7L12 14M12 14L15 11M12 14L9 11"
									stroke="rgba(71,71,71,0.75)"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>{" "}
								<path d="M16 17H12H8" stroke="rgba(71,71,71,0.75)" strokeWidth="1.5" strokeLinecap="round" />{" "}
								<path
									d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8"
									stroke="rgba(71,71,71,0.75)"
									strokeWidth="1.5"
									strokeLinecap="round"
								/>{" "}
							</g>
						</svg>
						<span>Download</span>
					</a>
				</div>
			</div>
		</main>
	);
}
