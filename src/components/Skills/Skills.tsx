import AmazingCard from "@/components/shared/AmazingCard";
import DescriptionZone from "@/components/shared/DescriptionZone";
import Level from "@/components/shared/Level";
import { skills } from "@/data/skills";

import React from "react";

export type TSkill = {
  title: string;
  icon: React.ReactNode;
  items: {
    title: string;
    icon: React.ReactNode;
    skills: {
      name: string;
      level: number;
    }[];
  }[];
};

export default function Skills() {
  return (
    <div className="flex flex-wrap justify-evenly gap-10">
      {skills.map((skill) => (
        <AmazingCard
          key={skill.title}
          className="groupTranslateZ group flex h-full w-[18rem] flex-col gap-3 rounded-xl bg-primary_dark p-4 shadow-xl"
          icon={skill.icon}
          title={skill.title}
          glare
          thresholdX={10}
          thresholdY={20}
        >
          {skill.items.map((item) => (
            <DescriptionZone
              key={item.title}
              icon={item.icon}
              title={item.title}
              className="childTranslateZ w-full bg-[#0000004b]"
              text={
                <div className="flex w-full flex-col gap-2">
                  {item.skills.map((skill) => (
                    <div key={skill.name} className="flex justify-between">
                      <span>{skill.name}</span>
                      <Level rank={skill.level} />
                    </div>
                  ))}
                </div>
              }
              dashed
            />
          ))}
        </AmazingCard>
      ))}
    </div>
  );
}
