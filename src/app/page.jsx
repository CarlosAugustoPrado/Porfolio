import PageScroller from "./components/PageScroller/PageScroller";
import SectionHero from "./components/Hero/Hero";
import Cases from "./components/Cases/Cases";
import Sobre from "./components/Sobre/Sobre";
import { getProjects } from "./lib/data";

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
