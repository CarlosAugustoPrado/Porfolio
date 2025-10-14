// next.config.mjs

import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
	sassOptions: {
		includePaths: [path.join(process.cwd(), "src/app")],
	},
};

export default nextConfig;
