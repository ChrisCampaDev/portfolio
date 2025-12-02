// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	vite: {
		plugins: [tailwindcss()],
	},

	i18n: {
		locales: ["es", "en"],
		defaultLocale: "es",
	},

	integrations: [react(), sitemap()],
	site: "https://chriscampadev.github.io",
	base: "/portfolio",
});
