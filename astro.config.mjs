// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";
const isDev = process.env.NODE_ENV === "development";

// https://astro.build/config
export default defineConfig({
  site: "https://nediakstudio.com",
  integrations: [sitemap()],

  vite: {
    plugins: [tailwindcss()]
  },

  fonts: [
    {
      provider: fontProviders.local(),
      name: "Animo",
      cssVariable: "--font-animo",

      options: {
        variants: [
          {
            src: ["./src/assets/fonts/hwanimo-r500.woff2"],
            weight: "500",
            style: "normal",
            display: "swap"
          }
        ]
      }
    },

    {
      provider: fontProviders.local(),
      name: "Inter Tight",
      cssVariable: "--font-interTight",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/InterTight-VariableFont_wght.woff2"],
            weight: "100 900",
            style: "normal",
            display: "swap"
          }
        ]
      }
    },

    {
      provider: fontProviders.local(),
      name: "PP Neue Mono",
      cssVariable: "--font-neueMono",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/PPNeueMontrealMono-Medium.woff2"],
            weight: "500",
            style: "normal",
            display: "swap"
          }
        ]
      }
    }
  ],

  output: "static",

  adapter: cloudflare({
    // Use 'compile' for production, 'passthrough' for local dev to avoid fetch errors
    imageService: isDev ? "passthrough" : "compile"
  }),

  // This ensures Astro uses the local 'sharp' service during your local build/dev
  // but leaves it undefined for Cloudflare to handle in production
  image: {
    service: isDev ? { entrypoint: "astro/assets/services/sharp" } : undefined
  }
});
