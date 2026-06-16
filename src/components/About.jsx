// import React from "react";
// import aboutProfile from "../assets/images/about-profile.webp";

// const About = () => {
//   return (
//     <section
//       id="about"
//       className="relative min-h-screen w-full flex items-center bg-brand-dark overflow-hidden py-16 md:py-0"
//     >
//       {/* 1. DESKTOP VIEW: CINEMATIC RIGHT-ALIGNED IMAGE */}
//       <div className="absolute inset-y-0 right-0 w-full md:w-1/2 lg:w-3/6 xl:w-3/7 z-0 hidden md:block">
//         <img
//           src={aboutProfile}
//           alt="Jayakrishna Profile Desktop"
//         // brightness, contrast పెంచడం ద్వారా ఇమేజ్ లైటింగ్ సూపర్ క్లియర్ గా మారుతుంది
//           className="w-full h-full object-cover object-center md:object-end brightness-[1.15] contrast-[1.05] saturate-[1.02] transition-all duration-500"
//         />
//         {/* Left Smooth Fade Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/60 to-transparent z-10" />
//       </div>

//       {/* 2. MAIN RESPONSIVE CONTAINER */}
//       <div className="relative z-20 max-w-7xl mx-auto w-full px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//         {/* TEXT & MOBILE IMAGE COLUMN */}
//         <div className="max-w-xl text-left flex flex-col items-center md:items-start">
//           {/* --- MOBILE ONLY: ROUNDED PROFILE IMAGE WITH GOLD GLOW LIGHTING --- */}
//           <div className="block md:hidden mb-8 relative">
//             {/* Ambient Lighting Glow Behind the Circle */}
//             <div className="absolute inset-0 rounded-full bg-brand-gold/20 blur-xs scale-96" />

//             <div className="w-44 h-44 rounded-full overflow-hidden border-2 border-brand-gold/40 relative z-10 shadow-[0_0_25px_rgba(198,172,143,0.25)]">
//               <img
//                 src={aboutProfile}
//                 alt="Jayakrishna Profile Mobile"
//                 className="w-full h-full object-cover object-center brightness-[1.20] contrast-[1.08] saturate-[1.05]"
//               />
//             </div>
//           </div>

//           {/* Heading: About Me */}
//           <h2 className="font-nexa font-bold text-left text-3xl md:text-4xl text-brand-gold tracking-wide mb-6 w-full text-center md:text-left">
//             About Me
//           </h2>

//           {/* Description Content from image_3c7862.jpg */}
//           <div className="font-montserrat font-light text-sm md:text-base text-brand-gold/80 space-y-6 leading-relaxed tracking-wide text-left">
//             <p>
//               I’m Jayakrishna an Unreal Engine Cinematic Artist with 3+ years of
//               experience creating high-impact game trailers and cinematics.
//             </p>

//             <p>
//               I specialize in scene composition, camera direction, and visual
//               storytelling.
//             </p>

//             <p>
//               From pre-visualization to final output, I handle the full
//               cinematic pipeline, including lighting, VFX integration, editing,
//               and sound design.
//             </p>
//           </div>
//         </div>

//         {/* Empty Column for Desktop Grid Alignment */}
//         <div className="hidden md:block w-full h-full pointer-events-none" />
//       </div>
//     </section>
//   );
// };

// export default About;





import React from "react";
import aboutProfile from "../assets/images/about-profile.webp";

const About = () => {
  return (
    <section
      id="about"
      className="border relative w-full flex items-center bg-brand-dark overflow-hidden py-24 md:py-26 lg:py-37"
    >
      {/* 1. DESKTOP VIEW: CINEMATIC RIGHT-ALIGNED IMAGE */}
      <div className="absolute inset-y-0 right-0 w-full md:w-1/2 lg:w-3/6 xl:w-3/7 z-0 hidden md:block">
        <img
          src={aboutProfile}
          alt="Jayakrishna Profile Desktop"
          className="w-full h-full object-cover object-top md:object-end brightness-[1.15] contrast-[1.05] saturate-[1.02] transition-all duration-500"
        />
        {/* Left Smooth Fade Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/60 to-transparent z-10" />
      </div>

      {/* 2. MAIN RESPONSIVE CONTAINER */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* TEXT & MOBILE IMAGE COLUMN */}
        <div className="max-w-xl text-left flex flex-col items-center md:items-start">
          
          {/* --- MOBILE ONLY: ROUNDED PROFILE IMAGE WITH GOLD GLOW LIGHTING --- */}
          <div className="block md:hidden mb-8 relative">
            {/* Ambient Lighting Glow Behind the Circle */}
            <div className="absolute inset-0 rounded-full bg-brand-gold/20 blur-xs scale-96" />

            <div className="w-44 h-44 rounded-full overflow-hidden border-2 border-brand-gold/40 relative z-10 shadow-[0_0_25px_rgba(198,172,143,0.25)]">
              <img
                src={aboutProfile}
                alt="Jayakrishna Profile Mobile"
                className="w-full h-full object-cover object-center brightness-[1.20] contrast-[1.08] saturate-[1.05]"
              />
            </div>
          </div>

          {/* Heading: About Me */}
          <h2 className="font-nexa font-bold text-left text-3xl md:text-4xl text-brand-gold tracking-wide mb-6 w-full text-center md:text-left">
            About Me
          </h2>

          {/* Description Content */}
          <div className="font-montserrat font-light text-sm md:text-base text-brand-gold/80 space-y-6 leading-relaxed tracking-wide text-left">
            <p>
              I’m Jayakrishna an Unreal Engine Cinematic Artist with 3+ years of
              experience creating high-impact game trailers and cinematics.
            </p>

            <p>
              I specialize in scene composition, camera direction, and visual
              storytelling.
            </p>

            <p>
              From pre-visualization to final output, I handle the full
              cinematic pipeline, including lighting, VFX integration, editing,
              and sound design.
            </p>
          </div>
        </div>

        {/* Empty Column for Desktop Grid Alignment */}
        <div className="hidden md:block w-full h-full pointer-events-none" />
      </div>
    </section>
  );
};

export default About;