import { NextResponse } from "next/server";

const projects = [
	{
		id: 1,
		title: "NextQuimica",
		description: "Projeto do site para a empresa NextQuimica, soluções em nanotecnologia",
		link: "https://nextquimica.com.br/",
		image: "/images/projects/demo-nextquimica.png",
	},
	{
		id: 2,
		title: "Compagas",
		description: "Novo site da Compagas, Companhia Paranaense de Gás Natural.",
		link: "https://www.compagas.com.br/",
		image: "/images/projects/demo-compagas.png",
	},
	{
		id: 3,
		title: "Helyo",
		description: "Novo site da Helyo, soluções em tecnologia",
		link: "https://helyo.com.br/",
		image: "/images/projects/demo-helyo.png",
	},
	{
		id: 4,
		title: "Byprice",
		description: "Site para a empresa Byprice, do grupo Helyo",
		link: "https://byprice.com.br/",
		image: "/images/projects/demo-byprice.png",
	},
	{
		id: 5,
		title: "Stepfy",
		description: "Site para a empresa Stepfy, do grupo Helyo",
		link: "https://stepfy.io/",
		image: "/images/projects/demo-stepfy.png",
	},
	{
		id: 6,
		title: "PositivoSEG",
		description: "Site para a empresa PositivoSEG, do grupo Positivo",
		link: "https://www.positivoseg.com.br/",
		image: "/images/projects/demo-positivoseg.png",
	},
];

export async function GET(request) {
	return NextResponse.json(projects);
}
