import { contactInfo } from "../utils/constant";
import { useScrollReveal } from "../utils/use-scroll-reveal";

const footerNavLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Works", href: "#works" },
  { label: "Blog", href: "#blog" },
];

const socialTypes = ["github", "twitter", "linkedin", "mail"];

const Footer = () => {
  const ctaRef = useScrollReveal<HTMLDivElement>({ y: 60 });
  const barRef = useScrollReveal<HTMLDivElement>({ y: 30, stagger: 0.08 });

  const socialLinks = contactInfo.filter(({ type }) =>
    socialTypes.includes(type)
  );

  return (
    <footer className="footer" id="contact">
      <div ref={ctaRef} className="pb-16 md:pb-24">
        <a
          href="mailto:iwaloyeo@gmail.com"
          className="block text-center text-white uppercase font-black tracking-tight text-4xl leading-tight md:text-8xl md:leading-[0.95]"
        >
          Let's work together
        </a>
      </div>

      <div
        ref={barRef}
        className="flex flex-col md:flex-row items-center justify-between gap-8 border-t border-white/10 pt-8"
      >
        <img src="/assets/logo.svg" alt="Olawalecode's logo" />

        <ul className="flex flex-wrap items-center justify-center gap-6 text-white/60 text-sm font-medium">
          {footerNavLinks.map(({ label, href }) => (
            <li key={href}>
              <a href={href} className="hover:text-white transition-colors">
                {label}
              </a>
            </li>
          ))}
        </ul>

        <ul className="flex items-center gap-6 text-white/60 text-sm font-medium uppercase">
          {socialLinks.map(({ url, type }) => (
            <li key={type}>
              <a
                href={url}
                target={type === "mail" ? undefined : "_blank"}
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                {type}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <p className="text-white/40 text-xs text-center mt-8">
        © {new Date().getFullYear()} Olawale Iwaloye. All rights reserved.
        Lagos, Nigeria.
      </p>
    </footer>
  );
};

export default Footer;
