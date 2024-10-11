import type { Config } from "tailwindcss";
import {
  accent,
  accent_dark,
  background,
  primary,
  primary_dark,
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
        secondary: accent,
        text: text,
        background: background,
        primary_dark: primary_dark,
        accent_dark: accent_dark,
      },
    },
  },
  plugins: [],
};
export default config;
