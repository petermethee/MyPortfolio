import { EExternalLinks } from "@/helper/EExternalLinks";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { MenuItem, Select } from "@mui/material";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./Footer.module.css";
import SocialMediaBtn from "./SocialMediaBtn";
export default function Footer() {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState("fr");

  useEffect(() => {
    setLanguage(i18n.language.split("-")[0]);
  }, [i18n.language]);

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

        <Select
          value={language}
          margin="none"
          size="small"
          sx={{ fontSize: "0.8rem" }}
          onChange={(e) => {
            i18n.changeLanguage(e.target.value);
          }}
        >
          <MenuItem value="fr">Français</MenuItem>
          <MenuItem value="en">English</MenuItem>
        </Select>
      </div>
    </div>
  );
}
