import { ETheme, EWorkspace } from "@/models/EThemes";
import { TProject } from "@/models/TProject";
import { IconBaseProps } from "react-icons";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import me from "../assets/me.png";
import portfolio from "../assets/portfolio.png";

const reactTech = {
  name: "React",
  icon: (props: IconBaseProps) => <FaReact {...props} />,
};
export const projects: TProject[] = [
  {
    id: 0,
    title: "My Portfolio",
    description:
      "My portfolio site blabblablab blablabblabla bblablabbl ablab blablabblablab blablabbl ablabblablabblablabb lablabblabl a bblab labbl ablabblablabblabl abblabla bblablabbla blabblab labbla",
    image: portfolio,
    url: "",
    github: "",
    technologies: [
      reactTech,
      {
        icon: (props: IconBaseProps) => <RiTailwindCssFill {...props} />,
        name: "Tailwind",
      },
    ],
    duration: "1 mois",
    date: "2024",
    images: [me, portfolio, portfolio, portfolio],
    status: "finished",
    client: "",
    theme: ETheme.webApp,
    workspace: EWorkspace.personal,
  },
  {
    id: 1,
    title: "My Portfolio",
    description:
      "My portfolio site blabblablab blablabblabla bblablabbl ablab blablabblablab blablabbl ablabblablabblablabb lablabblabl a bblab labbl ablabblablabblabl abblabla bblablabbla blabblab labbla",
    image: portfolio,
    url: "",
    github: "",
    technologies: [
      reactTech,
      {
        icon: (props: IconBaseProps) => <RiTailwindCssFill {...props} />,
        name: "Tailwind",
      },
    ],
    duration: "1 mois",
    date: "2024",
    images: [me, portfolio, portfolio, portfolio],
    status: "finished",
    client: "",
    theme: ETheme.webApp,
    workspace: EWorkspace.personal,
  },
  {
    id: 2,
    title: "My Portfolio",
    description:
      "My portfolio site blabblablab blablabblabla bblablabbl ablab blablabblablab blablabbl ablabblablabblablabb lablabblabl a bblab labbl ablabblablabblabl abblabla bblablabbla blabblab labbla",
    image: portfolio,
    url: "",
    github: "",
    technologies: [
      reactTech,
      {
        icon: (props: IconBaseProps) => <RiTailwindCssFill {...props} />,
        name: "Tailwind",
      },
    ],
    duration: "1 mois",
    date: "2024",
    images: [me, portfolio, portfolio, portfolio],
    status: "finished",
    client: "",
    theme: ETheme.webApp,
    workspace: EWorkspace.personal,
  },
  {
    id: 3,
    title: "My Portfolio",
    description:
      "My portfolio site blabblablab blablabblabla bblablabbl ablab blablabblablab blablabbl ablabblablabblablabb lablabblabl a bblab labbl ablabblablabblabl abblabla bblablabbla blabblab labbla",
    image: portfolio,
    url: "",
    github: "",
    technologies: [
      reactTech,
      {
        icon: (props: IconBaseProps) => <RiTailwindCssFill {...props} />,
        name: "Tailwind",
      },
      {
        name: "NextJS",
        icon: (props: IconBaseProps) => <RiNextjsFill {...props} />,
      },
    ],
    duration: "1 mois",
    date: "2024",
    images: [me, portfolio, portfolio, portfolio],
    status: "finished",
    client: "",
    theme: ETheme.webApp,
    workspace: EWorkspace.personal,
  },
  {
    id: 4,
    title: "My Portfolio",
    description:
      "My portfolio site blabblablab blablabblabla bblablabbl ablab blablabblablab blablabbl ablabblablabblablabb lablabblabl a bblab labbl ablabblablabblabl abblabla bblablabbla blabblab labbla",
    image: portfolio,
    url: "",
    github: "",
    technologies: [
      reactTech,
      {
        icon: (props: IconBaseProps) => <RiTailwindCssFill {...props} />,
        name: "Tailwind",
      },
    ],
    duration: "1 mois",
    date: "2024",
    images: [me, portfolio, portfolio, portfolio],
    status: "finished",
    client: "",
    theme: ETheme.webApp,
    workspace: EWorkspace.personal,
  },
  {
    id: 5,
    title: "My Portfolio",
    description:
      "My portfolio site blabblablab blablabblabla bblablabbl ablab blablabblablab blablabbl ablabblablabblablabb lablabblabl a bblab labbl ablabblablabblabl abblabla bblablabbla blabblab labbla",
    image: portfolio,
    url: "",
    github: "",
    technologies: [
      reactTech,
      {
        icon: (props: IconBaseProps) => <RiTailwindCssFill {...props} />,
        name: "Tailwind",
      },
    ],
    duration: "1 mois",
    date: "2024",
    images: [me, portfolio, portfolio, portfolio],
    status: "finished",
    client: "",
    theme: ETheme.webApp,
    workspace: EWorkspace.personal,
  },
];
