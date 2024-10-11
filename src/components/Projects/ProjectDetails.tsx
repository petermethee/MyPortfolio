import { projects } from "@/data/projects";
import { Fade, Modal } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import TechChip from "./TechChip";

export default function ProjectDetails({
  projectId,
  onClose,
}: {
  projectId: number | null;
  onClose: () => void;
}) {
  const [project, setProject] = useState(
    projects.find((project) => project.id === projectId),
  );
  useEffect(() => {
    setProject(projects.find((project) => project.id === projectId));
  }, [projectId]);
  return (
    <Modal open={projectId !== null} onClose={onClose}>
      <Fade in={projectId !== null}>
        <div className="absolute left-1/2 top-1/2 h-[80%] w-[80%] max-w-screen-xl -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl bg-background">
          {project && (
            <>
              <div className="relative flex h-1/4 w-full items-center justify-center overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  objectFit="cover"
                  className="-z-10 brightness-50"
                />
                <div>
                  <h1 className="text-2xl font-bold">{project.title}</h1>
                </div>
              </div>
              <div className="flex w-full justify-between p-4">
                <span>
                  {project.workspace} - {project.theme}
                </span>
                <div className="flex gap-2">
                  {project.technologies.map((technology) => (
                    <TechChip key={technology} tech={technology} />
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </Fade>
    </Modal>
  );
}
