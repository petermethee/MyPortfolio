import { ETheme, EWorkspace } from "@/models/EThemes";
import { TProject } from "@/models/TProject";
import pellenc from "../assets/companies_logo/pellenc.png";
import extractor1 from "../assets/extractor/extractor1.png";
import extractor2 from "../assets/extractor/extractor2.png";
import extractor3 from "../assets/extractor/extractor3.png";
import extractor4 from "../assets/extractor/extractor4.png";
import extractor5 from "../assets/extractor/extractor5.png";
import ica1 from "../assets/ica/ica1.jpg";
import ica2 from "../assets/ica/ica2.jpg";
import ica3 from "../assets/ica/ica3.jpg";
import ica4 from "../assets/ica/ica4.jpg";
import ica5 from "../assets/ica/ica5.jpg";
import ica6 from "../assets/ica/ica6.jpg";
import ica7 from "../assets/ica/ica7.jpg";
import ica8 from "../assets/ica/ica8.jpg";
import ica_logo from "../assets/ica/ica_logo.png";
import jp1 from "../assets/journey_plan/journey_plan1.png";
import jp2 from "../assets/journey_plan/journey_plan2.png";
import jp3 from "../assets/journey_plan/journey_plan3.png";
import jp4 from "../assets/journey_plan/journey_plan4.png";

import jps1 from "../assets/jpshowcase/jps1.png";
import jps2 from "../assets/jpshowcase/jps2.png";
import jps3 from "../assets/jpshowcase/jps3.png";
import jps4 from "../assets/jpshowcase/jps4.png";
import jps5 from "../assets/jpshowcase/jps5.png";
import jps6 from "../assets/jpshowcase/jps6.png";

import coach1 from "../assets/coach/coach1.jpg";
import coach2 from "../assets/coach/coach2.jpg";
import coach3 from "../assets/coach/coach3.jpg";
import coach4 from "../assets/coach/coach4.jpg";
import coach5 from "../assets/coach/coach5.jpg";
import coach6 from "../assets/coach/coach6.jpg";
import coach7 from "../assets/coach/coach7.jpg";
import coach8 from "../assets/coach/coach8.jpg";
import coach9 from "../assets/coach/coach9.jpg";
import logoCoach from "../assets/coach/logo.png";
import me from "../assets/me.png";
import moneytorLogo from "../assets/moneytor/finalVariant2.png";
import moneytor from "../assets/moneytor/moneytor1.png";
import pellenc2 from "../assets/pellenc/pellenc2.jpg";
import pellenc_machine from "../assets/pellenc/pellenc_machine.jpg";
import portfolio from "../assets/portfolio/portfolio.png";
import {
  angularTech,
  cssTech,
  dockerTech,
  dotNetTech,
  electronTech,
  golangTech,
  htmlTech,
  javaTech,
  nextJSTech,
  pythonTech,
  reactTech,
  redisTech,
  sqlTech,
  tailwindTech,
} from "./techIcons";

export const projects: TProject[] = [
  {
    title: "Pellenc ST",
    context:
      "PellencST est une société qui conçoit, produit et commercialise des équipements et services de tri intelligents et connectés, pour l’industrie du recyclage. Dans le cadre de la refonte de leur suite d'applications, j'ai occupé le poste de développeur fullstack.",
    description:
      "Avec mon équipe, nous avons conçu et développé des applications industrielles depuis zéro, destinées au pilotage, calibrage et paramétrage des machines PellencST. Les applications devaient être conditionnées pour 2 types d'environnements: des ordinateurs Windows 10 et les machines PellencST sous une version Debian custom. La version ordinateur devait reproduire l'environnement de la machine de tri, elle embarquait par conséquent un simulateur en python servit à travers une API OPC-UA. L'executable windows était construit sous forme d'application Electron et embarqué donc dans sa version distribuée un frontend en React et un backend en python + serveur OPC-UA. En ce qui concerne la version machine, l'application Electron embarquait seulement le frontend React qui s'interfaçait à l'API OPC-UA présent sur la machine.",
    thumbnail: pellenc,
    url: "",
    github: "",
    technologies: [reactTech, electronTech, pythonTech],
    duration: "1 an 6 mois",
    date: "2021 - 2022",
    images: [pellenc, pellenc_machine, pellenc2],
    status: "finished",
    client: "PellencST",
    theme: [ETheme.webApp, ETheme.backend],
    workspace: EWorkspace.professional,
    team: "3 développeurs, 1 QA, 1 chef d'équipe",
    role: "Développeur fullstack",
    tasks: [
      "Développement de l'IHM à partir de maquettes FIGMA",
      "Création d'une librairie de composants génériques React - Rollup",
      "Maintenance et évolution backend Python",
      "",
    ],
  },
  {
    title: "Extractor",
    thumbnail: extractor1,
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
    technologies: [pythonTech, htmlTech, cssTech],
    duration: "5 mois",
    date: "2020 - 2021",
    images: [extractor1, extractor2, extractor3, extractor4, extractor5],
    status: "finished",
    theme: [ETheme.webApp, ETheme.backend],
    workspace: EWorkspace.professional,
    team: "Seul",
    role: "Architecte - Développeur",
  },
  {
    title: " Sci-Share",
    context:
      "Sci-Share est un outil dédié aux organisations ou associations scientifiques qui travaillent sur des projets de sciences participatives et qui cherchent un outils pour gérer et partager leurs données. Sci-share est une solution open source, clé en main, sécurisé et décentralisé permettant aux organismes de rester propriétaire de leurs données.",
    description:
      "Sci-share est une application Web multi-service. Cela signifie qu'elle est constituée d'une partie frontend (Angular) et de plusieurs services backend qui interagissent entre eux en GRPC (protocol de communication développé par Google). Au niveau backend, les technologies utilisées sont Golang, JAVA, .NET, PostgreSQL, Redis; tout ce beaux mondes orchestrés par Docker.",
    thumbnail: portfolio,
    url: "",
    github: "",
    technologies: [
      angularTech,
      javaTech,
      golangTech,
      dotNetTech,
      redisTech,
      dockerTech,
    ],
    duration: "9 mois",
    date: "2024",
    images: [me, portfolio, portfolio, portfolio],
    status: "ongoing",
    theme: [ETheme.webApp],
    workspace: EWorkspace.professional,
    client: "AdvansLab",
    role: "Architecte - Développeur",
    team: "3 développeurs, 1 QA, 1 chef d'équipe",
  },
  {
    title: "Journey Plan",
    context:
      "Journey Plan est une application web spécialisée dans la planification de voyages. C'est un outil qui permet de planifier ses activités, transports, logements ainsi que de visualiser son itinéraire et gérer son budget.",
    description:
      "JourneyPlan est une application web gratuite 'self-hosted' basé sur Electron-React avec une base de donnée en SQLight. Aujourd'hui elle n'est disponible que sous Windows et s'installe comme un programme sur votre ordinateur. Ce projet a été un défi technique qui demandé un temps de maturation important pour aboutir à une interface élégante et simple d'utilisation tout en permettant des fonctionnalités poussées.",
    thumbnail: jp1,
    url: "https://jpshowcase.onrender.com",
    github: "https://github.com/petermethee/JourneyPlan",
    technologies: [reactTech, electronTech, sqlTech],
    duration: "1 mois",
    date: "2024",
    images: [jp1, jp2, jp3, jp4],
    status: "finished",
    theme: [ETheme.webApp],
    workspace: EWorkspace.personal,
    team: "Seul",
  },
  {
    title: "JP Showcase",
    context:
      "JP showcase est un site vitrine pour présenter l'outil Journey Plan et le télécharger.",
    description:
      "JP Showcase est une application React static qui tente de présenter avec élégance et simplicité les fonctionnalités de Journey Plan.",
    thumbnail: jps1,
    url: "https://jpshowcase.onrender.com",
    github: "https://github.com/petermethee/JourneyPlan",
    technologies: [reactTech, tailwindTech],
    duration: "1 mois",
    date: "2024",
    images: [jps1, jps2, jps3, jps4, jps5, jps6],
    status: "finished",
    theme: [ETheme.webApp],
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
    theme: [ETheme.webApp],
    workspace: EWorkspace.personal,
    team: "Seul",
  },
  {
    title: "Coach Sportif",
    context:
      "Coach sportif est une application mobile gratuite pour créer son programme de sport personnalisé.",
    description:
      "Coach sportif est une application Android accessible sur PlayStore. Elle a été développée sur Android Studio en JAVA + XML.",
    thumbnail: logoCoach,
    url: "",
    github: "",
    technologies: [reactTech, tailwindTech],
    duration: "9 mois",
    date: "2024",
    images: [
      coach1,
      coach2,
      coach3,
      coach4,
      coach5,
      coach6,
      coach7,
      coach8,
      coach9,
    ],
    status: "finished",
    theme: [ETheme.mobile],
    workspace: EWorkspace.personal,
  },
  {
    title: "ICA App",
    context:
      "Dans le cadre d'un stage à l'étranger j'ai développé une application mobile pour une entreprise du nom de Ingeneria y Controles Automatizados (ICA). Cette application a pour but de faciliter la gestion des stocks et les démarches administratives internes.",
    description:
      "Cette application mobile fut développée sur Android Studio en JAVA + XML et avait pour cible les smartphones professionnelles Android de l'entreprise. L'application est en interface direct avec l'API REST de ICA (Directus) et utilise par conséquent la base de données et les sessions utilisateurs existantes pour gérer l'accès à l'application. L'application répond à 4 besoins: aider à faire l'inventaire des stocks en scannant les produits, rapporter des dépenses professionnelles, faire des demandes d'achat et des demandes d'ajustement de stocks.",
    thumbnail: ica_logo,
    technologies: [reactTech, tailwindTech],
    duration: "3 mois",
    date: "2021",
    images: [ica1, ica2, ica3, ica4, ica5, ica6, ica7, ica8],
    status: "finished",
    theme: [ETheme.mobile],
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
    theme: [ETheme.vitrine],
    workspace: EWorkspace.personal,
    team: "Seul",
  },
];
