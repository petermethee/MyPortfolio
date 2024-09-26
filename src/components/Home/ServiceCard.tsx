import React from "react";
import Cards from "../shared/Cards";
import DescriptionZone from "../shared/DescriptionZone";
import styles from "./ServiceCard.module.css";

export type TServiceCard = {
  title: string;
  icon: React.ReactNode;
  items: { text: string; icon: React.ReactNode }[];
};

export default function ServiceCard({ icon, title, items }: TServiceCard) {
  return (
    <Cards
      title={title}
      icon={icon}
      className={`p-4 rounded-xl  bg-background w-[20rem] h-full ${styles.group} flex flex-col`}
      shine={false}
    >
      <div
        className={`flex flex-col gap-2 justify-evenly flex-1 inset-0 transition-all ${styles.content}`}
      >
        {items.map((item) => (
          /*  <div
            className={`flex items-center gap-2  p-3 rounded-lg bg-background/50 backdrop-blur-sm ${styles.item}`}
            key={item.text}
          >
            {item.icon}
            <p className={`text-sm ${font.className}`}>{item.text}</p>
          </div> */
          <DescriptionZone
            icon={item.icon}
            title={item.text}
            className="shadow-md shadow-black/30 "
            // scaleEffect
          />
        ))}
      </div>
    </Cards>
  );
}
