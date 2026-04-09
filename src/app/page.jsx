import PageScroller from "../components/ui/PageScroller/PageScroller";
import SectionHero from "../components/sections/Hero/Hero";
import Cases from "../components/sections/Cases/Cases";
import Sobre from "../components/sections/Sobre/Sobre";
import Footer from "../components/layout/Footer/Footer";
import { getProjects } from "../lib/data";

export default async function Home() {
	const projects = await getProjects();

	return (
		<>
			<PageScroller>
				<SectionHero />
				<Cases projects={projects} />
				{/* <Footer /> */}
			</PageScroller>
		</>
	);
}
