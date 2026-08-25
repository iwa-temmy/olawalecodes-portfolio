import { useEffect, useState } from "react";
import Icon from "./icon";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Works", href: "#works" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const NavBar = () => {
  const [activeSection, setActiveSection] = useState("#home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const sections = navLinks
      .map(({ href }) => document.querySelector(href))
      .filter((section): section is Element => section instanceof Element);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection) {
          setActiveSection(`#${visibleSection.target.id}`);
        }
      },
      {
        threshold: [0.2, 0.5, 0.8],
        rootMargin: "-15% 0px -45% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavClick = (href: string) => {
    setActiveSection(href);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-3 md:top-0 left-0 right-0 w-full z-50 bg-transparent px-4 md:px-0">
      <div className="mx-auto flex items-center justify-between w-full container">
        <div className="flex items-center gap-12">
          <h1 className="bg-transparent p-2 md:bg-[#1F1F1F]">
            <img src="/assets/logo.svg" alt="Olawalecode's logo" />
          </h1>
          <div className="hidden items-center md:flex">
            <div className="bg-[#ffffff30] w-12 h-1" />
            <div className="h-4 w-4 lg:h-6 lg:w-6 bg-[#ffffff30] rounded-full" />
          </div>
          <ul className="text-[#ffffff50] md:flex hidden gap-2">
            {navLinks.map(({ label, href }) => {
              const isActive = activeSection === href;

              return (
                <li key={href}>
                  <a
                    href={href}
                    onClick={() => handleNavClick(href)}
                    className={`block px-4 py-1 rounded-md border border-dashed transition-colors duration-200 ${
                      isActive
                        ? "border-white text-white"
                        : "border-transparent hover:border-white hover:text-white focus-visible:border-white focus-visible:text-white"
                    }`}
                  >
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <button className="bg-white hidden md:flex gap-2 lg:px-6 lg:py-3 rounded-lg font-black whitespace-nowrap items-center text-[#1F1F1F]">
          Download CV <Icon icon="basil:download" className="text-lg" />
        </button>

        <button
          type="button"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          className="flex md:hidden h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          <Icon icon="ci:hamburger" height={22} width={22} />
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
          isMobileMenuOpen
            ? "mt-3 max-h-80 opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <nav className="rounded-2xl border border-white/10 bg-[#111111]/90 p-3 shadow-lg backdrop-blur-sm">
          <ul className="space-y-2">
            {navLinks.map(({ label, href }, index) => {
              const isActive = activeSection === href;

              return (
                <li
                  key={href}
                  className={`transform transition-all duration-500 ease-out ${
                    isMobileMenuOpen
                      ? "translate-y-0 opacity-100"
                      : "-translate-y-2 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <a
                    href={href}
                    onClick={() => handleNavClick(href)}
                    className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-white text-[#111111]"
                        : "text-white/80 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <span>{label}</span>
                    {isActive && <Icon icon="fluent:arrow-right" height={16} width={16} />}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
