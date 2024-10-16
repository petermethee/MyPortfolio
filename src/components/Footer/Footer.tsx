import { EExternalLinks } from "@/helper/EExternalLinks";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import styles from "./Footer.module.css";
import SocialMediaBtn from "./SocialMediaBtn";
export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.copyright}>
        <span>
          Propulsed by <strong>JPCorp</strong>
        </span>
      </div>

      <div className={styles.socialLinks}>
        <SocialMediaBtn
          link={EExternalLinks.linkedin}
          icon={<LinkedInIcon />}
          color="#0e76a8"
          title="LinkedIn"
        />
      </div>
    </div>
  );
}
