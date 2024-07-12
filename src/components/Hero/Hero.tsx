"use client";
import { useState } from "react";
import styles from "./Hero.module.css";
export default function Hero() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.x + rect.width / 2;
    const y = e.clientY - rect.y + rect.height / 2;
    console.log("tag", x, y);

    setMousePosition({ x, y });
  };
  return (
    <div onMouseMove={handleMouseMove}>
      <div
        className={`h-screen w-full  relative flex items-center justify-center ${styles.bgGrid}`}
        style={{
          maskPosition: `${mousePosition.x}px ${mousePosition.y}px`,
        }}
      >
        {/* <div className="absolute pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div> */}
      </div>

      {/* <div className={styles.techCircle} /> */}

      {/* {<ParticlesBg />} */}
      {/* <img src={"../../assets/me.jpg"} className="w-[20%]" /> */}
    </div>
  );
}
