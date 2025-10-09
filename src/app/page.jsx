import PageScroller from "./components/PageScroller/PageScroller";
import SectionHero from "./components/Hero/Hero";
import Cases from "./components/Cases/Cases";
import Sobre from "./components/Sobre/Sobre";

async function getProjects() {
	const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
	const res = await fetch(`${apiUrl}/api/projects`, { cache: "force-cache" });

	if (!res.ok) {
		throw new Error("Falha ao buscar os projetos.");
	}
	return res.json();
}

export default async function Home() {
	const projects = await getProjects();

	return (
		<PageScroller>
			<SectionHero />
			<Cases projects={projects} />

			<Sobre />
		</PageScroller>
	);
}
