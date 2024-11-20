import { ETheme, EWorkspace } from "@/models/EThemes";
import { TProject } from "@/models/TProject";
import pellenc from "../assets/companies_logo/pellenc.png";
import jp1 from "../assets/journey_plan/journey_plan1.png";
import jp2 from "../assets/journey_plan/journey_plan2.png";
import jp3 from "../assets/journey_plan/journey_plan3.png";
import jp4 from "../assets/journey_plan/journey_plan4.png";
import jp5 from "../assets/journey_plan/journey_plan5.png";
import jp_logo from "../assets/journey_plan/logo.png";
import me from "../assets/me.png";
import pellenc_machine from "../assets/pellenc/pellenc_machine.jpg";
import portfolio from "../assets/portfolio.png";
import {
  electronTech,
  nextJSTech,
  pythonTech,
  reactTech,
  sqlTech,
  tailwindTech,
} from "./techIcons";

export const projects: TProject[] = [
  {
    id: 0,
    title: "Mon Portfolio",
    context: "Site web vitrine pour présenter mes compétences et mes projets.",
    description:
      "Il est basé sur NextJS + React et fait intervenir TailwindCSS.",
    image: portfolio,
    url: "",
    github: "https://github.com/petermethee/portfolio",
    technologies: [reactTech, tailwindTech, nextJSTech],
    duration: "2 mois",
    date: "09/2024 - 11/2024",
    images: [portfolio, portfolio],
    status: "finished",
    theme: ETheme.vitrine,
    workspace: EWorkspace.personal,
    team: "3 développeurs, 1 QA, 1 chef d'équipe",
  },
  {
    id: 1,
    title: "Journey Plan",
    context:
      "Journey Plan est une application web 'self-hosted' spécialisé dans la planification de voyages. C'est un outil qui permet de planifier ses activités, transports et logements  son itinéraire, son budget.",
    description: "",
    image: jp_logo,
    url: "https://jpshowcase.onrender.com",
    github: "https://github.com/petermethee/JourneyPlan",
    technologies: [reactTech, electronTech, sqlTech],
    duration: "1 mois",
    date: "2024",
    images: [jp1, jp2, jp3, jp4, jp5],
    status: "finished",
    theme: ETheme.webApp,
    workspace: EWorkspace.personal,
    team: "3 développeurs, 1 QA, 1 chef d'équipe",
  },
  {
    id: 2,
    title: "Pellenc ST",
    description:
      "PellencST est une société qui conçoit, produit et commercialise des équipements et services de tri intelligents et connectés, pour l’industrie du recyclage. Dans le cadre de la refonte de leurs suites d'applications, j'ai occupé le poste de développeur fullstack. Avec mon équipe, nous avons conçu et développé des applications industrielles depuis zéro, destinées au pilotage, calibrage et paramétrage de leurs machines.",
    image: pellenc,
    url: "",
    github: "",
    technologies: [reactTech, pythonTech],
    duration: "1 mois",
    date: "2024",
    images: [pellenc, pellenc_machine],
    status: "finished",
    client: "PellencST",
    theme: ETheme.webApp,
    workspace: EWorkspace.personal,
    team: "3 développeurs, 1 QA, 1 chef d'équipe",
  },
  {
    id: 3,
    title: "Moneytor",
    description:
      "Moneytor est une application Web selfhosted pour gérer ses finances. Elle permet de suivre ses transactions, de surveiller ses budgets et de planifier ses dépenses.",
    image: portfolio,
    url: "",
    github: "",
    technologies: [reactTech, tailwindTech, nextJSTech],
    duration: "1 mois",
    date: "2024",
    images: [me, portfolio, portfolio, portfolio],
    status: "finished",
    theme: ETheme.webApp,
    workspace: EWorkspace.personal,
    team: "3 développeurs, 1 QA, 1 chef d'équipe",
  },
  {
    id: 4,
    title: "Extractor",
    description:
      "Extractor est un outil de gestion des commandes conçu sur mesure pour Parfumerie Mireille, dans le cadre de sa transition numérique. Ce logiciel répond à l’ambition de moderniser son pôle dédié aux comités d’entreprise, en optimisant le service client et en assurant une meilleure traçabilité et capitalisation des commandes effectuées.",
    image: portfolio,
    url: "",
    github: "",
    technologies: [reactTech, tailwindTech],
    duration: "1 mois",
    date: "2024",
    images: [me, portfolio, portfolio, portfolio],
    status: "finished",
    theme: ETheme.webApp,
    workspace: EWorkspace.personal,
    team: "3 développeurs, 1 QA, 1 chef d'équipe",
  },
  {
    id: 5,
    title: "My Portfolio",
    description:
      "My portfolio site blabblablab blablabblabla bblablabbl ablab blablabblablab blablabbl ablabblablabblablabb lablabblabl a bblab labbl ablabblablabblabl abblabla bblablabbla blabblab labbla",
    image: portfolio,
    url: "",
    github: "",
    technologies: [reactTech, tailwindTech],
    duration: "1 mois",
    date: "2024",
    images: [me, portfolio, portfolio, portfolio],
    status: "finished",
    theme: ETheme.webApp,
    workspace: EWorkspace.personal,
    team: "3 développeurs, 1 QA, 1 chef d'équipe",
  },
];
