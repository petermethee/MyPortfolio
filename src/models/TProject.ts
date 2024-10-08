import { ETheme, EWorkspace } from "./EThemes";

export type TProject = {
  title: string;
  description: string;
  image: string;
  url?: string;
  github?: string;
  technologies: string[];
  duration: string;
  date: string;
  status: "ongoing" | "finished";
  images: string[];
  client: string;
  workspace: EWorkspace;
  theme: ETheme;
};
