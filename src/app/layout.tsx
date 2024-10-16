import { Josefin_Sans, Merienda } from "next/font/google";
import App from "./App";
import "./globals.css";

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
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`font-merienda text-text ${standardFont.variable} ${meriendaFont.variable}`}
      >
        <App>{children}</App>
      </body>
    </html>
  );
}
