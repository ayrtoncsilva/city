import { useState } from "react";
import heroBg from "@/assets/FotoHeader.png";
import heroBgMobile from "@/assets/fotoHeaderMobile.png";
import heroBg2 from "@/assets/FotoHeader2.png";
import logoCitage from "@/assets/LogoCitage.png";
import logoCitageMobile from "@/assets/logomobile.png";

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
    <section className="min-h-screen flex flex-col">
      <div className="relative flex-1 flex items-center justify-center">
        {/* BG DESKTOP */}
        <div
          className="absolute inset-0 bg-cover bg-center hidden md:block"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-black/15" />
        </div>

        {/* BG MOBILE */}
        <div
          className="absolute inset-0 bg-cover bg-center block md:hidden"
          style={{ backgroundImage: `url(${heroBgMobile})` }}
        >
          <div className="absolute inset-0 bg-black/15" />
        </div>

        <div className="
          relative z-10
          w-full
          px-5
          md:px-24
          lg:px-28
          flex
          flex-col
          md:flex-row
          items-center
          md:justify-center
          md:gap-32
          lg:gap-40
          xl:gap-48
        ">
          {/* LOGO DESKTOP */}
          <div className="hidden md:flex flex-shrink-0 justify-center items-center md:pl-25">
            <img
              src={logoCitage}
              alt="Citage Santé"
              className="w-auto md:min-w-[550px]"
            />
          </div>

          {/* LOGO MOBILE */}
          <div className="flex md:hidden justify-center items-center pt-24 pb-32">
            <img
              src={logoCitageMobile}
              alt="Citage Santé"
              className="w-auto max-w-[220px]"
            />
          </div>

          {/* FORM */}
          <div
            className="
              mx-auto
              w-full
              max-w-[540px]
              md:max-w-[500px]
              md:w-full
              shrink-0
              border
              border-white/50
              bg-[#7A6C55]
              px-6 py-5
              md:bg-[rgb(122_108_85/0.40)]
              md:p-10
              md:backdrop-blur-xl
            "
          >
            {/* pr compensa o letter-spacing após a última letra para a linha ir até o fim de "MAIS" */}
            <div className="mb-6 w-max max-w-full pr-[0.4em] md:mb-10 md:pr-[0.6em]">
              <h2 className="mb-3 font-rolide text-xl font-light tracking-[0.4em] text-white md:mb-4 md:text-3xl md:tracking-[0.6em]">
                SAIBA MAIS
              </h2>
              <div className="h-px w-full bg-white/50" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
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
                className="bg-city-dark text-white px-6 md:px-10 py-2 md:py-3 text-sm md:text-base tracking-widest font-halyard hover:bg-city-dark/90 transition-colors"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* RODAPÉ COM IMAGEM SECUNDÁRIA */}
      <div
        className="relative h-[120px] md:h-[100px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg2})` }}
      >
        <div className="absolute inset-0 bg-black/20" />
      </div>
    </section>
  );
};

export default HeroSection;