// next.config.mjs

import path from "path";
import { fileURLToPath } from "url";

// 1. Obter o diretório raiz do projeto de forma segura
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 2. Criar o caminho absoluto para o seu arquivo SCSS principal
//    🚨 VERIFIQUE SE ESTE CAMINHO ESTÁ 100% CORRETO 🚨
const mainSassPath = path.join(__dirname, "src/app/styles/main.scss");

/** @type {import('next').NextConfig} */
const nextConfig = {
	sassOptions: {
		// 3. Injetar o caminho absoluto no prependData, garantindo as barras corretas
		prependData: `@use "${mainSassPath.replace(/\\/g, "/")}" as *;`,
	},
};

export default nextConfig;
