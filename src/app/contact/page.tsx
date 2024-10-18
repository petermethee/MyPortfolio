"use client";
import SocialMediaBtn from "@/components/Footer/SocialMediaBtn";
import Wrapper from "@/components/shared/Wrapper";
import { EExternalLinks } from "@/helper/EExternalLinks";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    defaultValues: {
      email: "",
      message: "",
      subject: "",
      name: "",
    },
  });

  return (
    <Wrapper>
      <h1>Contactez-moi !</h1>
      <div className="flex flex-col gap-8 md:flex-row">
        <div className="flex flex-1 flex-col gap-6 rounded-md bg-primary_dark p-8 shadow-lg">
          <span className="text-secondary">Formulaire</span>
          <div className="flex gap-8">
            <TextField
              {...register("name", { required: true })}
              fullWidth
              variant="outlined"
              label="Prénom"
            />
            <TextField
              {...register("email", { required: true })}
              fullWidth
              variant="outlined"
              label="Email"
            />
          </div>
          <TextField
            {...register("subject", { required: true })}
            variant="outlined"
            label="Objet"
          />
          <TextField
            {...register("message", { required: true })}
            name="message"
            variant="outlined"
            multiline
            label="Message"
            rows={4}
          />
          <Button variant="contained" disabled={!isValid}>
            Envoyer
          </Button>
        </div>

        <div className="flex h-fit flex-col items-center gap-8 rounded-md bg-primary_dark p-8 shadow-lg">
          <div>Autres réseaux</div>
          <SocialMediaBtn
            color="#0e76a8"
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
            color="#0e76a8"
            icon={<GitHubIcon />}
            title="Github"
            link={EExternalLinks.github}
          />
        </div>
      </div>
    </Wrapper>
  );
}
