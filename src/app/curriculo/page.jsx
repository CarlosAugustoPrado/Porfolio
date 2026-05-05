import React from "react";
import styles from "./curriculo.module.scss";

export const metadata = {
	title: "Currículo | devCarlosAugustoPrado",
	description: "Currículo do desenvolvedor Carlos Augusto Prado",
};

export default function CurriculoPage() {
	return (
		<main className={`${styles.sHeroCurriculo}`}>
			<div className={styles.containerCurriculo}>
				<aside className={styles.asideCurriculo}>
					<div className={styles.contactCurriculo}>
						<a href="/">
							<span>Home</span>
						</a>
						<p>Minas Gerais, Brasil</p>
						<a href="mailto:devcarlosaugustoprado@gmail.com">
							<span>devcarlosaugustoprado@gmail.com</span>
						</a>
					</div>
					<div className={styles.asideGroup}>
						<h2>Tecnologias principais:</h2>
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
						<h2>Estilização & UI:</h2>
						<ul>
							<li>TailwindCSS</li>
							<li>Styled Components</li>
							<li>SASS</li>
							<li>CSS3</li>
							<li>HTML5</li>
						</ul>
					</div>
					<div className={styles.asideGroup}>
						<h2>Animações</h2>
						<ul>
							<li>GSAP</li>
							<li>Framer Motion</li>
						</ul>
					</div>
					<div className={styles.asideGroup}>
						<h2>Performance & Qualidade:</h2>
						<ul>
							<li>Core Web Vitals</li>
							<li>SEO Técnico</li>
							<li>Acessibilidade Web</li>
							<li>Testes Unitários (Jest, RTL)</li>
							<li>Testes E2E (Cypress).</li>
						</ul>
					</div>
					<div className={styles.asideGroup}>
						<h2>Back-end & DevOps:</h2>
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
						<h2>Senior Front-End Engineer</h2>
						<p>
							Focado na criação de softwares de alto desempenho e acessíveis, além de sistemas escaláveis que geram
							impacto real nos negócios.
						</p>
					</header>
					<section className={styles.experiences}>
						<h3>Experiência</h3>
						<p>
							Engenharia Front-end com foco em performance e micro-interações. Mais de 4 anos ajudando grandes marcas a
							transformarem ideias em experiências digitais de alto impacto.
						</p>
						<ul className={styles.listaPrincipal}>
							<li>
								<div className={styles.experienceHeading}>
									<h4>
										META (ALOCADO AO BANCO BMG) <span className={styles.position}>Desenvolvedor II</span>
									</h4>
									<div className={styles.data}>
										<span>Dezembro/2025 – Atualmente</span>
									</div>
								</div>
								<div className={styles.experienceBody}>
									<p>Atuando no ecossistema bancário, sempre focado na segurança e acessibilidade para o usuário.</p>
									<ul className={styles.jobPoints}>
										<li>
											Implementei a arquitetura de Micro Frontends utilizando Webpack Module Federation, reduzindo
											drasticamente o acoplamento entre as squads de desenvolvimento.
										</li>
										<li>
											Defini e estabeleci padrões de componentização em React e TypeScript, que foram adotados com
											sucesso por todo o time.
										</li>
										<li>
											Assegurei a conformidade com regras estritas de segurança e acessibilidade exigidas pelo
											ecossistema bancário.
										</li>
										<li>
											Stack: React, Next.js, TypeScript, GSAP, TailwindCSS, Styled Components, Webpack, Module
											Federation.
										</li>
									</ul>
								</div>
							</li>
							<li>
								<div className={styles.experienceHeading}>
									<h4>
										NERDWEB <span className={styles.position}>Arquiteto de Front-End Sênior</span>
									</h4>
									<div className={styles.data}>
										<span>Julho/2023 – Atualmente</span>
									</div>
								</div>
								<div className={styles.experienceBody}>
									<p>
										Atuando como Arquiteto de front-end, pude criar sites para grandes empresas nacionais como: Helyo,
										Nissei, Positivo, FurukawaSolutions, Byprice, NextQuimica entre inúmeras outras.
									</p>
									<ul className={styles.jobPoints}>
										<li>
											Lidero decisões técnicas de stack e arquitetura de software para múltiplos projetos de clientes
											corporativos de grande porte (FurukawaSolutions, Positivo, Compagas, NextQuimica).
										</li>
										<li>
											Conduzo entregas com foco absoluto em Core Web Vitals e SEO técnico, garantindo alto ranqueamento
											orgânico e melhores taxas de conversão.
										</li>
										<li>
											Alcancei e mantive pontuações superiores a 94 nas métricas de performance do Google
											(Lighthouse/Core Web Vitals) em todas as aplicações, garantindo uma experiência de usuário fluida
											e otimizada.
										</li>
										<li>
											Realizo integrações complexas de sistemas utilizando WordPress Headless e APIs REST/GraphQL.
										</li>
										<li>Stack: React, Next.js, TypeScript, GSAP, TailwindCSS, HTML, SCSS, JavaScript</li>
									</ul>
								</div>
							</li>
							<li>
								<div className={styles.experienceHeading}>
									<h4>
										7 SEVEN TRENDS <span className={styles.position}>Desenvolvedor Full-Stack Jr</span>
									</h4>
									<div className={styles.data}>
										<span>Abril/2023 – Julho/2023</span>
									</div>
								</div>
								<div className={styles.experienceBody}>
									<p>
										Atuando como Desenvolvedor FullStack Jr, pude aprender muito sobre o ecossistema PHP, principalmente
										com laravel, além de técnicas de CI/CD e Docker.
									</p>
									<ul className={styles.jobPoints}>
										<li>Desenvolvi o novo site do Colégio Pontual Alfenas e do Instituto da Cerveja Brasil.</li>
										<li>Implementei de APIs REST utilizando PHP</li>
										<li>Apliquei testes automatizados e usei serviços AWS.</li>
										<li>
											Usei constantemente técnicas de CI/CD para o deploy, integrando testes automatizados e pipelines.
										</li>
									</ul>
								</div>
							</li>
							<li>
								<div className={styles.experienceHeading}>
									<h4>
										FREELANCER<span className={styles.position}>Desenvolvedor Front-End Jr</span>
									</h4>
									<div className={styles.data}>
										<span>Fevereiro/2020 – Abril/2023</span>
									</div>
								</div>
								<div className={styles.experienceBody}>
									<p>
										O início de tudo, onde comecei a desenvolver minhas primeiras páginas para empresas locais e prestei
										serviços para empresas de design.
									</p>
									<ul className={styles.jobPoints}>
										<li>Criei diversas landing pages com foco em conversão</li>
										<li>Desenvolvi temas personalizados para WordPress.</li>
										<li>
											Estilizei os projetos de forma avançada com SASS, Styled Components, Framer Motion e Stitches.
										</li>
										<li>Automatizei tarefas com Gulp, reduzindo o tempo de desenvolvimento em até 40%.</li>
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
						href="/CV- Carlos Augusto Prado-2026.pdf"
						download="/CV- Carlos Augusto Prado-2026.pdf"
						className={styles.downloadLink}>
						<svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g id="SVGRepo_bgCarrier" strokeWidth="0" />

							<g id="SVGRepo_tracerCarrier" strokeLinecap="round" stroke-linejoin="round" />

							<g id="SVGRepo_iconCarrier">
								{" "}
								<path
									d="M12 7L12 14M12 14L15 11M12 14L9 11"
									stroke="rgba(71,71,71,0.75)"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>{" "}
								<path d="M16 17H12H8" stroke="rgba(71,71,71,0.75)" strokeWidth="1.5" stroke-linecap="round" />{" "}
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
