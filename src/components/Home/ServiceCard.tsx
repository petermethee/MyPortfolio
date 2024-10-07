import React from "react";
import AmazingCard from "../shared/AmazingCard";
import DescriptionZone from "../shared/DescriptionZone";
import styles from "./ServiceCard.module.css";
export type TServiceCard = {
  title: string;
  icon: React.ReactNode;
  items: { text: string; icon: React.ReactNode }[];
};

export default function ServiceCard({ icon, title, items }: TServiceCard) {
  return (
    <AmazingCard
      title={title}
      icon={icon}
      className={`p-4 rounded-xl  w-[20rem] h-full  flex flex-col groupTranslateZ ${styles.card}`}
      glare
    >
      <div
        className={`flex flex-col gap-2 justify-evenly flex-1 inset-0 transition-all`}
      >
        {items.map((item) => (
          <DescriptionZone
            icon={item.icon}
            title={item.text}
            className="bg-primary_dark/50 childTranslateZ"
          />
        ))}
      </div>
    </AmazingCard>
  );
}
