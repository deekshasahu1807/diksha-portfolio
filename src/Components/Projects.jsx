import { motion } from "framer-motion";
import { container, projectData } from "./Common/Data";
import Section from "./Common/Section";
import ProjectCard from "./Common/ProjectCard";

export default function Projects() {
    return (
        <Section id="work" className="relative overflow-hidden py-16">
            <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-violet-500/20 via-sky-500/10 to-indigo-500/20" />
            <div className="relative z-10 mx-auto w-full max-w-6xl">
                <div className="mb-10 rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-2xl backdrop-blur-xl md:p-8">
                    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Work</h2>
                            <p className="mt-2 text-sm text-slate-300 md:text-base">A selection of recent projects showcasing design, frontend, and full-stack development excellence.</p>
                        </div>
                        <a href="#" className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:border-sky-300 hover:bg-sky-500/20 hover:text-sky-200">
                            View all projects
                        </a>
                    </div>
                </div>

                <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {projectData.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.projectName}
                            firm={project.companyName}
                            desc={project.description}
                            tech={project.technologies}
                        />
                    ))}
                </motion.div>
            </div>
        </Section>
    );
}