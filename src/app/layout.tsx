import { meriendaFont, standardFont } from "@/helper/fonts";
import App from "./App";
import "./globals.css";

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
