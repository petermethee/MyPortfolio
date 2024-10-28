"use client";
import Image from "next/image";
import me from "../../assets/me.png";
import styles from "./Hero.module.css";
export default function Hero() {
  return (
    <div className="relative mx-auto flex max-w-screen-2xl justify-center">
      <div className="flex h-fit w-full flex-col items-center gap-8 whitespace-nowrap">
        <div className={styles.meContainer}>
          <div className={styles.glow} />
          <div className={styles.lights} />
          <Image className={styles.me} alt="" src={me} />
          <div className={styles.electronic} />
          <div className={styles.electronic2} />
        </div>

        <h1 className="text-3xl uppercase sm:text-5xl lg:text-7xl">
          Jérôme Procureur
        </h1>
        <h2 className="text-sm md:text-lg lg:text-2xl">
          Ingénieur logiciel - Fullstack & Web APP développeur
        </h2>
      </div>
    </div>
  );
}
