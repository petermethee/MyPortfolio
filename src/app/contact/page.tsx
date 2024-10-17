"use client";
import Wrapper from "@/components/shared/Wrapper";
import { TextField } from "@mui/material";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    email: "",
    message: "",
    subject: "",
    name: "",
  });

  return (
    <Wrapper>
      <h1>Contact</h1>
      <div className="flex flex-col gap-4 rounded-md bg-primary_dark p-8">
        <TextField
          variant="standard"
          placeholder="Votre prénom"
          label="Prénom"
        />
        <TextField
          variant="standard"
          placeholder="L'adresse Email pour vous répondre"
          label="Email"
        />
        <TextField
          variant="standard"
          placeholder="Comment puis-je vous aider"
          label="Subject"
        />
        <TextField variant="standard" placeholder="Message" label="Message" />
      </div>
    </Wrapper>
  );
}
