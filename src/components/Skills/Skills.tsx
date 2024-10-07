import AmazingCard from "@/components/shared/AmazingCard";
import DescriptionZone from "@/components/shared/DescriptionZone";
import Level from "@/components/shared/Level";
import DesktopWindowsRoundedIcon from "@mui/icons-material/DesktopWindowsRounded";
import HttpRoundedIcon from "@mui/icons-material/HttpRounded";
import React from "react";

type TSkill = {
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
const skills: TSkill[] = [
  {
    title: "Frontend",
    icon: <DesktopWindowsRoundedIcon />,
    items: [
      {
        title: "Languages",
        icon: <HttpRoundedIcon />,
        skills: [
          {
            name: "Javascript",
            level: 4,
          },
          {
            name: "Typescript",
            level: 4,
          },
          {
            name: "HTML",
            level: 4,
          },
          {
            name: "CSS",
            level: 4,
          },
          {
            name: "HTTP",
            level: 4,
          },
        ],
      },
      {
        title: "Frameworks",
        icon: <HttpRoundedIcon />,
        skills: [
          {
            name: "React",
            level: 4,
          },
          {
            name: "Angular",
            level: 4,
          },
          {
            name: "NextJS",
            level: 4,
          },
        ],
      },
      {
        title: "Autre",
        icon: <HttpRoundedIcon />,
        skills: [
          {
            name: "Electron",
            level: 4,
          },
          {
            name: "NodeJS",
            level: 4,
          },
        ],
      },
    ],
  },
  {
    title: "Backend",
    icon: <DesktopWindowsRoundedIcon />,
    items: [
      {
        title: "Languages",
        icon: <HttpRoundedIcon />,
        skills: [
          {
            name: "Python",
            level: 4,
          },
          {
            name: "C#",
            level: 4,
          },
          {
            name: "Java",
            level: 4,
          },
          {
            name: "SQL",
            level: 4,
          },
          {
            name: "Golang",
            level: 3,
          },
        ],
      },

      {
        title: "Design Pattern",
        icon: <HttpRoundedIcon />,
        skills: [
          {
            name: "API Rest",
            level: 4,
          },
          {
            name: "Postgres",
            level: 4,
          },
          {
            name: "SQLite",
            level: 4,
          },
          {
            name: "GRPC protocol",
            level: 3,
          },
        ],
      },
    ],
  },

  {
    title: "Autres",
    icon: <DesktopWindowsRoundedIcon />,
    items: [
      {
        title: "Mobile",
        icon: <HttpRoundedIcon />,
        skills: [
          {
            name: "Android Studio",
            level: 3,
          },
          {
            name: "React Native",
            level: 3,
          },
        ],
      },

      {
        title: "Outils",
        icon: <HttpRoundedIcon />,
        skills: [
          {
            name: "Docker",
            level: 3,
          },
          {
            name: "Postman",
            level: 4,
          },
          {
            name: "Jira",
            level: 4,
          },
          {
            name: "Git",
            level: 4,
          },
          {
            name: "VSCode",
            level: 4,
          },
        ],
      },
    ],
  },
];
export default function Skills() {
  return (
    <div className="flex flex-wrap justify-evenly gap-10">
      {skills.map((skill) => (
        <AmazingCard
          key={skill.title}
          className="h-full p-4 bg-primary_dark rounded-xl w-[18rem] group shadow-xl gap-3 flex flex-col groupTranslateZ "
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
              className="bg-[#0000004b] w-full childTranslateZ"
              text={
                <div className="flex flex-col gap-2 w-full">
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
