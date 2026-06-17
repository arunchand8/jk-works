import React from "react";

const ProjectCard = ({ title, category, image, tools }) => {
  return (
    <div className="group w-full block bg-neutral-950/30 border border-brand-gold/10 overflow-hidden cursor-pointer rounded-sm transform transition-all duration-500 ease-out hover:-translate-y-3 hover:border-brand-gold/30 hover:shadow-[0_15px_40px_rgba(198,172,143,0.08)]">
      <div className="w-full aspect-video overflow-hidden relative bg-neutral-900">
        <img
          src={image}
          alt={title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 brightness-[0.9] group-hover:brightness-100"
        />
        {/* Cinematic subtle gradient layout overlay inside the image */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-60" />
      </div>

      {/* 2. PROJECT DETAILED TEXT AREA */}
      <div className="p-6 text-left">
        {/* Category: Montserrat Light */}
        <span className="font-montserrat font-light text-[11px] tracking-widest text-brand-gold/50 block mb-2 uppercase">
          {category}
        </span>

        {/* Title: Nexa Bold */}
        <h3 className="font-nexa font-bold text-lg md:text-xl text-brand-gold group-hover:text-white transition-colors duration-300 tracking-wide mb-4 line-clamp-1">
          {title}
        </h3>

        {/* Engine Tools & Tech Badges */}
        <div className="flex flex-wrap gap-3 mt-2">
          {tools.map((tool, index) => (
            <span
              key={index}
              className="font-montserrat font-light text-[10px] tracking-widest text-brand-gold/30 border border-brand-gold/10 px-2 py-1 rounded-none bg-brand-dark/40"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;