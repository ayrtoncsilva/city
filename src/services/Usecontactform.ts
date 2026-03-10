import { useState } from "react";

interface FormData {
  name: string;
  personal_phone: string;
  email: string;
}

interface UseContactFormReturn {
  formData: FormData;
  feedback: string | null;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

export function useContactForm(): UseContactFormReturn {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    personal_phone: "",
    email: "",
  });

  const [feedback, setFeedback] = useState<string | null>(null);

  const showFeedback = (message: string) => {
    setFeedback(message);
    setTimeout(() => setFeedback(null), 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Envio paralelo para MtnStudio (CRM Hypnobox)
    if (
      typeof (window as any).MtnStudio !== "undefined" &&
      (window as any).MtnStudio.sendLead
    ) {
      (window as any).MtnStudio.sendLead(
        "conversion-form",
        (response: any) =>
          console.log("Lead enviado para MtnStudio com sucesso", response),
        (error: any) =>
          console.error("Erro ao enviar lead para MtnStudio", error)
      );
    }

    // Envia para a API Route da Vercel (evita CORS)
    const request = new XMLHttpRequest();
    request.open("POST", "/api/rdstation");
    request.setRequestHeader("Content-Type", "application/json");

    request.addEventListener("load", () => {
      showFeedback("Formulário enviado com sucesso!");
      setFormData({ name: "", personal_phone: "", email: "" });
    });

    request.addEventListener("error", () => {
      showFeedback("Não foi possível enviar. Tente novamente.");
    });

    request.send(JSON.stringify({
      name: formData.name,
      personal_phone: formData.personal_phone,
      email: formData.email,
    }));
  };

  return {
    formData,
    feedback,
    handleChange,
    handleSubmit,
  };
}