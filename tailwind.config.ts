import type { Config } from "tailwindcss";
import {
  background,
  primary,
  primary_dark,
  primary_light,
  secondary,
  secondary_dark,
  tertiary,
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
        secondary,
        primary,
        text,
        background,
        primary_dark,
        secondary_dark,
        primary_light,
        tertiary,
      },
    },
  },
  plugins: [],
};
export default config;
