import Hero from "@/components/Home/Hero";
import Qualities from "@/components/Home/Qualities";
import ArchitectureRoundedIcon from "@mui/icons-material/ArchitectureRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";

import { Button } from "@mui/material";

export default function Home() {
  return (
    <>
      <Hero />
      <Qualities />

      <div className="flex justify-evenly gap-10 p-8">
        <Button
          sx={{
            height: "50px",
          }}
          variant="contained"
          startIcon={<ArchitectureRoundedIcon />}
        >
          Voir mes projets
        </Button>
        <Button startIcon={<EmailRoundedIcon />} variant="contained">
          Me contacter
        </Button>
      </div>
    </>
  );
}
