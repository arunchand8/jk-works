import React from "react";
import ProjectCard from "./ProjectCard";
import proj1 from "../assets/images/project1.webp";
import proj2 from "../assets/images/project2.webp";
import proj3 from "../assets/images/project3.webp";
import proj4 from "../assets/images/project4.webp";

const Projects = () => {
  const projectList = [
    {
      id: 1,
      title: "THE LAST STAND - CINEMATIC TRAILER",
      category: "Unreal Engine 5 // Lighting",
      image: proj1,
      tools: ["UE5", "Lumen", "Sequencer"],
    },
    {
      id: 2,
      title: "CYBERPUNK ALLEYWAY RENDERS",
      category: "Scene Composition // Environment",
      image: proj2,
      tools: ["UE5", "Megascans", "Nuke"],
    },
    {
      id: 3,
      title: "DESERT STORM - SHORT SEQUENCE",
      category: "Camera Direction // FX",
      image: proj3,
      tools: ["UE5.4", "Niagara", "Anamorphic"],
    },
    {
      id: 4,
      title: "MYSTICAL FOREST RELIGHTING",
      category: "Atmospheric Lighting // Mood",
      image: proj4,
      tools: ["UE5", "Volumetric", "Ray Tracking"],
    },
  ];

  return (
    <section
      id="projects"
      className="w-full bg-brand-dark py-20 md:py-24 lg:py-32 border-b border-brand-gold/5"
    >
      <div className="w-full px-6 md:px-12 lg:px-12 text-left mb-12">
        <h2 className="font-nexa font-bold text-3xl md:text-4xl text-brand-gold tracking-wide">
          Projects
        </h2>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 md:px-12 lg:px-12">
        {projectList.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            category={project.category}
            image={project.image}
            tools={project.tools}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;