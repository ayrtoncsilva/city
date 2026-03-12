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
  handlePhoneChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 11);

  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 11)
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  return value;
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

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setFormData((prev) => ({ ...prev, personal_phone: formatted }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

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

    request.send(
      JSON.stringify({
        name: formData.name,
        personal_phone: formData.personal_phone,
        email: formData.email,
      })
    );
  };

  return {
    formData,
    feedback,
    handleChange,
    handlePhoneChange,
    handleSubmit,
  };
}