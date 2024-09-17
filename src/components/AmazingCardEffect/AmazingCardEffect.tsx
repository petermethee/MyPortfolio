"use client";
import React, { CSSProperties, useState } from "react";
import styles from "./AmazingCardEffect.module.css";

const thresholdY = 40;
const thresholdX = 60;

export default function AmazingCardEffect({
  children,
  buttons,
}: {
  children: React.ReactNode;
  buttons?: React.ReactNode;
}) {
  const [style, setStyle] = useState<CSSProperties>({
    transform: "rotateX(0deg) rotateY(0deg)",
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLImageElement>) => {
    const { clientX, clientY } = e;

    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();

    const mouseY = clientY - top;
    const mouseX = clientX - left;
    const mouseYRatio = mouseY / height - 0.5;
    const mouseXRatio = mouseX / width - 0.5;
    const rotateY = -mouseXRatio * thresholdY;
    const rotateX = mouseYRatio * thresholdX;

    setStyle({
      transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      transition: "100ms",
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: "rotateX(0deg) rotateY(0deg)",
      transition: "500ms",
    });
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.childContainer}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        style={{
          ...style,
        }}
      >
        {children}
      </div>

      <div className={styles.buttonsContainer}>{buttons}</div>
    </div>
  );
}
