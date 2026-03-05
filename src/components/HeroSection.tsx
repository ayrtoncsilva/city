import { useState } from "react";
import heroBg from "@/assets/FotoHeader.png";
import logoCitage from "@/assets/LogoCitage.png";

const HeroSection = () => {
  const [formData, setFormData] = useState({
    nome: "",
    celular: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center">

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-black/25" />
      </div>

      <div className="
        relative z-10
        w-full
        max-w-[1700px]
        mx-auto
        px-6
        md:px-24
        flex
        flex-col
        md:flex-row
        items-center
        justify-center
        gap-16
        md:gap-[330px]
      ">

        {/* LOGO */}
        <div className="flex-shrink-0 flex justify-center">
          <img
            src={logoCitage}
            alt="Citage Santé"
            className="w-[220px] md:w-[650px]"
          />
        </div>

        {/* FORM */}
        <div className="
          w-full
          max-w-[380px]
          md:max-w-none
          md:w-[700px]
          backdrop-blur-2xl
          bg-white/10
          border
          border-white/30
          p-8
          md:p-14
        ">

          <h2 className="font-rolide text-xl md:text-3xl tracking-[0.4em] md:tracking-[0.6em] text-white mb-8 md:mb-10 font-light">
            SAIBA MAIS
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">

            <input
              type="text"
              placeholder="Nome completo"
              value={formData.nome}
              onChange={(e) =>
                setFormData({ ...formData, nome: e.target.value })
              }
              className="w-full bg-transparent border border-white/50 text-white placeholder:text-white/70 px-4 py-3 md:px-5 md:py-4 text-sm md:text-lg font-halyard focus:outline-none focus:border-white transition-colors"
            />

            <input
              type="tel"
              placeholder="Celular"
              value={formData.celular}
              onChange={(e) =>
                setFormData({ ...formData, celular: e.target.value })
              }
              className="w-full bg-transparent border border-white/50 text-white placeholder:text-white/70 px-4 py-3 md:px-5 md:py-4 text-sm md:text-base font-halyard focus:outline-none focus:border-white transition-colors"
            />

            <input
              type="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full bg-transparent border border-white/50 text-white placeholder:text-white/70 px-4 py-3 md:px-5 md:py-4 text-sm md:text-base font-halyard focus:outline-none focus:border-white transition-colors"
            />

            <button
              type="submit"
              className="bg-city-dark text-white px-10 md:px-16 py-3 md:py-4 text-sm md:text-base tracking-widest font-halyard hover:bg-city-dark/90 transition-colors"
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