"use client";
import React, { useState } from "react";
import AmazingCardEffect from "./AmazingCardEffect";
import styles from "./Cards.module.css";
export default function Cards({
  title,
  children,
  icon,
  className,
  glare,
  shine,
  thresholdX = 60,
  thresholdY = 40,
}: {
  title: string;
  children: React.ReactNode;
  icon: React.ReactNode;
  className?: string;
  glare?: boolean;
  shine?: boolean;
  thresholdY?: number;
  thresholdX?: number;
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
    <AmazingCardEffect thresholdX={thresholdX} thresholdY={thresholdY}>
      <div
        className={"absolute inset-[-1px] rounded-xl"}
        style={{
          background: `radial-gradient(farthest-corner circle at ${pointerPosition.x}px ${pointerPosition.y}px, #f3f3f3, #96969600 50%)`,
          opacity: pointerPosition.fromCenter > 0.1 ? 1 : 0,
        }}
      />

      <div
        className={"relative " + " " + className}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          // boxShadow: `0px 0px 25px -5px rgb(from ${secondary} r g b / 50%) `,
          transformStyle: "preserve-3d",
        }}
      >
        <div className="overflow-hidden absolute inset-0 rounded-xl">
          {glare && (
            <div
              className={styles.glare}
              style={{
                background: `radial-gradient(farthest-corner circle at ${pointerPosition.x}px ${pointerPosition.y}px, #ffffff5e, #96969640 40%, #24242464 110%)`,
                opacity: pointerPosition.fromCenter * 0.7,
              }}
            />
          )}
          {shine && (
            <div
              className={styles.shinning}
              style={{
                backgroundPositionX: `${
                  Math.sqrt(pointerPosition.x ** 2 + pointerPosition.y ** 2) *
                  1.5
                }px`,
                opacity: pointerPosition.fromCenter,
              }}
            />
          )}
        </div>

        <div className="text-xl text-secondary pb-3 flex gap-3 items-center">
          {icon} {title}
        </div>
        {children}
      </div>
    </AmazingCardEffect>
  );
}
