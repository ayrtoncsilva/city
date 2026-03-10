import heroBg from "@/assets/FotoHeader.png";
import heroBgMobile from "@/assets/fotoHeaderMobile.png";
import heroBg2 from "@/assets/Bg_Rodape.png";
import logoCitage from "@/assets/LogoCitage.png";
import logoCitageMobile from "@/assets/logomobile.png";
import { useContactForm } from "@/services/Usecontactform";

const HeroSection = () => {
  const { formData, feedback, handleChange, handleSubmit } = useContactForm();

  return (
    <section className="min-h-screen flex flex-col">
      {/* HERO PRINCIPAL */}
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

        <div className="relative z-10 w-full md:px-20 flex flex-col md:flex-row items-center md:justify-center md:gap-96">
          {/* LOGO DESKTOP */}
          <div className="hidden md:flex flex-shrink-0 justify-center items-center md:pl-25">
            <img
              src={logoCitage}
              alt="Citage Santé"
              className="w-auto md:min-w-[550px]"
            />
          </div>

          {/* LOGO MOBILE */}
          <div className="flex md:hidden justify-center items-center pt-24 pb-16">
            <img
              src={logoCitageMobile}
              alt="Citage Santé"
              className="w-auto max-w-[220px]"
            />
          </div>

          {/* FORM */}
          <div className="w-full max-w-[340px] md:max-w-none md:w-[600px] bg-[#7A6C55] md:backdrop-blur-2xl md:bg-white/[0.01] border border-white/50 px-6 py-5 md:p-12">
            <div className="w-fit mb-8 md:mb-10">
              <h2 className="font-rolide text-xl md:text-3xl tracking-[0.4em] md:tracking-[0.6em] text-white mb-3 md:mb-4 font-light">
                SAIBA MAIS
              </h2>
              <div className="w-full h-px bg-white/50" />
            </div>

            {/* id="conversion-form" é obrigatório para MtnStudio.sendLead('conversion-form') */}
            <form
              id="conversion-form"
              onSubmit={handleSubmit}
              className="space-y-5 md:space-y-6"
            >
              <input
                type="text"
                name="name"
                placeholder="Nome completo"
                value={formData.name}
                onChange={handleChange}
                required
                {...{ "mtn-capture": "", "mtn-field": "Name" }}
                className="w-full bg-transparent border border-white/50 text-white placeholder:text-white/70 px-4 py-3 md:px-5 md:py-4 text-sm md:text-lg font-halyard focus:outline-none focus:border-white transition-colors"
              />
              <input
                type="tel"
                name="personal_phone"
                placeholder="Celular"
                value={formData.personal_phone}
                onChange={handleChange}
                required
                {...{ "mtn-capture": "", "mtn-field": "Phone" }}
                className="w-full bg-transparent border border-white/50 text-white placeholder:text-white/70 px-4 py-3 md:px-5 md:py-4 text-sm md:text-base font-halyard focus:outline-none focus:border-white transition-colors"
              />
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleChange}
                required
                {...{ "mtn-capture": "", "mtn-field": "Email" }}
                className="w-full bg-transparent border border-white/50 text-white placeholder:text-white/70 px-4 py-3 md:px-5 md:py-4 text-sm md:text-base font-halyard focus:outline-none focus:border-white transition-colors"
              />

              {/* Feedback inline */}
              {feedback && (
                <p className="text-white/90 text-sm font-halyard">{feedback}</p>
              )}

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

      {/* RODAPÉ */}
      <div
        className="relative h-[50px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg2})` }}
      >
        <div className="absolute inset-0 bg-black/20" />
      </div>
    </section>
  );
};

export default HeroSection;