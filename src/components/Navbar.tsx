"use client";
import ArchitectureRoundedIcon from "@mui/icons-material/ArchitectureRounded";
import DataObjectRoundedIcon from "@mui/icons-material/DataObjectRounded";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import EuroRoundedIcon from "@mui/icons-material/EuroRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import Person4RoundedIcon from "@mui/icons-material/Person4Rounded";
import { Button, Drawer, IconButton } from "@mui/material";
import { usePathname } from "next/navigation";

import { useEffect, useState } from "react";
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

  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathName]);
  return (
    <>
      <div className="absolute top-0 z-10 flex h-20 w-full justify-center bg-background/50 backdrop-blur-sm">
        <div className="hidden w-full max-w-screen-lg items-center justify-between gap-4 px-8 sm:flex">
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
            sx={{ borderRadius: "50px" }}
            startIcon={<DownloadRoundedIcon />}
            onClick={(_event) =>
              window.open("/CV_Procureur_2024.pdf", "_blank")
            }
          >
            CV
          </Button>
        </div>
        <div className="flex w-full items-center justify-between px-8 sm:hidden">
          <IconButton onClick={() => setOpen(true)}>
            <MenuRoundedIcon />
          </IconButton>
          <div>Mon Portfolio</div>
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
      <Drawer open={open} onClose={() => setOpen(false)}>
        <div className="flex flex-col gap-4 py-8 pl-2 pr-14">
          {routes.map((route) => (
            <NavItem
              icon={route.icon}
              key={route.title}
              pathName={route.path}
              title={route.title}
              currentPath={pathName}
            />
          ))}
        </div>
      </Drawer>
    </>
  );
}
