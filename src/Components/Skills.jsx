import { motion } from "framer-motion";
import { fadeUp, skillsData } from "./Data";

export default function Skills() {
    return (
        <motion.section 
            initial="hidden" whileInView="show" variants={fadeUp}
            className="p-10 text-center"
        >
            <h2 className="text-3xl font-bold mb-8">Tech Stack</h2>

            <div className="flex flex-wrap justify-center gap-4">
            {skillsData.map((skill) => (
                <div key={skill.name} className="flex flex-row items-center px-5 py-2 border border-white/20 rounded-full">
                {skill.icon}
                <span className="ml-2">{skill.name}</span>
                </div>
            ))}
            </div>
        </motion.section>
    );
}