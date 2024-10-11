import ArchitectureRoundedIcon from "@mui/icons-material/ArchitectureRounded";
import DataObjectRoundedIcon from "@mui/icons-material/DataObjectRounded";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import EuroRoundedIcon from "@mui/icons-material/EuroRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import Person4RoundedIcon from "@mui/icons-material/Person4Rounded";
import { Button } from "@mui/material";
import { usePathname } from "next/navigation";
import NavItem from "./NavItem";
const routes = [
  {
    title: "Home",
    path: "/",
    icon: <HomeRoundedIcon fontSize="small" />,
  },
  {
    title: "Projects",
    path: "/projects",
    icon: <ArchitectureRoundedIcon fontSize="small" />,
  },

  {
    title: "Compétences",
    path: "/skills",
    icon: <DataObjectRoundedIcon fontSize="small" />,
  },

  {
    title: "Contact",
    path: "/contact",
    icon: <Person4RoundedIcon fontSize="small" />,
  },

  {
    title: "Pricing",
    path: "/pricing",
    icon: <EuroRoundedIcon fontSize="small" />,
  },
];

export default function Navbar() {
  const pathName = usePathname();

  return (
    <div className="absolute top-0 z-10 flex h-20 w-full justify-center bg-background/50 backdrop-blur-sm">
      <div className="flex w-full max-w-screen-lg items-center justify-between gap-4 px-8">
        {routes.map((route) => (
          <NavItem
            icon={route.icon}
            key={route.title}
            pathName={route.path}
            title={route.title}
            currentPath={pathName}
          />
        ))}
        <Button
          color="secondary"
          variant="contained"
          size="small"
          sx={{ borderRadius: "50px" }}
          startIcon={<DownloadRoundedIcon />}
        >
          CV
        </Button>
      </div>
    </div>
  );
}
