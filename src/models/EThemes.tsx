import DiamondRoundedIcon from "@mui/icons-material/DiamondRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import Person4RoundedIcon from "@mui/icons-material/Person4Rounded";
import SmartphoneRoundedIcon from "@mui/icons-material/SmartphoneRounded";
import StorageRoundedIcon from "@mui/icons-material/StorageRounded";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import React from "react";
export enum EWorkspace {
  all = "Tous",
  professional = "Professionnels",
  personal = "Personnels",
}

export enum ETheme {
  all = "Tous",
  webApp = "Web App",
  vitrine = "Vitrine",
  backend = "Backend",
  mobile = "Mobile",
}

export const ThemeIcons: Record<ETheme, React.ReactNode> = {
  [ETheme.all]: <GridViewRoundedIcon fontSize="small" />,
  [ETheme.webApp]: <LanguageRoundedIcon fontSize="small" />,
  [ETheme.vitrine]: <DiamondRoundedIcon fontSize="small" />,
  [ETheme.backend]: <StorageRoundedIcon fontSize="small" />,
  [ETheme.mobile]: <SmartphoneRoundedIcon fontSize="small" />,
};

export const WorkspaceIcons: Record<EWorkspace, React.ReactNode> = {
  [EWorkspace.all]: <GridViewRoundedIcon fontSize="small" />,
  [EWorkspace.personal]: <Person4RoundedIcon fontSize="small" />,
  [EWorkspace.professional]: <WorkRoundedIcon fontSize="small" />,
};
