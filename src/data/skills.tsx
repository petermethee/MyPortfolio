import { TSkill } from "@/components/Skills/Skills";
import DesktopWindowsRoundedIcon from "@mui/icons-material/DesktopWindowsRounded";
import HttpRoundedIcon from "@mui/icons-material/HttpRounded";
export const skills: TSkill[] = [
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
