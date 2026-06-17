import React from "react";
import heroBg from "../assets/images/hero-bg.webp";

const Hero = () => {
  // యారో పై క్లిక్ చేయగానే About సెక్షన్‌కి స్మూత్‌గా స్క్రోల్ అయ్యే ఫంక్షన్
  const handleScrollDown = () => {
    const nextSection = document.getElementById("about");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      // {/* 🛠️ min-h-screen అప్లై చేసాము, ఇది అన్ని డివైజ్‌లలో 100% స్క్రీన్ హైట్ ఆక్యుపై చేస్తుంది */}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* 1. FULL WIDTH BACKGROUND IMAGE WITH DARK OVERLAY */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Cinematic Background"
          className="w-full h-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        {/* Subtle vignette/gradient so your text pops perfectly */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/85 via-brand-dark/75 to-brand-dark/75 z-10" />
        <div className="absolute inset-0 bg-black/20 z-10" />
      </div>
      <div className="relative z-20 max-w-7xl mx-auto w-full px-6 md:px-12 text-center select-none pointer-events-none">        
        <h1 className="font-nexa font-thin text-lg md:text-xl lg:text-3xl text-brand-gold leading-tight tracking-[0.13em] mb-4 animate-hero-fade-1">
          Hi I’m{" "}
          <span className="text-brand-gold font-thin">K. Jayakrishna</span>
        </h1>
        <h2 className="font-nexa font-bold text-2xl md:text-4xl lg:text-4xl tracking-wider text-brand-gold leading-tight uppercase animate-hero-fade-2">
          UNREAL ENGINE CINEMATIC ARTIST
        </h2>   
      </div>
      <div
        onClick={handleScrollDown}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 z-30 animate-bounce cursor-pointer p-2 group transition-all duration-300"
      >
        <svg
          className="w-6 h-6 md:w-7 md:h-7 text-brand-gold/50 group-hover:text-brand-gold transition-colors duration-300 ease-out"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>

    </section>
  );
};

export default Hero;