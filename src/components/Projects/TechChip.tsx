import { standardFont } from "@/app/layout";
import styles from "./TechChip.module.css";
export default function TechChip({ tech }: { tech: string }) {
  return (
    <div
      className={`h-full w-full rounded-xl px-3 pt-[2px] text-[0.7rem] ${styles.tech} ${standardFont.className} childTranslateZ`}
    >
      {tech}
    </div>
  );
}
