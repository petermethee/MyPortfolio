"use client";
import { useEffect } from "react";
import { cssColors } from "../../theme";

export default function App() {
  useEffect(() => {
    Object.entries(cssColors).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--${key}`, value);
    });
  }, []);
  return <div></div>;
}
