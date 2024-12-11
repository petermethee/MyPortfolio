import { Josefin_Sans, Merienda } from "next/font/google";

export const standardFont = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--josefin-font",
});
export const meriendaFont = Merienda({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--merienda-font",
});
