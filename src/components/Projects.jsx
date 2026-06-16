// import React from "react";
// import ProjectCard from "./ProjectCard";

// // మీ 4 ప్రాజెక్ట్ థంబ్‌నైల్స్ ఇమేజెస్
// import proj1 from "../assets/images/project1.webp";
// import proj2 from "../assets/images/project2.webp";
// import proj3 from "../assets/images/project3.webp";
// import proj4 from "../assets/images/project4.webp";

// const Projects = () => {
//   const projectList = [
//     {
//       id: 1,
//       title: "THE LAST STAND - CINEMATIC TRAILER",
//       category: "Unreal Engine 5 // Lighting",
//       image: proj1,
//       tools: ["UE5", "Lumen", "Sequencer"],
//     },
//     {
//       id: 2,
//       title: "CYBERPUNK ALLEYWAY RENDERS",
//       category: "Scene Composition // Environment",
//       image: proj2,
//       tools: ["UE5", "Megascans", "Nuke"],
//     },
//     {
//       id: 3,
//       title: "DESERT STORM - SHORT SEQUENCE",
//       category: "Camera Direction // FX",
//       image: proj3,
//       tools: ["UE5.4", "Niagara", "Anamorphic"],
//     },
//     {
//       id: 4,
//       title: "MYSTICAL FOREST RELIGHTING",
//       category: "Atmospheric Lighting // Mood",
//       image: proj4,
//       tools: ["UE5", "Volumetric", "Ray Tracking"],
//     },
//   ];

//   return (
//     <section
//       id="projects"
//       className="min-h-screen w-full bg-brand-dark py-24 px-6 md:px-12 lg:px-16 border-b border-brand-gold/5"
//     >
//       <div className="max-w-[90rem] mx-auto w-full text-left">
//         {/* Top Headers */}
//         <h2 className="font-nexa font-bold text-3xl md:text-4xl text-brand-gold tracking-wide mb-16">
//           Projects
//         </h2>

//         {/* 
//           --- SINGLE ROW GRID CONFIGURATION FOR LARGE SCREENS ---
//           Mobile: grid-cols-1 (ఒకదాని కింద ఒకటి)
//           Tablet: md:grid-cols-2 (పక్కపక్కన రెండు)
//           Large Screens: lg:grid-cols-4 (ఒకే వరుసలో నాలుగు)
//         */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
//           {projectList.map((project) => (
//             <ProjectCard
//               key={project.id}
//               title={project.title}
//               category={project.category}
//               image={project.image}
//               tools={project.tools}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;



import React from "react";
import ProjectCard from "./ProjectCard";

// మీ 4 ప్రాజెక్ట్ థంబ్‌నైల్స్ ఇమేజెస్
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
      className="w-full bg-brand-dark py-24 md:py-32 lg:py-40 px-6 md:px-12 lg:px-16 border-b border-brand-gold/5"
    >
      <div className="max-w-[90rem] mx-auto w-full text-left">
        {/* Top Headers */}
        <h2 className="font-nexa font-bold text-3xl md:text-4xl text-brand-gold tracking-wide mb-16">
          Projects
        </h2>

        {/* 
          --- SINGLE ROW GRID CONFIGURATION FOR LARGE SCREENS ---
          Mobile: grid-cols-1 (ఒకదాని కింద ఒకటి)
          Tablet: md:grid-cols-2 (పక్కపక్కన రెండు)
          Large Screens: lg:grid-cols-4 (ఒకే వరుసలో నాలుగు)
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
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
      </div>
    </section>
  );
};

export default Projects;