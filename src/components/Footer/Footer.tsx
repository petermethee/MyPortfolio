import { EExternalLinks } from "@/helper/EExternalLinks";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
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

      <div className="flex gap-8">
        <SocialMediaBtn
          color="#0ea860"
          icon={<LocalPhoneRoundedIcon />}
          title="+33 6 20 05 35 17"
          link={EExternalLinks.phone}
        />
        <SocialMediaBtn
          color="#0e76a8"
          icon={<LinkedInIcon />}
          title="LinkedIn"
          link={EExternalLinks.linkedin}
        />
        <SocialMediaBtn
          color="#283135"
          icon={<GitHubIcon />}
          title="Github"
          link={EExternalLinks.github}
        />
      </div>
    </div>
  );
}
