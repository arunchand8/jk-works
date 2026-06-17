import React, { useState, useEffect } from "react";
import jkLogo from "../assets/images/jk-logo.webp";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "workflow", label: "Workflow" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const { offsetTop, offsetHeight } = el;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection("home");
      setIsMobileMenuOpen(false);
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const navbarOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(id);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 h-20 bg-brand-dark/80 backdrop-blur-md border-b border-brand-gold/5 z-50 transition-all duration-300">
      <div className="max-w-7xl h-full mx-auto px-6 md:px-12 flex items-center justify-between md:justify-start md:gap-16">
        <img
          src={jkLogo}
          alt="JK Works Logo"
          onClick={() => scrollToSection("home")}
          className="h-8 md:h-10 w-auto object-contain cursor-pointer transition-transform duration-300 hover:scale-105"
        />
        {/* DESKTOP LINKS */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`font-montserrat text-sm tracking-[0.15em] transition-all duration-300 py-2 cursor-pointer
                ${
                  activeSection === item.id
                    ? "font-light text-brand-gold"
                    : "font-light text-brand-gold/80 hover:text-brand-gold"
                }
              `}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* --- MOBILE HAMBURGER BUTTON --- */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-brand-gold p-2 focus:outline-none cursor-pointer"
        >
          {isMobileMenuOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 8h16M4 16h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* --- MOBILE DROPDOWN OVERLAY (Clean Text Only) --- */}
      <div
        className={`
        absolute top-20 left-0 right-0 bg-brand-dark/95 backdrop-blur-lg border-b border-brand-gold/10 px-8 py-6 flex flex-col gap-4 transition-all duration-300 ease-in-out md:hidden
        ${isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}
      `}
      >
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`text-left font-montserrat text-sm tracking-widest py-2 transition-all duration-200 cursor-pointer
              ${
                activeSection === item.id
                  ? "font-medium text-brand-gold"
                  : "font-light text-brand-gold/80 hover:text-brand-gold"
              }
            `}
          >
            {item.label}
          </button>
        ))}
      </div>
    </header>
  );
};

export default Navbar;