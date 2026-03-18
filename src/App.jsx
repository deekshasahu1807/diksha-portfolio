
import { useRef } from "react";

import Heading from "./Components/Heading";
import About from "./Components/About";
import KeyPoints from "./Components/KeyPoints";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

export default function App() {
  const contactRef = useRef(null);
  const experienceRef = useRef(null);
  
  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToExperience = () => {
    experienceRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="bg-black text-white font-sans">
      <Heading handleContactRef={scrollToContact} handleExperienceRef={scrollToExperience} />
      <About />
      <KeyPoints />
      <Skills />
      <Experience ref={experienceRef} />
      <Projects />
      <Contact ref={contactRef} />
    </div>
  );
}