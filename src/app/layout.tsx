import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import { Josefin_Sans } from "next/font/google";
import App from "./App";
export const metadata: Metadata = {
  title: "Jérôme Procureur",
  description: "My Portfolio",
};

const font = Josefin_Sans({
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
      <body className={font.className}>
        <Navbar />
        <App />
        {children}
      </body>
    </html>
  );
}
