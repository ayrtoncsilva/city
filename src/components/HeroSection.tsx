import heroBg from "@/assets/FotoHeader.png";
import heroBgMobile from "@/assets/fotoHeaderMobile.png";
import heroBg2 from "@/assets/FotoHeader2.png";
import logoCitage from "@/assets/LogoCitage.png";
import logoCitageMobile from "@/assets/logomobile.png";
import { useContactForm } from "@/services/Usecontactform";

const HeroSection = () => {
  const { formData, feedback, handleChange, handlePhoneChange, handleSubmit } =
    useContactForm();

  return (
    <section className="min-h-screen flex flex-col">
      {/* HERO PRINCIPAL */}
      <div className="relative flex-1 flex items-center justify-center">
        {/* BG DESKTOP */}
        <div
          className="absolute inset-0 bg-cover bg-center hidden md:block"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* BG MOBILE */}
        <div
          className="absolute inset-0 bg-cover bg-center block md:hidden"
          style={{ backgroundImage: `url(${heroBgMobile})` }}
        >
          <div className="absolute inset-0 bg-black/10" />
        </div>

        <div className="relative z-10 w-full md:px-20 flex flex-col md:flex-row items-center md:justify-center md:gap-24 lg:gap-40">
          {/* LOGO DESKTOP */}
          <div className="hidden md:flex flex-shrink-0 justify-center items-center">
            <img
              src={logoCitage}
              alt="Citage Santé"
              className="w-auto md:min-w-[420px] lg:min-w-[520px]"
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
          <div
            className="w-full max-w-[340px] md:max-w-none md:w-[380px] lg:w-[420px] border border-white/40 px-8 py-8 md:px-10 md:py-10"
            style={{ background: "rgba(180, 155, 110, 0.45)", backdropFilter: "blur(12px)" }}
          >
            {/* Título */}
            <div className="w-fit mb-7">
              <h2 className="font-rolide text-base md:text-lg tracking-[0.5em] text-white mb-3 font-light">
                SAIBA MAIS
              </h2>
              <div className="w-full h-px bg-white/50" />
            </div>

            {/* id="conversion-form" é obrigatório para MtnStudio.sendLead('conversion-form') */}
            <form
              id="conversion-form"
              onSubmit={handleSubmit}
              className="space-y-3"
            >
              <input
                type="text"
                name="name"
                placeholder="Nome completo"
                value={formData.name}
                onChange={handleChange}
                required
                {...{ "mtn-capture": "", "mtn-field": "Name" }}
                className="w-full bg-white/10 border border-white/40 text-white placeholder:text-white/80 px-4 py-2.5 text-sm font-halyard focus:outline-none focus:border-white transition-colors"
              />

              <input
                type="tel"
                name="personal_phone"
                placeholder="(00) 00000-0000"
                value={formData.personal_phone}
                onChange={handlePhoneChange}
                required
                minLength={14}
                maxLength={15}
                {...{ "mtn-capture": "", "mtn-field": "Phone" }}
                className="w-full bg-white/10 border border-white/40 text-white placeholder:text-white/80 px-4 py-2.5 text-sm font-halyard focus:outline-none focus:border-white transition-colors"
              />

              <input
                type="email"
                name="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleChange}
                required
                {...{ "mtn-capture": "", "mtn-field": "Email" }}
                className="w-full bg-white/10 border border-white/40 text-white placeholder:text-white/80 px-4 py-2.5 text-sm font-halyard focus:outline-none focus:border-white transition-colors"
              />

              {/* Feedback inline */}
              {feedback && (
                <p className="text-white/90 text-xs font-halyard pt-1">{feedback}</p>
              )}

              {/* Botão centralizado e compacto como no protótipo */}
              <div className="pt-2 flex justify-center">
                <button
                  type="submit"
                  className="bg-city-dark text-white px-16 py-2 text-sm tracking-widest font-halyard hover:bg-city-dark/90 transition-colors"
                >
                  Enviar
                </button>
              </div>
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