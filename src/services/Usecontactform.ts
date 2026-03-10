import { useState } from "react";

interface FormData {
  nome: string;
  celular: string;
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
    nome: "",
    celular: "",
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

    // Monta FormData com os campos do estado
    const data = new FormData();
    data.append("nome", formData.nome);
    data.append("celular", formData.celular);
    data.append("email", formData.email);

    const request = new XMLHttpRequest();
    request.open("POST", "https://www.cityurbanismo.com.br/rdstation.php");

    request.addEventListener("load", () => {
      showFeedback("Formulário enviado com sucesso!");
      setFormData({ nome: "", celular: "", email: "" });
    });

    request.addEventListener("error", () => {
      showFeedback("Não foi possível enviar. Tente novamente.");
    });

    request.send(data);
  };

  return {
    formData,
    feedback,
    handleChange,
    handleSubmit,
  };
}