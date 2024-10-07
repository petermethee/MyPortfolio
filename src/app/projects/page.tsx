import ProjectCard, { TProject } from "@/components/Projects/ProjectCard";
import { standardFont } from "../layout";

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
    <div className="flex gap-4 max-w-screen-xl mx-auto px-10 py-24  ">
      <div
        className="bg-accent_secondary/50  0 backdrop-blur-md rounded-md p-2 w-48 flex flex-col gap-2 sticky top-28 h-fit"
        style={{
          boxShadow: "0 0 50px -20px var(--accent_secondary)",
        }}
      >
        {filters.map((filter) => (
          <div
            key={filter}
            className={`py-1 px-2 w-full bg-background/15 rounded-sm hover:bg-background/40 transition-all cursor-pointer text-text/80 ${standardFont.className}`}
          >
            {filter}
          </div>
        ))}
        <br />
        <span>Thèmes</span>
        {themes.map((theme) => (
          <div
            key={theme}
            className={`py-1 px-2 w-full bg-background/15 rounded-sm hover:bg-background/40 transition-all cursor-pointer text-text/80 ${standardFont.className}`}
          >
            {theme}
          </div>
        ))}
      </div>

      <div className="flex gap-x-10 gap-y-20 flex-wrap flex-1 justify-center items-center ">
        {projects.map((project) => (
          <div className="w-full md:w-[40%] min-w-[200px] max-w-[500px] ">
            <ProjectCard key={project.title} project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}
