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
    <div className="mx-auto flex max-w-screen-xl gap-4 px-10 py-24">
      <div
        className="0 sticky top-28 flex h-fit w-48 flex-col gap-2 rounded-md bg-primary/50 p-2 backdrop-blur-md"
        style={{
          boxShadow: "0 0 50px -20px var(--primary)",
        }}
      >
        {filters.map((filter) => (
          <div
            key={filter}
            className={`w-full cursor-pointer rounded-sm bg-text/15 px-2 py-1 text-text/80 transition-all hover:bg-text/10 ${standardFont.className}`}
          >
            {filter}
          </div>
        ))}
        <br />
        <span>Thèmes</span>
        {themes.map((theme) => (
          <div
            key={theme}
            className={`w-full cursor-pointer rounded-sm bg-text/15 px-2 py-1 text-text/80 transition-all hover:bg-text/10 ${standardFont.className}`}
          >
            {theme}
          </div>
        ))}
      </div>

      <div className="flex flex-1 flex-wrap items-center justify-center gap-x-10 gap-y-20">
        {projects.map((project) => (
          <div className="w-full min-w-[250px] max-w-[500px] lg:w-[40%]">
            <ProjectCard key={project.title} project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}
