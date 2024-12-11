import DockerIcon from "@/assets/DockerIcon";
import { TServiceCard } from "@/components/Home/ServiceCard";
import ApiRoundedIcon from "@mui/icons-material/ApiRounded";
import ArchitectureRoundedIcon from "@mui/icons-material/ArchitectureRounded";
import DesktopMacRoundedIcon from "@mui/icons-material/DesktopMacRounded";
import DiamondRoundedIcon from "@mui/icons-material/DiamondRounded";
import FunctionsRoundedIcon from "@mui/icons-material/FunctionsRounded";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import MouseRoundedIcon from "@mui/icons-material/MouseRounded";
import PhoneAndroidRoundedIcon from "@mui/icons-material/PhoneAndroidRounded";
import SecurityRoundedIcon from "@mui/icons-material/SecurityRounded";
import StorageRoundedIcon from "@mui/icons-material/StorageRounded";
import WorkspacesRoundedIcon from "@mui/icons-material/WorkspacesRounded";
export const services: TServiceCard[] = [
  {
    title: "Frontend",
    items: [
      {
        text: "Site vitrine sur mesure ",
        icon: <DiamondRoundedIcon />,
      },
      {
        text: "Application Web",
        icon: <DesktopMacRoundedIcon />,
      },
      {
        text: "Logiciels (PWA - Electron)",
        icon: <MouseRoundedIcon />,
      },
    ],
    icon: <LanguageRoundedIcon />,
  },
  {
    title: "Backend",
    items: [
      {
        text: "API REST",
        icon: <ApiRoundedIcon />,
      },

      {
        text: "Architecture BDD",
        icon: <ArchitectureRoundedIcon />,
      },
      {
        text: "Algorithmes - Calculs numériques",
        icon: <FunctionsRoundedIcon />,
      },
    ],
    icon: <StorageRoundedIcon />,
  },
  {
    title: "Autre",
    items: [
      {
        icon: <PhoneAndroidRoundedIcon />,
        text: "Mobile (Android)",
      },
      {
        icon: <DockerIcon />,
        text: "Docker",
      },
      {
        text: "Sécurité - Cryptage - Authentification",
        icon: <SecurityRoundedIcon />,
      },
    ],
    icon: <WorkspacesRoundedIcon />,
  },
];
