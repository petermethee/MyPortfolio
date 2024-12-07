import { ETheme, EWorkspace } from "@/models/EThemes";
import { TProject } from "@/models/TProject";
import pellenc from "../assets/companies_logo/pellenc.png";
import ica1 from "../assets/ica/ica1.jpg";
import ica2 from "../assets/ica/ica2.jpg";
import ica3 from "../assets/ica/ica3.jpg";
import ica4 from "../assets/ica/ica4.jpg";
import ica5 from "../assets/ica/ica5.jpg";
import ica6 from "../assets/ica/ica6.jpg";
import ica7 from "../assets/ica/ica7.jpg";
import ica8 from "../assets/ica/ica8.jpg";
import jp1 from "../assets/journey_plan/journey_plan1.png";
import jp2 from "../assets/journey_plan/journey_plan2.png";
import jp3 from "../assets/journey_plan/journey_plan3.png";
import jp4 from "../assets/journey_plan/journey_plan4.png";
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
    title: "Pellenc ST",
    context:
      "PellencST est une société qui conçoit, produit et commercialise des équipements et services de tri intelligents et connectés, pour l’industrie du recyclage. Dans le cadre de la refonte de leur suite d'applications, j'ai occupé le poste de développeur fullstack.",
    description:
      "Avec mon équipe, nous avons conçu et développé des applications industrielles depuis zéro, destinées au pilotage, calibrage et paramétrage de leurs machines. Les applications été conditionnées en vue de leur distribution sur des environnements cibles spécifiques, notamment des appareils exécutant Windows 10 ainsi que les systèmes PellencSt opérant sur une distribution Debian personnalisée.",
    thumbnail: pellenc,
    url: "",
    github: "",
    technologies: [reactTech, pythonTech],
    duration: "1 mois",
    date: "2024",
    images: [pellenc, pellenc_machine],
    status: "finished",
    client: "PellencST",
    theme: ETheme.webApp,
    workspace: EWorkspace.professional,
    team: "3 développeurs, 1 QA, 1 chef d'équipe",
    role: "Développeur fullstack",
    tasks: [
      "Développer une IHM à partir de maquettes FIGMA",
      "Création d'une librairie de composants génériques React - Rollup",
    ],
  },
  {
    title: "Journey Plan",
    context:
      "Journey Plan est une application web spécialisée dans la planification de voyages. C'est un outil qui permet de planifier ses activités, transports, logements ainsi que de visualiser son itinéraire et gérer son budget.",
    description:
      "JourneyPlan est une application web gratuite 'self-hosted' basé sur Electron-React avec une base de donnée en SQLight. Aujourd'hui elle n'est disponible que sous Windows et s'installe comme un programme sur votre ordinateur. Ce projet a été un défi technique qui demandé un temps de maturation important pour aboutir à une interface élégante et simple d'utilisation tout en permettant des fonctionnalités poussées.",
    thumbnail: jp_logo,
    url: "https://jpshowcase.onrender.com",
    github: "https://github.com/petermethee/JourneyPlan",
    technologies: [reactTech, electronTech, sqlTech],
    duration: "1 mois",
    date: "2024",
    images: [jp1, jp2, jp3, jp4],
    status: "finished",
    theme: ETheme.webApp,
    workspace: EWorkspace.personal,
    team: "Seul",
  },
  {
    title: "JP Showcase",
    context:
      "JP showcase est un site vitrine pour présenter l'outils Journey Plan.",
    description:
      "JP Showcase est une application React static qui tente de présenter avec élégance et simplicité les fonctionnalités de Journey Plan. C'est par ailleurs à travers ce site que se télécharge le logiciel Journey Plan.",
    thumbnail: jp_logo,
    url: "https://jpshowcase.onrender.com",
    github: "https://github.com/petermethee/JourneyPlan",
    technologies: [reactTech],
    duration: "1 mois",
    date: "2024",
    images: [jp1, jp2, jp3, jp4],
    status: "finished",
    theme: ETheme.webApp,
    workspace: EWorkspace.personal,
    team: "Seul",
  },
  {
    title: "Moneytor",
    context:
      "Moneytor est une application Web self-hosted pour gérer ses finances. Elle permet de suivre ses transactions, de surveiller ses budgets et analyser ses dépenses.",
    description: " ",
    thumbnail: moneytorLogo,
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
    title: "Extractor",
    thumbnail: portfolio,
    context:
      "Extractor est un outil de gestion des commandes conçu sur mesure pour Parfumerie Mireille, dans le cadre de sa transition numérique. Ce logiciel répond à l’ambition de moderniser son pôle dédié aux comités d’entreprise, en optimisant le service client et en assurant une meilleure traçabilité et capitalisation des commandes effectuées.",
    description:
      "Cet outils est composé de 3 parties: le frontend en HTML/CSS servit par le backend en python (Flask) et la base de données en SQLight. Extractor offre de nombreuses fonctionnalités et intervient dans tous les processes de l'entreprise: gestion de commandes (ajout, modification, annulation), la gestion des stocks, la demande de réassort, suivi de facturation, suivi de livraison etc. D'autres fonctions plus subtiles sont également possibles, notamment l'envoie automatique des mails de suivi de commande ou encore la numérisation automatique des commandes manuscrites (version beta).",
    tasks: [
      "Recueil de l'expression du besoin",
      "Proposition d'UX/UI",
      "Création de l'architecture de l'application",
      "Développement de l'outils avec validation itérative du client",
      "Formation des utilisateurs et création de notices",
    ],
    url: "",
    github: "",
    technologies: [reactTech, tailwindTech],
    duration: "5 mois",
    date: "2020 - 2021",
    images: [me, portfolio, portfolio, portfolio],
    status: "finished",
    theme: ETheme.webApp,
    workspace: EWorkspace.professional,
    team: "Seul",
    role: "Architecte - Développeur",
  },
  {
    title: " Sci-Share",
    context:
      "Sci-Share est un outil dédié aux organisations ou associations scientifiques qui travaillent sur des projets de sciences participatives et qui cherchent un outils pour gérer et partager leurs données. Sci-share est une solution open source, clé en main, sécurisé et décentralisé permettant aux organismes de rester propriétaire de leurs données.",
    description:
      "Sci-share est une application Web multi-service. Cela signifie qu'elle est constitué d'une partie frontend (Angular) et de plusieurs services backend qui interagissent entre eux en GRPC (protocol de communication développé par Google). Au niveau backend, les technologies utilisées sont Golang, JAVA, .NET, PostgreSQL, Redis; tout ce beaux mondes orchestrés par Docker.",
    thumbnail: portfolio,
    url: "",
    github: "",
    technologies: [reactTech, tailwindTech],
    duration: "9 mois",
    date: "2024",
    images: [me, portfolio, portfolio, portfolio],
    status: "ongoing",
    theme: ETheme.webApp,
    workspace: EWorkspace.professional,
    client: "AdvansLab",
    role: "Architecte - Développeur",
    team: "3 développeurs, 1 QA, 1 chef d'équipe",
  },
  {
    title: "Coach Sportif",
    context:
      "Coach sportif est une application mobile gratuite pour créer son programme de sport personnalisé.",
    description:
      "Coach sportif est une application Android accessible sur PlayStore. Elle a été développée sur Android Studio en JAVA + XML.",
    thumbnail: portfolio,
    url: "",
    github: "",
    technologies: [reactTech, tailwindTech],
    duration: "9 mois",
    date: "2024",
    images: [me, portfolio, portfolio, portfolio],
    status: "finished",
    theme: ETheme.mobile,
    workspace: EWorkspace.personal,
  },
  {
    title: "ICA App",
    context:
      "Dans le cadre d'un stage à l'étranger j'ai développé une application mobile pour une entreprise du nom de Ingeneria y Controles Automatizados (ICA). Cette application a pour but de faciliter la gestion des stocks et les démarches administratives internes.",
    description:
      "Cette application mobile fut développée sur Android Studio en JAVA + XML et avait pour cible les smartphones professionnelles Android de l'entreprise. L'application est en interface direct avec l'API REST de ICA (Directus) et utilise par conséquent la base de données et les sessions utilisateurs existantes pour gérer l'accès à l'application. L'application répond à 4 besoins: aider à faire l'inventaire des stocks en scannant les produits, rapporter des dépenses professionnelles, faire des demandes d'achat et des demandes d'ajustement de stocks.",
    thumbnail: ica1,
    technologies: [reactTech, tailwindTech],
    duration: "3 mois",
    date: "2021",
    images: [ica1, ica2, ica3, ica4, ica5, ica6, ica7, ica8],
    status: "finished",
    theme: ETheme.mobile,
    workspace: EWorkspace.professional,
    team: "2 développeurs, 1 leader technique",
  },
  {
    title: "Mon Portfolio",
    context: "Site web vitrine pour présenter mes compétences et mes projets.",
    description:
      "Il est basé sur NextJS + React et fait intervenir TailwindCSS.",
    thumbnail: portfolio,
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
];
