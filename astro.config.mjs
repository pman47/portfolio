// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://pman47.cc",
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
});
