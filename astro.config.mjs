// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  i18n: {
    locales: ["es", "en"],
    defaultLocale: "es",
  },

  integrations: [icon()],
  site: "https://chriscampadev.github.io",
  base: "/portfolio",
});


