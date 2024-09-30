import type { Config } from "tailwindcss";
import {
  accent,
  background,
  primary,
  primary_dark,
  secondary,
  text,
} from "./theme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: primary,
        secondary: secondary,
        text: text,
        background: background,
        accent: accent,
        primary_dark: primary_dark,
      },
    },
  },
  plugins: [],
};
export default config;
