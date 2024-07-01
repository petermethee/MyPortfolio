"use client";
import Navbar from "@/components/Navbar";
import { useEffect } from "react";
import { cssColors } from "../../theme";

export default function App({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    Object.entries(cssColors).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--${key}`, value);
    });
  }, []);
  return (
    <div className="h-full overflow-y-auto">
      <Navbar />
      {children}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      testes
    </div>
  );
}
