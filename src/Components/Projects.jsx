import { motion } from "framer-motion";
import { fadeUp, projectData } from "./Data";
import { FaCalendar } from "react-icons/fa";

export default function Projects() {
    return (
        <section className="p-10 max-w-4xl mx-auto space-y-16">
            <motion.div initial="hidden" whileInView="show" variants={fadeUp}>
            <h2 className="text-3xl font-bold mb-4">Project(s)</h2>

            <div className="space-y-8 border-l border-white/20 pl-6 mt-8">
                {projectData.map((project, index) => (
                    <div key={index} className="space-y-2 pb-4 border-b border-white/10 last:border-b-0">
                        <div className="flex flex-wrap justify-between items-center gap-4">

                            <div className="flex flex-row items-center gap-1">
                                <h3 className="text-xl font-semibold mb-2">
                                    {project.projectName}
                                </h3>  -  <p className="text-gray-400 mb-3">{project.companyName}</p>
                            </div>
                            <div className="flex items-center gap-2 text-right text-sm text-gray-400">
                                <FaCalendar className="text-cyan-300" />
                                {project.duration}
                            </div>
                        </div>
                        <p className="text-gray-400 text-left mb-2">{project.description}</p>
                    </div>
                ))}
            </div>

            </motion.div>

        </section>
    );
}