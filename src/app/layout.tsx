import type { Metadata } from "next";
import { Merienda } from "next/font/google";
import App from "./App";
import "./globals.css";
export const metadata: Metadata = {
  title: "Jérôme Procureur",
  description: "My Portfolio",
};

/* const font = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
}); */
const meriendaFont = Merienda({
  subsets: ["latin"],
  weight: ["400", "700"],
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${meriendaFont.className} text-gray-300 `}>
        <App>{children}</App>
      </body>
    </html>
  );
}
