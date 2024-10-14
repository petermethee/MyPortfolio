import { standardFont } from "@/app/layout";
import { projects } from "@/data/projects";
import { Fade, Modal } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import Carousel from "./Carousel";
import styles from "./ProjectDetails.module.css";
import TechChip from "./TechChip";

export default function Projecdivetails({
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
              <div className="relative flex h-1/4 w-full items-center justify-center overflow-hidden shadow-xl">
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
                <div className="flex w-full justify-between px-8 py-4">
                  <span>
                    {project.workspace} - {project.theme}
                  </span>
                  <div className="flex gap-2">
                    {project.technologies.map((technology) => (
                      <TechChip key={technology} tech={technology} />
                    ))}
                  </div>
                </div>
                <div
                  className={`mx-8 mt-5 rounded-sm bg-primary_dark/20 p-8 ${standardFont.className} ${styles.table}`}
                >
                  <div>
                    <span className="pb-5 text-secondary">
                      Détails du projet
                    </span>
                  </div>
                  <div>
                    <span>Date</span>
                    <span>{project.date}</span>
                  </div>
                  <div>
                    <span>Durée</span>
                    <span>{project.duration}</span>
                  </div>
                  <div>
                    <span>Client</span>
                    <span>{project.client}</span>
                  </div>
                  <div>
                    <span>Description</span>
                    <span>{project.description}</span>
                  </div>
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
