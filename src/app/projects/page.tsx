import { standardFont } from "../layout";

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
};

const projects: TProject[] = [
  {
    title: "My Portfolio",
    description: "My portfolio site",
    image: "./assets/portfolio.png",
    url: "",
    github: "",
    technologies: ["Next.js", "TailwindCSS", "TypeScript", "Vite"],
    duration: "1 mois",
    date: "2024",
    images: [],
    status: "finished",
    client: "",
  },
];

const filters = ["Tous", "Professionnels", "Personnels"];
const themes = ["Web App", "Vitrine", "Backend", "Mobile"];
export default function ProjectsPage() {
  return (
    <div className="flex gap-4 max-w-screen-lg mx-auto px-10 py-24 ">
      <div className="bg-accent_secondary/3  0 backdrop-blur-md rounded-md p-2 w-48 flex flex-col gap-2">
        <>
          {filters.map((filter) => (
            <div
              key={filter}
              className={`py-1 px-2 w-full bg-text/5 rounded-sm hover:bg-text/30 transition-all cursor-pointer text-text/80 ${standardFont.className}`}
            >
              {filter}
            </div>
          ))}
          <br />
          <span>Thèmes</span>
          {themes.map((theme) => (
            <div
              key={theme}
              className={`py-1 px-2 w-full bg-text/5 rounded-sm hover:bg-text/30 transition-all cursor-pointer text-text/80 ${standardFont.className}`}
            >
              {theme}
            </div>
          ))}
        </>
      </div>

      <div className="flex gap-4"></div>
    </div>
  );
}
