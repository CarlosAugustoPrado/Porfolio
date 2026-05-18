import { Inter, Poppins } from "next/font/google";
import localFont from "next/font/local";
import "../../styles/globals.scss";
import Header from "../../components/layout/Header/Header";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "../../i18n/routing";

const sfUIText = localFont({
	src: [
		{ path: "./fonts/SFUIText-Light.ttf", weight: "300", style: "normal" },
		{ path: "./fonts/SFUIText-LightItalic.ttf", weight: "300", style: "italic" },
		{ path: "./fonts/SFUIText-Regular.ttf", weight: "400", style: "normal" },
		{ path: "./fonts/SFUIText-RegularItalic.ttf", weight: "400", style: "italic" },
		{ path: "./fonts/SFUIText-Medium.ttf", weight: "500", style: "normal" },
		{ path: "./fonts/SFUIText-MediumItalic.ttf", weight: "500", style: "italic" },
		{ path: "./fonts/SFUIText-Semibold.ttf", weight: "600", style: "normal" },
		{ path: "./fonts/SFUIText-SemiboldItalic.ttf", weight: "600", style: "italic" },
		{ path: "./fonts/SFUIText-Bold.ttf", weight: "700", style: "normal" },
		{ path: "./fonts/SFUIText-BoldItalic.ttf", weight: "700", style: "italic" },
		{ path: "./fonts/SFUIText-Heavy.ttf", weight: "800", style: "normal" },
		{ path: "./fonts/SFUIText-HeavyItalic.ttf", weight: "800", style: "italic" },
	],
	variable: "--font-sf-ui-text",
});

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

export async function generateMetadata({ params }) {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: "metadata" });

	return {
		title: t("home_title"),
		description: t("home_description"),
	};
}

export default async function RootLayout({ children, params }) {
	const { locale } = await params;

	if (!routing.locales.includes(locale)) {
		notFound();
	}

	const messages = await getMessages();

	return (
		<html lang={locale}>
			<body className={`${poppins.variable} ${inter.variable} ${sfUIText.variable}`}>
				<NextIntlClientProvider messages={messages}>
					<Header />
					{children}
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
