import { Josefin_Sans, Merienda } from "next/font/google";
import App from "./App";
import "./globals.css";

export const standardFont = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});
export const meriendaFont = Merienda({
  subsets: ["latin"],
  weight: ["400", "700"],
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${meriendaFont.className} text-text`}>
        <App>{children}</App>
      </body>
    </html>
  );
}
