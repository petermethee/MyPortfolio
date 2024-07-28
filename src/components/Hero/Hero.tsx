"use client";
import Image from "next/image";
import { useState } from "react";
import bg from "../../assets/bg.png";
import me from "../../assets/me.png";
import styles from "./Hero.module.css";
export default function Hero() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.x - rect.width / 2;
    const y = e.clientY - rect.y - rect.height / 2;
    setMousePosition({ x, y });
  };

  return (
    <div className="relative h-full flex justify-center ">
      <div className={styles.bgGrid} />

      {/* <div
          className={styles.light}
          style={{ left: mousePosition.x, top: mousePosition.y }}
          /> */}

      <div className="flex flex-col gap-8 items-center w-full  whitespace-nowrap h-fit ">
        <div className={styles.meContainer}>
          <Image
            onMouseMove={handleMouseMove}
            className={styles.bg}
            alt=""
            src={bg}
            style={{
              maskPosition: `${mousePosition.x}px ${mousePosition.y}px`,
            }}
          />
          <div className={styles.glow} />
          <div className={styles.lights} />
          <Image className={styles.me} alt="" src={me} />
          <div className={styles.electronic} />
          <div className={styles.electronic2} />
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-7xl uppercase">
          Jérôme Procureur
        </h1>
        <h2 className="text-sm lg:text-2xl  uppercase">
          Ingénieur logiciel - Fullstack & Web APP développeur
        </h2>
      </div>
    </div>
  );
}
