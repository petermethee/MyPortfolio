import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { IconType } from "react-icons";
import { ETheme, EWorkspace } from "./EThemes";

export type TProject = {
  id: number;
  title: string;
  description: string;
  image: StaticImport;
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
  context: string;
  role?: string;
};
