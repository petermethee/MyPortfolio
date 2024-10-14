import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { ETheme, EWorkspace } from "./EThemes";

export type TProject = {
  id: number;
  title: string;
  description: string;
  image: StaticImport;
  url?: string;
  github?: string;
  technologies: string[];
  duration: string;
  date: string;
  status: "ongoing" | "finished";
  images: StaticImport[];
  client: string;
  workspace: EWorkspace;
  theme: ETheme;
};
