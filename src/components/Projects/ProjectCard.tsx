import { standardFont } from "@/app/layout";
import { Button } from "@mui/material";
import Image from "next/image";
import img from "../../assets/portfolio.png";
import AmazingCard from "../shared/AmazingCard";
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

export default function ProjectCard({ project }: { project: TProject }) {
  return (
    <AmazingCard
      className="relative max-w-xl aspect-video groupTranslateZ group"
      glare
      shine
      w-full
      buttons={
        <>
          {project.github && (
            <Button variant="contained" color="secondary">
              GIT
            </Button>
          )}
          {project.url && (
            <Button variant="outlined" color="secondary">
              DEMO
            </Button>
          )}
        </>
      }
    >
      <div className="overflow-hidden rounded-xl absolute w-full h-full -z-10">
        <Image
          alt=""
          src={img}
          objectFit="cover"
          className="brightness-50 
       transition-all group-hover:brightness-100 group-hover:scale-125 duration-300"
        />
      </div>
      <div className="absolute top-0 left-0 flex gap-2 p-1">
        {project.technologies.map((tech) => (
          <div
            key={tech}
            className={`w-full h-full text-[0.6rem] px-2 pt-[3px] bg-gradient-to-tr from-primary to-accent rounded-xl ${standardFont.className} childTranslateZ`}
          >
            {tech}
          </div>
        ))}
      </div>
      <div className="absolute flex inset-0 justify-center items-center flex-col gap-4 text-background">
        <div className="rounded-md bg-secondary/80 py-1 px-2 text-sm childTranslateZ">
          {project.title}
        </div>
        <div className="flex gap-2">
          <div className="rounded-2xl bg-secondary/80 px-2 text-[0.65rem] childTranslateZ">
            {project.date}
          </div>
          <div className="rounded-2xl bg-secondary/80 px-2 text-[0.65rem] childTranslateZ">
            {project.duration}
          </div>
        </div>
      </div>
    </AmazingCard>
  );
}
