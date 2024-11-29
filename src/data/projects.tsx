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
import moneytorLogo from "../assets/moneytor/finalVariant2.png";
import moneytor from "../assets/moneytor/moneytor1.png";
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
    team: "Seul",
  },
  {
    id: 1,
    title: "Journey Plan",
    context:
      "Journey Plan est une application web 'self-hosted' spécialisée dans la planification de voyages. C'est un outil qui permet de planifier ses activités, transports, logements, visualiser son itinéraire, gérer son budget.",
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
    team: "Seul",
  },
  {
    id: 2,
    title: "Pellenc ST",
    context:
      "PellencST est une société qui conçoit, produit et commercialise des équipements et services de tri intelligents et connectés, pour l’industrie du recyclage. Dans le cadre de la refonte de leurs suites d'applications, j'ai occupé le poste de développeur fullstack.",
    description:
      "Avec mon équipe, nous avons conçu et développé des applications industrielles depuis zéro, destinées au pilotage, calibrage et paramétrage de leurs machines. Les applications été conditionnées en vue de leur distribution sur des environnements cibles spécifiques, notamment des appareils exécutant Windows 10 ainsi que les systèmes PellencSt opérant sur une distribution Debian personnalisée.",
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
    role: "Développeur fullstack",
  },
  {
    id: 3,
    title: "Moneytor",
    context:
      "Moneytor est une application Web self-hosted pour gérer ses finances. Elle permet de suivre ses transactions, de surveiller ses budgets et analyser ses dépenses.",
    description: " ",
    image: moneytorLogo,
    url: "",
    github: "",
    technologies: [reactTech, tailwindTech, nextJSTech],
    duration: "1 mois",
    date: "2024",
    images: [moneytor, moneytorLogo],
    status: "finished",
    theme: ETheme.webApp,
    workspace: EWorkspace.personal,
    team: "Seul",
  },
  {
    id: 4,
    title: "Extractor",
    context: "",
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
    team: "Seul",
    role: "Architecte - Développeur - Chef de projet",
  },
  {
    id: 5,
    title: " Sci-Share",
    context:
      "Sci-Share est un outil dédié aux organisations ou associations scientifiques qui travaillent sur des projets de sciences participatives et qui cherchent un outils pour gérer et partager leurs données. Sci-share est une solution open source, clé en main, sécurisée et décentralisé permettant aux organismes de rester propriétaire de leurs données.",
    description:
      "Sci-share est une application Web multi-service. Cela signifie qu'elle est constitué d'une partie frontend (Angular) et de plusieurs services backend qui interagissent entre eux en GRPC (protocol de communication développé par Google). Au niveau backend, les technologies utilisées sont Golang, JAVA, .NET, PostgreSQL, Redis; tout ce beaux mondes orchestrés par Docker.",
    image: portfolio,
    url: "",
    github: "",
    technologies: [reactTech, tailwindTech],
    duration: "9 mois",
    date: "2024",
    images: [me, portfolio, portfolio, portfolio],
    status: "ongoing",
    theme: ETheme.webApp,
    workspace: EWorkspace.personal,
    client: "AdvansLab",
    role: "Architecte - Développeur",
    team: "3 développeurs, 1 QA, 1 chef d'équipe",
  },
  {
    id: 6,
    title: "Coach Sportif",
    context:
      "Coach sportif est une application mobile gratuite pour créer son programme de sport personnalisé.",
    description: "Développé sur Android Studio.",
    image: portfolio,
    url: "",
    github: "",
    technologies: [reactTech, tailwindTech],
    duration: "9 mois",
    date: "2024",
    images: [me, portfolio, portfolio, portfolio],
    status: "ongoing",
    theme: ETheme.webApp,
    workspace: EWorkspace.personal,
    team: "3 développeurs, 1 QA, 1 chef d'équipe",
  },
  {
    id: 6,
    title: "ICA App",
    context:
      "Dans le cadre d'un stage à l'étranger j'ai développé une application mobile pour une entreprise du nom de Ingeneria y Controles Automatizados (ICA). Cette application répond à 4 besoins: gestion des stocks, demande de remboursement de frais de travail, ...",
    description: "Développé sur Android Studio.",
    image: portfolio,
    technologies: [reactTech, tailwindTech],
    duration: "9 mois",
    date: "2024",
    images: [me, portfolio, portfolio, portfolio],
    status: "ongoing",
    theme: ETheme.webApp,
    workspace: EWorkspace.personal,
    team: "2 développeurs, 1 leader technique",
  },
];
