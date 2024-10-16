"use client";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar";
import { createTheme, ThemeProvider } from "@mui/material";
import { useEffect, useMemo } from "react";
import { cssColors, primary, secondary } from "../../theme";
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
          main: secondary,
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
      <div className="h-full overflow-y-auto overflow-x-hidden py-28">
        <div className={styles.bgGrid} />
        <Navbar />
        <div>{children}</div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
