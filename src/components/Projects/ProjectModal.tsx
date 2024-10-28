import { projects } from "@/data/projects";
import { ArrowBackIosRounded } from "@mui/icons-material";
import { Fade, IconButton, Modal } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import Carousel from "./Carousel";
import Details from "./Details";
import StackTech from "./StackTech";

export default function ProjectModal({
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
        <div className="absolute left-1/2 top-1/2 h-[80%] w-[90%] max-w-screen-xl -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl bg-background">
          {project && (
            <>
              <div className="relative flex h-1/4 w-full items-center justify-center overflow-hidden shadow-xl">
                <IconButton
                  onClick={onClose}
                  sx={{ position: "absolute", left: 10, top: 10 }}
                >
                  <ArrowBackIosRounded />
                </IconButton>
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
              <div className="h-3/4 overflow-y-auto">
                <div className="mx-8 mt-5 flex flex-col-reverse gap-8 sm:flex-row">
                  <Details project={project} />
                  <StackTech technologies={project.technologies} />
                </div>
                <div className="mt-8 w-full text-center text-xl text-secondary">
                  Photothèque
                </div>
                <Carousel images={project.images} />
              </div>
            </>
          )}
        </div>
      </Fade>
    </Modal>
  );
}
