import { Tooltip } from "@mui/material";
import { IconType } from "react-icons";
import styles from "./TechChip.module.css";
export default function TechChip({
  tech,
  icon,
}: {
  tech: string;
  icon: IconType;
}) {
  return (
    <Tooltip title={tech}>
      <div
        className={`h-full w-full rounded-full p-2 text-[0.7rem] ${styles.tech} childTranslateZ font-josefin`}
      >
        {icon({ size: "18" })}
      </div>
    </Tooltip>
  );
}
