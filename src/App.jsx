import { motion } from "framer-motion";

import Navbar from "./Components/Common/Navbar";

import Heading from "./Components/Heading";
import About from "./Components/About";
import KeyPoints from "./Components/KeyPoints";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

export default function Portfolio() {
  return (
    <div className="bg-slate-950 text-white font-sans selection:bg-blue-500/30">
      <Navbar />

      {/* HERO */}
      <Heading />

      <About />

      {/* VALUE */}
      <KeyPoints />

      {/* PROJECTS */}
      <Projects />

      {/* TECH STACK */}
      <Skills />

      {/* EXPERIENCE */}
      <Experience />

      {/* CONTACT */}
      <Contact />

      <footer className="text-center text-gray-500 text-sm pb-10">© {new Date().getFullYear()} Diksha Sahu</footer>
    </div>
  );
}
