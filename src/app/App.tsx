"use client";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar";
import i18n from "@/language/i18n";
import { createTheme, ThemeProvider } from "@mui/material";
import { useEffect, useMemo } from "react";
import { I18nextProvider } from "react-i18next";
import { accent, cssColors, primary } from "../../theme";
import styles from "./App.module.css";
import { meriendaFont } from "./layout";

export default function App({ children }: { children: React.ReactNode }) {
  const theme = useMemo(() => {
    return createTheme({
      typography: { fontFamily: meriendaFont.style.fontFamily },
      palette: {
        mode: "dark",
        primary: {
          main: primary,
        },
        secondary: {
          main: accent,
        },
      },
    });
  }, []);

  useEffect(() => {
    Object.entries(cssColors).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--${key}`, value);
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <I18nextProvider i18n={i18n}>
        <div className="h-full overflow-y-auto overflow-x-hidden py-28">
          <div className={styles.bgGrid} />
          <Navbar />
          <div>{children}</div>
          <Footer />
        </div>
      </I18nextProvider>
    </ThemeProvider>
  );
}
