"use client";
import { useState } from "react";
import AmazingCardEffect from "../AmazingCardEffect/AmazingCardEffect";
import styles from "./Cards.module.css";
export default function Cards({
  title,
  description,
  icon,
  color,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}) {
  const [pointerPosition, setPointerPosition] = useState<{
    x: number;
    y: number;
    fromCenter: number;
  }>({ x: 0, y: 0, fromCenter: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLImageElement>) => {
    const { clientX, clientY } = e;

    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();

    const mouseY = clientY - top;
    const mouseX = clientX - left;

    setPointerPosition({
      x: mouseX,
      y: mouseY,
      fromCenter:
        Math.sqrt((mouseX - width / 2) ** 2 + (mouseY - height / 2) ** 2) /
          Math.sqrt(width ** 2 + height ** 2) +
        0.1,
    });
  };

  const handleMouseLeave = () => {
    setPointerPosition((prevState) => ({
      x: prevState.x,
      y: prevState.y,
      fromCenter: 0.1,
    }));
  };

  return (
    <AmazingCardEffect>
      <div
        className="p-4 rounded-xl border-text/50 border-[1px] bg-background/80 overflow-hidden relative max-w-sm h-full"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          boxShadow: `0px 0px 25px -5px rgb(from ${color} r g b / 50%) `,
        }}
      >
        <div
          className={styles.glare}
          style={{
            background: `radial-gradient(farthest-corner circle at ${pointerPosition.x}px ${pointerPosition.y}px, rgb(from ${color} r g b / 30%), #96969640 50%, #24242464 110%)`,
            opacity: pointerPosition.fromCenter * 0.7,
          }}
        />
        <div
          className={styles.shinning}
          style={{
            backgroundPositionX: `${
              Math.sqrt(pointerPosition.x ** 2 + pointerPosition.y ** 2) * 1.5
            }px`,
            opacity: pointerPosition.fromCenter,
          }}
        />

        <div className="text-2xl text-secondary pb-3 flex gap-3 items-center">
          {icon} {title}
        </div>
        <div>{description}</div>
      </div>
    </AmazingCardEffect>
  );
}
