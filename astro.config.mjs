// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	output: "static",
	vite: {
		plugins: [tailwindcss()],
	},
	build: {
		assets: "assets",
	},
	i18n: {
		locales: ["es", "en"],
		defaultLocale: "es",
	},

	integrations: [sitemap()],
	site: "https://chriscampadev.github.io",
	base: "/portfolio",
});
