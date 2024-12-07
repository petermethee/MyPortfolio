import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { IconType } from "react-icons";
import { ETheme, EWorkspace } from "./EThemes";

export type TProject = {
  title: string;
  context: string;
  description: string;
  thumbnail: StaticImport;
  tasks?: string[];
  url?: string;
  github?: string;
  technologies: { icon: IconType; name: string }[];
  duration: string;
  date: string;
  status: "ongoing" | "finished";
  images: StaticImport[];
  client?: string;
  workspace: EWorkspace;
  theme: ETheme;
  team?: string;
  role?: string;
};
