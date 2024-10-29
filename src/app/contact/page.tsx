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
    formState: { isValid, errors },
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
    if (!isValid) return;
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

      <p className="mx-auto my-8 w-3/4 rounded-lg border-[1px] border-secondary bg-primary_dark/30 p-4 font-josefin text-lg backdrop-blur-sm">
        N'hésitez pas à me contacter pour discuter de vos projets de
        développement. Je serais ravi de mettre mon expertise à votre service et
        d'explorer ensemble des opportunités de collaboration. Que ce soit pour
        une mission spécifique ou un partenariat à long terme, je suis à votre
        disposition pour échanger et trouver des solutions adaptées à vos
        besoins.
      </p>
      <div className="flex flex-col gap-8 sm:flex-row">
        <div className="flex flex-1 flex-col gap-6 rounded-md bg-primary_dark p-8 shadow-lg">
          <span className="text-secondary">Formulaire</span>
          <div className="flex gap-8">
            <TextField
              {...register("name", { required: true })}
              fullWidth
              variant="outlined"
              label="Prénom"
              error={!!errors?.name}
            />
            <TextField
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
              fullWidth
              variant="outlined"
              label="Email"
              type="email"
              error={!!errors?.email}
            />
          </div>
          <TextField
            {...register("subject", { required: true })}
            variant="outlined"
            label="Objet"
            error={!!errors?.subject}
          />
          <TextField
            {...register("message", { required: true })}
            name="message"
            variant="outlined"
            multiline
            label="Message"
            rows={4}
            error={!!errors?.message}
          />
          <LoadingButton
            variant="contained"
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
