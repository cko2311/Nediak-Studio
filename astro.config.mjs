// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";
const isDev = process.env.NODE_ENV === "development";

// https://astro.build/config
export default defineConfig({
  site: "https://nediakstudio.com",
  sitemap(),

  vite: {
    plugins: [tailwindcss()]
  },

  fonts: [
    {
      provider: fontProviders.local(),
      name: "Right Grotesk",
      cssVariable: "--font-rightGrotesk",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/PPRightGrotesk-CompactBlack.woff2"],
            weight: [900],
            style: "normal",
            display: "swap"
          }
        ]
      }
    },
    {
      provider: fontProviders.local(),
      name: "PP Neue Medium",
      cssVariable: "--font-neueMed",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/PPNeueMontreal-Medium.woff2"],
            weight: [500],
            style: "normal",
            display: "swap"
          }
        ]
      }
    },
    {
      provider: fontProviders.local(),
      name: "PP Neue Reg",
      cssVariable: "--font-neueReg",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/PPNeueMontreal-Regular.woff2"],
            weight: [400],
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
            weight: [500],
            style: "normal",
            display: "swap"
          }
        ]
      }
    }
  ],

  output: "static",

  adapter: cloudflare({
    // In production, we use 'compile' for the free tier.
    // In dev, we use 'passthrough' to avoid the 'fetch' error.
    imageService: isDev ? "passthrough" : "compile"
  }),

  // This block ensures Astro doesn't try to look for Cloudflare
  // bindings when you're running locally.
  image: {
    service: isDev ? { entrypoint: "astro/assets/services/sharp" } : undefined
  },

  integrations: [sitemap()]
});
