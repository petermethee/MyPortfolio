import { TSkill } from "@/components/Skills/Skills";
import DataObjectRoundedIcon from "@mui/icons-material/DataObjectRounded";
import DesktopWindowsRoundedIcon from "@mui/icons-material/DesktopWindowsRounded";
import HomeRepairServiceRoundedIcon from "@mui/icons-material/HomeRepairServiceRounded";
import PhoneAndroidRoundedIcon from "@mui/icons-material/PhoneAndroidRounded";
import StorageRoundedIcon from "@mui/icons-material/StorageRounded";
import WorkspacesRoundedIcon from "@mui/icons-material/WorkspacesRounded";
export const skills: TSkill[] = [
  {
    title: "Frontend",
    icon: <DesktopWindowsRoundedIcon />,
    items: [
      {
        title: "Languages",
        icon: <DataObjectRoundedIcon />,
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
        icon: <DataObjectRoundedIcon />,
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
        title: "Autres",
        icon: <WorkspacesRoundedIcon />,
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
    icon: <StorageRoundedIcon />,
    items: [
      {
        title: "Languages",
        icon: <DataObjectRoundedIcon />,
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
          {
            name: "GRPC",
            level: 3,
          },
        ],
      },

      {
        title: "Autres",
        icon: <WorkspacesRoundedIcon />,
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
        ],
      },
    ],
  },

  {
    title: "Autres",
    icon: <WorkspacesRoundedIcon />,
    items: [
      {
        title: "Mobile",
        icon: <PhoneAndroidRoundedIcon />,
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
        icon: <HomeRepairServiceRoundedIcon />,
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
