import { standardFont } from "@/app/layout";
import { Button, ButtonBase } from "@mui/material";
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
      className="groupTranslateZ group relative aspect-video max-w-xl"
      glare
      shine
      w-full
      buttons={
        <>
          <Button
            disabled={!project.github}
            variant="contained"
            color="secondary"
          >
            GIT
          </Button>

          <Button disabled={!project.url} variant="outlined" color="secondary">
            DEMO
          </Button>
        </>
      }
    >
      <ButtonBase className="absolute inset-0 z-10 rounded-xl" />
      <div className="absolute -z-10 h-full w-full overflow-hidden rounded-xl">
        <Image
          alt=""
          src={img}
          objectFit="cover"
          className="brightness-50 transition-all duration-300 group-hover:scale-125 group-hover:brightness-90"
        />
      </div>
      <div className="absolute left-0 top-0 flex gap-2 p-1">
        {project.technologies.map((tech) => (
          <div
            key={tech}
            className={`h-full w-full rounded-xl bg-gradient-to-tr from-primary to-accent px-2 pt-[3px] text-[0.7rem] ${standardFont.className} childTranslateZ`}
          >
            {tech}
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-background">
        <Button
          variant="contained"
          color="secondary"
          size="small"
          className="childTranslateZ"
        >
          {project.title}
        </Button>
        <div className="flex gap-2">
          <div className="childTranslateZ rounded-2xl bg-secondary px-2 text-[0.65rem]">
            {project.date}
          </div>
          <div className="childTranslateZ rounded-2xl bg-secondary px-2 text-[0.65rem]">
            {project.duration}
          </div>
        </div>
      </div>
    </AmazingCard>
  );
}
