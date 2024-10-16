import { TProject } from "@/models/TProject";
import styles from "./Details.module.css";

export default function Details({ project }: { project: TProject }) {
  return (
    <div
      className={`font-josefin flex flex-1 flex-col gap-4 rounded-md bg-primary_dark/20 p-6 shadow-md ${styles.table}`}
    >
      <div>
        <div className={`font-merienda text-lg text-secondary`}>
          Détails du projet
        </div>
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
  );
}
