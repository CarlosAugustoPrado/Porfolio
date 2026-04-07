import { Inter, Poppins } from "next/font/google";
import "../styles/globals.scss";
import Header from "../components/layout/Header/Header";

const poppins = Poppins({
	variable: "--font-poppins",
	subsets: ["latin"],
	weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
	weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
	title: "Portfolio devCarlosAugustoPrado",
	description: "Projeto do portfolio do dev Carlos Augusto Prado",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${poppins.variable} ${inter.variable}`}>
				<Header />
				{children}
			</body>
		</html>
	);
}
