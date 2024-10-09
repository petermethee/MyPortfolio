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
      className={`groupTranslateZ flex h-full w-[20rem] flex-col rounded-xl p-4 ${styles.card}`}
      glare
    >
      <div
        className={`inset-0 flex flex-1 flex-col justify-evenly gap-2 transition-all`}
      >
        {items.map((item, index) => (
          <DescriptionZone
            key={index}
            icon={item.icon}
            title={item.text}
            className="childTranslateZ bg-primary_dark/50"
          />
        ))}
      </div>
    </AmazingCard>
  );
}
