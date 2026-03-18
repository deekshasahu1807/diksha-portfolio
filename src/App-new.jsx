import { motion } from "framer-motion";
import { useRef } from "react";

import Heading from "./Components/Heading";
import Contact from "./Components/Contact";

const fadeUp = {
  hidden: { opacity: 0, y: 80 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

export default function App() {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="bg-black text-white font-sans">

      {/* HERO */}
      <Heading handleRef={scrollToContact} />

      {/* TRUST / METRICS */}
      <motion.section 
        initial="hidden" whileInView="show" variants={fadeUp}
        className="p-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
      >
        {[
          ["9+", "Years Experience"],
          ["30%+", "Performance Boost"],
          ["10+", "Apps Delivered"],
          ["6+", "Team Led"]
        ].map(([num, label]) => (
          <div key={label}>
            <h3 className="text-3xl font-bold">{num}</h3>
            <p className="text-gray-400">{label}</p>
          </div>
        ))}
      </motion.section>

      {/* PROJECT CASE STUDY */}
      <section className="p-10 max-w-6xl mx-auto space-y-16">

        <motion.div initial="hidden" whileInView="show" variants={fadeUp}>
          <h2 className="text-3xl font-bold mb-4">Connect App</h2>
          <p className="text-gray-400 mb-4">
            Built a SaaS platform enabling local businesses to manage operations digitally.
          </p>

          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div className="bg-white/10 p-4 rounded-xl">
              <h4 className="font-semibold">Problem</h4>
              <p className="text-gray-400">Fragmented business operations</p>
            </div>

            <div className="bg-white/10 p-4 rounded-xl">
              <h4 className="font-semibold">Solution</h4>
              <p className="text-gray-400">Real-time dashboards & API integrations</p>
            </div>

            <div className="bg-white/10 p-4 rounded-xl">
              <h4 className="font-semibold">Impact</h4>
              <p className="text-gray-400">Improved engagement & performance</p>
            </div>
          </div>
        </motion.div>

      </section>

      {/* SKILLS */}
      <motion.section 
        initial="hidden" whileInView="show" variants={fadeUp}
        className="p-10 text-center"
      >
        <h2 className="text-3xl font-bold mb-8">Tech Stack</h2>

        <div className="flex flex-wrap justify-center gap-4">
          {[
            "React Native", "Node.js", "PHP", "MySQL",
            "AWS", "Firebase", "REST APIs", "Docker"
          ].map(skill => (
            <div key={skill} className="px-5 py-2 border border-white/20 rounded-full">
              {skill}
            </div>
          ))}
        </div>
      </motion.section>

      {/* EXPERIENCE TIMELINE */}
      <motion.section id="experience"
        initial="hidden" whileInView="show" variants={fadeUp}
        className="p-10 max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-6">Experience</h2>

        <div className="space-y-6 border-l border-white/20 pl-6">
          <div>
            <h3 className="font-semibold">SingleInterface</h3>
            <p className="text-gray-400">React Native Developer</p>
          </div>

          <div>
            <h3 className="font-semibold">Virtual Employee</h3>
            <p className="text-gray-400">Senior Software Engineer</p>
          </div>

          <div>
            <h3 className="font-semibold">Cedcoss</h3>
            <p className="text-gray-400">Senior Software Developer</p>
          </div>
        </div>
      </motion.section>

      {/* FOOTER */}
      <Contact ref={contactRef} />
    </div>
  );
}