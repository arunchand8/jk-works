import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import WorkflowSkills from "./components/WorkflowSkills";
import "./index.css";

function App() {
  return (
    <div className="bg-brand-dark text-brand-gold min-h-screen selection:bg-brand-gold selection:text-white">
      {/* Top Fixed Navbar */}
      <Navbar />

      {/* 
        గమనిక: ఇక్కడ 'md:ml-72' లాంటి మార్జిన్స్ అస్సలు ఉండకూడదు. 
        'w-full' పెట్టడం వల్ల కింద ఉన్న హీరో ఇమేజ్ స్క్రీన్ మొత్తం ఫుల్ విడ్త్ ఆక్యుపై చేస్తుంది.
      */}
      <main className="pt-20 min-h-screen w-full">
        <Hero />
        <About />
        <Projects />
        <WorkflowSkills />
        <Footer />
      </main>
    </div>
  );
}

export default App;