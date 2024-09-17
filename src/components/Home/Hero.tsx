"use client";
import Image from "next/image";
import me from "../../assets/me.png";
import styles from "./Hero.module.css";
export default function Hero() {
  return (
    <div className="relative flex justify-center max-w-screen-2xl mx-auto ">
      <div className="flex flex-col gap-8 items-center w-full  whitespace-nowrap h-fit ">
        <div className={styles.meContainer}>
          <div className={styles.glow} />
          <div className={styles.lights} />
          <Image className={styles.me} alt="" src={me} />
          <div className={styles.electronic} />
          <div className={styles.electronic2} />
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-7xl uppercase">
          Jérôme Procureur
        </h1>
        <h2 className="text-sm lg:text-2xl">
          Ingénieur logiciel - Fullstack & Web APP développeur
        </h2>
      </div>
    </div>
  );
}
