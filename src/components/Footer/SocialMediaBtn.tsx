import { Tooltip } from "@mui/material";
import styles from "./SocialMediaBtn.module.css";

export default function SocialMediaBtn({
  icon,
  color,
  link,
  title,
}: {
  icon: JSX.Element;
  color: string;
  link: string;
  title: string;
}) {
  return (
    <Tooltip title={title}>
      <div className={styles.Btn} onClick={() => window.open(link, "_blank")}>
        <span className={styles.svgContainer}>{icon}</span>
        <span style={{ backgroundColor: color }} className={styles.BG} />
      </div>
    </Tooltip>
  );
}
