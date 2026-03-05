import { useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const CitageLogo = () => (
  <div className="flex flex-col items-start">
    <div className="flex items-center gap-3">
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="opacity-90">
        <path d="M24 4L8 20L16 28L24 20L32 28L40 20L24 4Z" stroke="white" strokeWidth="1.5" fill="none"/>
        <path d="M16 28L24 36L32 28" stroke="white" strokeWidth="1.5" fill="none"/>
        <path d="M12 32L24 44L36 32" stroke="white" strokeWidth="1.5" fill="none"/>
      </svg>
      <span className="font-display text-5xl md:text-7xl tracking-[0.3em] text-white font-light">
        CITÀGE
      </span>
    </div>
    <span className="font-display text-3xl md:text-4xl tracking-[0.5em] text-white/90 font-light mt-1 ml-16">
      SANTÉ
    </span>
  </div>
);

const HeroSection = () => {
  const [formData, setFormData] = useState({ nome: "", celular: "", email: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="relative min-h-screen flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12 py-20">
        <CitageLogo />

        <div className="backdrop-blur-md bg-white/10 border border-white/20 p-8 md:p-10 w-full max-w-md">
          <h2 className="font-body text-lg tracking-[0.4em] text-white mb-8 font-light">
            SAIBA MAIS
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Nome completo"
              value={formData.nome}
              onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
              className="w-full bg-transparent border border-white/40 text-white placeholder:text-white/60 px-4 py-3 text-sm font-body focus:outline-none focus:border-white/70 transition-colors"
            />
            <input
              type="tel"
              placeholder="Celular"
              value={formData.celular}
              onChange={(e) => setFormData({ ...formData, celular: e.target.value })}
              className="w-full bg-transparent border border-white/40 text-white placeholder:text-white/60 px-4 py-3 text-sm font-body focus:outline-none focus:border-white/70 transition-colors"
            />
            <input
              type="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-transparent border border-white/40 text-white placeholder:text-white/60 px-4 py-3 text-sm font-body focus:outline-none focus:border-white/70 transition-colors"
            />
            <button
              type="submit"
              className="w-full md:w-auto bg-city-dark text-white px-12 py-3 text-sm tracking-widest font-body hover:bg-city-dark/90 transition-colors"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
