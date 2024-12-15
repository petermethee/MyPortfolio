import { meriendaFont, standardFont } from "@/helper/fonts";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import App from "./App";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <title>Jérôme Procureur</title>
        <meta
          name="description"
          content="Portfolio de Jérôme Procureur, développeur fullstack."
        />
        <meta
          name="keywords"
          content="Jérôme Procureur, fullstack, react, javascript, typescript, web, app, developpeur, portfolio, JAVA, .NET"
        />
        <meta name="author" content="Jérôme Procureur" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Jérôme Procureur" />
        <meta
          property="og:description"
          content="Portfolio de Jérôme Procureur, développeur fullstack."
        />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/portfolio.svg" />
      </head>
      <body
        className={`font-merienda text-text ${standardFont.variable} ${meriendaFont.variable}`}
      >
        <App>{children}</App>
      </body>
      <SpeedInsights />
      <Analytics />
    </html>
  );
}
