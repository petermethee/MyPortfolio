"use client";
import Navbar from "@/components/Navbar";
import { useEffect } from "react";
import { cssColors } from "../../theme";
import styles from "./App.module.css";
export default function App({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    Object.entries(cssColors).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--${key}`, value);
    });
  }, []);
  return (
    <div className="h-full overflow-y-auto">
      <div className={styles.bgGrid} />

      <Navbar />
      <div className="max-w-screen-2xl mx-auto">{children}</div>
    </div>
  );
}
