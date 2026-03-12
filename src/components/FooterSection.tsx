import logoRodape from "@/assets/Logo_Rodape.png";
import FacebookIcon from "@/assets/FacebookIcon.svg";
import YouTubeIcon from "@/assets/YouTubeIcon.svg";
import InstagramIcon from "@/assets/InstagramIcon.svg";
import LinkedInIcon from "@/assets/LinkedInIcon.svg";

const socialLinks = [
  { href: "#", icon: FacebookIcon, label: "Facebook", text: "/citysolucoesurbanas" },
  { href: "#", icon: YouTubeIcon, label: "YouTube", text: "@citysolucoesurbanas" },
  { href: "#", icon: InstagramIcon, label: "Instagram", text: "@cityinc" },
  { href: "#", icon: LinkedInIcon, label: "LinkedIn", text: "/citysolucoesurbanas" },
];

const FooterSection = () => (
  <footer
    className="py-16 md:py-20 px-6 md:px-12"
    style={{ backgroundColor: "#1A433A" }}
  >
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between gap-12">

      <div className="flex-shrink-0">
        <img
          src={logoRodape}
          alt="city URBANISMO"
          className="h-[140px] md:h-[350px] w-auto object-contain"
        />
      </div>

      <div className="hidden md:grid grid-cols-2 gap-x-16 gap-y-6">
        {socialLinks.map(({ href, icon, label, text }) => (
          <a
            key={label}
            href={href}
            className="flex items-center gap-3 text-white hover:text-white/90 transition-colors"
          >
            <span className="flex items-center justify-center rounded-full bg-white/20 shrink-0">
              <img src={icon} alt={label} className="w-7 h-7" />
            </span>
            <span className="font-body text-sm">{text}</span>
          </a>
        ))}
      </div>

    </div>
  </footer>
);

export default FooterSection;