import type { Config } from "tailwindcss";
import { primaryColor, secondaryColor } from "./theme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: primaryColor,
        secondary: secondaryColor,
      },
    },
  },
  plugins: [],
};
export default config;
