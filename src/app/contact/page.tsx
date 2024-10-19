"use client";
import SocialMediaBtn from "@/components/Footer/SocialMediaBtn";
import Wrapper from "@/components/shared/Wrapper";
import { EExternalLinks } from "@/helper/EExternalLinks";
import emailjs from "@emailjs/browser";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import LoadingButton from "@mui/lab/LoadingButton";
import {
  Alert,
  AlertColor,
  Snackbar,
  SnackbarCloseReason,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const serviceID = "default_service";
const templateID = "template_3olr7ru";
type TFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<TFormData>();

  const [snackState, setSnackState] = useState<{
    severity: AlertColor;
    message: string;
    open: boolean;
  }>({
    severity: "success",
    message: "",
    open: false,
  });

  const [loading, setLoading] = useState(false);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackState((prev) => ({ ...prev, open: false }));
  };

  const onSubmit = (data: TFormData) => {
    setLoading(true);
    const templateParams = {
      client_name: data.name,
      client_email: data.email,
      subject: data.subject,
      message: data.message,
    };

    emailjs
      .send(serviceID, templateID, templateParams)
      .then(
        () => {
          setSnackState({
            severity: "success",
            message: "Votre message a bien été envoyé.",
            open: true,
          });
        },
        (error) => {
          console.error(error);
          setSnackState({
            severity: "error",
            message: "Erreur lors de l'envoi du message.",
            open: true,
          });
        },
      )
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    emailjs.init({
      publicKey: "Iu9DCh1_fmkT19Xvf",
    });
  }, []);

  return (
    <Wrapper>
      <h1>Contactez-moi !</h1>
      <div className="flex flex-col gap-8 sm:flex-row">
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
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
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
          <LoadingButton
            variant="contained"
            disabled={!isValid}
            onClick={handleSubmit(onSubmit)}
            loading={loading}
            color="secondary"
          >
            Envoyer
          </LoadingButton>
        </div>

        <div className="flex h-fit flex-col gap-8 rounded-md bg-primary_dark p-8 shadow-lg">
          <span className="text-secondary">Autres réseaux</span>
          <div className="flex items-center gap-8 sm:flex-col">
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
      </div>
      <Snackbar
        open={snackState.open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={snackState.severity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {snackState.message}
        </Alert>
      </Snackbar>
    </Wrapper>
  );
}
