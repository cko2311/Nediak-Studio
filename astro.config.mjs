// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://www.nediakstudio.com",

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
            style: "normal"
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
            style: "normal"
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
            style: "normal"
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
            style: "normal"
          }
        ]
      }
    }
  ],

  output: "static",
  adapter: cloudflare({
    // 'compile' handles images at build-time, which is free/unlimited
    imageService: "compile"
  })
});
