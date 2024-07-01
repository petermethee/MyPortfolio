import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import App from "./App";
import "./globals.css";
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
        <App>{children}</App>
      </body>
    </html>
  );
}
