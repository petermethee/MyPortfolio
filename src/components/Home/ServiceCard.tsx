import React from "react";
import Cards from "../shared/Cards";
import DescriptionZone from "../shared/DescriptionZone";

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
      className={`p-4 rounded-xl  bg-background w-[20rem] h-full  flex flex-col groupTranslateZ`}
      glare
    >
      <div
        className={`flex flex-col gap-2 justify-evenly flex-1 inset-0 transition-all childTranslateZ `}
      >
        {items.map((item) => (
          <DescriptionZone icon={item.icon} title={item.text} />
        ))}
      </div>
    </Cards>
  );
}
