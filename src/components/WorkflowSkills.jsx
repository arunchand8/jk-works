import React, { useState, useEffect, useRef } from "react";
import blenderImg from "../assets/icons/blender-icon.webp";
import unrealImg from "../assets/icons/unreal-icon.webp";
import aeImg from "../assets/icons/ae-icon.webp";
import nukeImg from "../assets/icons/nuke-icon.webp";
import prImg from "../assets/icons/pr-icon.webp";
import psImg from "../assets/icons/ps-icon.webp";

const WorkflowSkills = () => {
  const [isTopVisible, setIsTopVisible] = useState(false);
  const [isBottomVisible, setIsBottomVisible] = useState(false);

  const topOrbitRef = useRef(null);
  const bottomBoxRef = useRef(null);

  useEffect(() => {
    const topObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTopVisible(true);
          topObserver.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    const bottomObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsBottomVisible(true);
          bottomObserver.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (topOrbitRef.current) topObserver.observe(topOrbitRef.current);
    if (bottomBoxRef.current) bottomObserver.observe(bottomBoxRef.current);

    return () => {
      topObserver.disconnect();
      bottomObserver.disconnect();
    };
  }, []);

  const tools = [
    {
      id: "ue",
      img: unrealImg,
      alt: "Unreal Engine",
      glow: "shadow-[0_0_35px_rgba(255,255,255,0.35)] border-white/60 bg-black",
      x: 0,
      y: -160,
    },
    {
      id: "ae",
      img: aeImg,
      alt: "After Effects",
      glow: "shadow-[0_0_35px_rgba(147,90,255,0.35)] border-[#7643eb]/50 bg-[#140b24]",
      x: 140,
      y: -80,
    },
    {
      id: "pr",
      img: prImg,
      alt: "Premiere Pro",
      glow: "shadow-[0_0_35px_rgba(255,90,217,0.35)] border-[#db3b9d]/50 bg-[#240b1e]",
      x: 140,
      y: 80,
    },
    {
      id: "ps",
      img: psImg,
      alt: "Photoshop",
      glow: "shadow-[0_0_35px_rgba(43,156,255,0.35)] border-[#1e6fdb]/50 bg-[#0b1624]",
      x: 0,
      y: 160,
    },
    {
      id: "nuke",
      img: nukeImg,
      alt: "Nuke",
      glow: "shadow-[0_0_35px_rgba(241,184,17,0.35)] border-[#c49206]/50 bg-[#211904]",
      x: -140,
      y: 80,
    },
    {
      id: "blender",
      img: blenderImg,
      alt: "Blender",
      glow: "shadow-[0_0_35px_rgba(245,121,42,0.35)] border-[#cf5811]/50 bg-[#241105]",
      x: -140,
      y: -80,
    },
  ];

  const sequence = [
    {
      img: blenderImg,
      alt: "Blender",
      glow: "shadow-[0_0_15px_rgba(245,121,42,0.25)] border-[#cf5811]/30 bg-[#241105]",
    },
    {
      img: unrealImg,
      alt: "Unreal Engine",
      glow: "shadow-[0_0_15px_rgba(255,255,255,0.25)] border-white/30 bg-black",
    },
    {
      img: aeImg,
      alt: "After Effects",
      glow: "shadow-[0_0_15px_rgba(147,90,255,0.25)] border-[#7643eb]/30 bg-[#140b24]",
    },
    {
      img: nukeImg,
      alt: "Nuke",
      glow: "shadow-[0_0_15px_rgba(241,184,17,0.25)] border-[#c49206]/30 bg-[#211904]",
    },
    {
      img: prImg,
      alt: "Premiere Pro",
      glow: "shadow-[0_0_15px_rgba(255,90,217,0.25)] border-[#db3b9d]/30 bg-[#240b1e]",
    },
  ];

  return (
    <section
      id="workflow"
      className="w-full bg-brand-dark flex flex-col items-center justify-center overflow-hidden py-20 md:py-20 lg:py-28 relative"
    >
      {/* ORBIT STRUCTURE AREA */}
      <div
        ref={topOrbitRef}
        className={`relative w-full max-w-lg aspect-square flex items-center justify-center scale-95 md:scale-100 lg:scale-105 ${
          isTopVisible ? "active-orbit" : ""
        }`}
      >
        <div className="absolute text-center z-30 pointer-events-none select-none">
          <span className="font-montserrat font-bold text-xs tracking-wider text-white block mb-1 uppercase">
            My
          </span>
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-white tracking-wider uppercase">
            Workflow
          </h2>
          <p className="font-montserrat font-thin text-[10px] md:text-[13px] text-brand-gold tracking-wider mt-2">
            Tools i used to bring ideas to life
          </p>
        </div>

        <div className="absolute w-full h-full inset-0 flex items-center justify-center master-orbit-track">
          {tools.map((tool, index) => (
            <div
              key={tool.id}
              className="absolute flex items-center justify-center divide-execution-layer"
              style={{
                "--base-x": `${tool.x}px`,
                "--base-y": `${tool.y}px`,
                animationDelay: `${index * 150}ms`,
              }}
            >
              <div className="child-node-fix flex items-center justify-center">
                <div
                  className={`w-16 h-16 md:w-20 md:h-20 lg:w-16 lg:h-16 rounded-full border flex items-center justify-center p-3.5 lg:p-3 ${tool.glow} transition-transform duration-300 hover:scale-110 cursor-pointer`}
                >
                  <img
                    src={tool.img}
                    alt={tool.alt}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PIPELINE PANEL */}
      <div ref={bottomBoxRef} className="w-full max-w-5xl px-6 mt-8 z-20">
        <div className="w-full border border-brand-gold/10 rounded-xl p-6 md:p-8 bg-neutral-950/20 backdrop-blur-sm flex flex-col lg:flex-row items-center justify-center gap-y-10 lg:gap-x-12 overflow-hidden">
          <div
            className="text-center font-montserrat font-medium text-xs md:text-sm text-brand-gold leading-relaxed tracking-wider flex flex-col items-center justify-center select-none shrink-0 w-full lg:w-auto transition-all duration-600 ease-out"
            style={{
              opacity: isBottomVisible ? 1 : 0,
              transform: isBottomVisible ? "translateY(0)" : "translateY(20px)",
              transitionDelay: "0ms",
            }}
          >
            <span>Every project is unique.</span>
            <span>I use the right tools at</span>
            <span>the right time.</span>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-y-5 gap-x-3 md:gap-x-4 w-full lg:w-auto">
            {sequence.map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center gap-y-5 gap-x-3 md:gap-x-4"
                style={{
                  transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                  transitionDelay: `${(index + 1) * 180}ms`,
                  opacity: isBottomVisible ? 1 : 0,
                  transform: isBottomVisible
                    ? "translateY(0)"
                    : "translateY(20px)",
                }}
              >
                <div
                  className={`w-11 h-11 md:w-13 md:h-13 rounded-full border flex items-center justify-center p-2.5 ${item.glow} shrink-0`}
                >
                  <img
                    src={item.img}
                    alt={item.alt}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-brand-gold/80 text-xl md:text-2xl font-sans font-medium select-none md:block hidden">
                  →
                </span>
                <span className="text-brand-gold/80 text-xl font-sans font-medium select-none block md:hidden">
                  ↓
                </span>
              </div>
            ))}
            <div
              className="px-6 py-2.5 select-none shrink-0 transition-all duration-600 ease-out -mt-4 md:mt-0 md:-ml-4"
              style={{
                transitionDelay: `${(sequence.length + 1) * 180}ms`,
                opacity: isBottomVisible ? 1 : 0,
                transform: isBottomVisible
                  ? "translateY(0)"
                  : "translateY(20px)",
              }}
            >
              <h4 className="font-montserrat font-bold text-[10px] md:text-xs tracking-wider text-brand-gold uppercase leading-tight text-center">
                FINAL
                <br />
                OUTPUT
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSkills;