// Aqui vivem seus dados. No futuro, isso poderia ser uma chamada a um banco de dados.
const projects = [
	{
		id: 1,
		title: "Compagas",
		description: {
			pt: "Novo site da Compagas, Companhia Paranaense de Gás Natural.",
			en: "New website for Compagas, the Paraná Natural Gas Company."
		},
		link: "https://www.compagas.com.br/",
		image: "/images/projects/demo-compagas.png",
	},
	{
		id: 2,
		title: "NextQuimica",
		description: {
			pt: "Projeto do site para a empresa NextQuimica, soluções em nanotecnologia",
			en: "Website project for NextQuimica, nanotechnology solutions"
		},
		link: "https://nextquimica.com.br/",
		image: "/images/projects/demo-nextquimica.png",
	},

	{
		id: 3,
		title: "Gobrax",
		description: {
			pt: "Novo site da Gobrax, conectividade de frotas",
			en: "New website for Gobrax, fleet connectivity"
		},
		link: "https://helyo.com.br/",
		image: "/images/projects/demo-helyo.png",
	},

	{
		id: 4,
		title: "Helyo",
		description: {
			pt: "Novo site da Helyo, soluções em tecnologia",
			en: "New website for Helyo, technology solutions"
		},
		link: "https://helyo.com.br/",
		image: "/images/projects/demo-helyo.png",
	},
	{
		id: 5,
		title: "Byprice",
		description: {
			pt: "Site para a empresa Byprice, do grupo Helyo",
			en: "Website for Byprice, an Helyo group company"
		},
		link: "https://byprice.com.br/",
		image: "/images/projects/demo-byprice.png",
	},
	{
		id: 6,
		title: "Stepfy",
		description: {
			pt: "Site para a empresa Stepfy, do grupo Helyo",
			en: "Website for Stepfy, an Helyo group company"
		},
		link: "https://stepfy.io/",
		image: "/images/projects/demo-stepfy.png",
	},
	{
		id: 7,
		title: "PositivoSEG",
		description: {
			pt: "Site para a empresa PositivoSEG, do grupo Positivo",
			en: "Website for PositivoSEG, a Positivo group company"
		},
		link: "https://www.positivoseg.com.br/",
		image: "/images/projects/demo-positivoseg.png",
	},
];

export async function getProjects(locale = 'pt') {
	return projects.map((project) => ({
		...project,
		description: project.description[locale] || project.description.pt
	}));
}
