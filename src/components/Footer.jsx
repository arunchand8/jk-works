import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="w-full bg-brand-dark border-t border-brand-gold/5 pt-20 pb-3 px-6 md:px-1 lg:px-2"
    >
      <div className="border max-w-7xl mx-auto w-full flex flex-col items-center justify-center text-center">
        {/* Main Cinematic Heading */}
        <h2 className="font-nexa font-bold text-3xl md:text-4xl text-brand-gold tracking-wide max-w-2xl leading-tight mb-10">
          Let’s Create
        </h2>

        {/* 
          --- 1. PREMIUM SEND ME BUTTON WITH MAIL ICON ---
          దీనిపై క్లిక్ చేయగానే యూజర్‌కి డైరెక్ట్‌గా జీమెయిల్ కంపౌజ్ విండో ఓపెన్ అవుతుంది
        */}
        <a
          href="mailto:jayakrishna.ue@gmail.com"
          className="group flex items-center gap-3 bg-transparent border border-brand-gold/30 hover:border-brand-gold px-8 py-3.5 rounded-full font-montserrat font-medium text-sm text-brand-gold hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(198,172,143,0.05)] hover:shadow-[0_0_25px_rgba(198,172,143,0.2)] mb-16 cursor-pointer transform hover:-translate-y-0.5"
        >
          {/* Elegant Minimal Mail Icon */}
          <svg
            className="w-4 h-4 text-brand-gold group-hover:text-white transition-colors duration-300"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>

          <span className="tracking-[0.15em] uppercase">Send Me</span>
        </a>

        {/* 
          --- 2. HIGH-FIDELITY LUXURY SOCIAL MEDIA ICONS ---
          లింక్స్ స్థానంలో ప్రొఫెషనల్ అఫీషియల్ ఐకాన్స్ ఇన్‌లైన్ చేసాము
        */}
        <div className="flex items-center justify-center gap-8 mb-24">
          {/* LINKEDIN ICON */}
          <a
            href="https://www.linkedin.com/in/imjayakrishna"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-gold/40 hover:text-brand-gold transition-all duration-300 transform hover:scale-110 cursor-pointer"
            aria-label="LinkedIn"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>

          {/* YOUTUBE ICON */}
          <a
            href="https://www.youtube.com/@im_jayakrishna"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-gold/40 hover:text-brand-gold transition-all duration-300 transform hover:scale-110 cursor-pointer"
            aria-label="YouTube"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>

          {/* INSTAGRAM ICON */}
          <a
            href="https://www.instagram.com/im_jayakrishna/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-gold/40 hover:text-brand-gold transition-all duration-300 transform hover:scale-110 cursor-pointer"
            aria-label="Instagram"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
            </svg>
          </a>
        </div>

        {/* Bottom Copyright & Footer Note */}
        <div className="w-full border-t border-brand-gold/6 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-brand-gold font-montserrat font-light text-[10px] md:text-[11px] tracking-widest">
          <p>© {currentYear} K. Jayakrishna. All Rights Reserved.</p>
          <p className="tracking-[0.3em]">Designed for Cinematics</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;