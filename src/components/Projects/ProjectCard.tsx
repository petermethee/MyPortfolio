import { TProject } from "@/models/TProject";
import { Button, ButtonBase } from "@mui/material";
import Image from "next/image";
import AmazingCard from "../shared/AmazingCard";
import TechChip from "./TechChip";

export default function ProjectCard({
  project,
  onClick,
}: {
  project: TProject;
  onClick: (id: number) => void;
}) {
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
      <ButtonBase
        className="absolute inset-0 z-10 rounded-xl"
        onClick={() => onClick(project.id)}
      />
      <div className="absolute -z-10 h-full w-full overflow-hidden rounded-xl">
        <Image
          alt=""
          src={project.image}
          objectFit="cover"
          className="brightness-50 transition-all duration-300 group-hover:scale-125 group-hover:brightness-90"
        />
      </div>
      <div className="absolute left-1 top-1 flex gap-2 p-1">
        {project.technologies.map((tech) => (
          <TechChip key={tech} tech={tech} />
        ))}
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-background">
        <Button
          variant="contained"
          color="secondary"
          size="small"
          className="childTranslateZ"
          onClick={() => onClick(project.id)}
        >
          {project.title}
        </Button>
        <div className="flex gap-2">
          <div className="childTranslateZ rounded-2xl bg-primary_dark px-2 text-[0.65rem] text-text/80">
            {project.date}
          </div>
          <div className="childTranslateZ rounded-2xl bg-primary_dark px-2 text-[0.65rem] text-text/80">
            {project.duration}
          </div>
        </div>
      </div>
    </AmazingCard>
  );
}
