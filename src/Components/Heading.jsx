import { motion } from "framer-motion";
import { FaCloudDownloadAlt } from "react-icons/fa";

import GradientOrb from "./Common/GradientOrb";
import { container, item, headingData, resumeLink } from "./Common/Data";

import Section from "./Common/Section";

export default function Heading() {
    return (
        <Section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden py-16">
            <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-blue-500/20 via-indigo-500/10 to-purple-500/20" />
            <GradientOrb />
            <div className="relative z-10 mx-auto max-w-6xl rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-2xl backdrop-blur-xl md:p-12">
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    <motion.div variants={container} initial="hidden" animate="show">
                        <motion.h1 variants={item} className="text-4xl md:text-7xl font-bold leading-tight mb-4 text-white">
                            <span className="bg-linear-to-r from-blue-300 via-indigo-300 to-purple-300 bg-clip-text text-transparent">{headingData.name}</span>
                        </motion.h1>
                        <motion.h2 variants={item} className="text-xl md:text-3xl text-indigo-300 mb-6 font-semibold">
                            {headingData.title}
                        </motion.h2>
                        <motion.p variants={item} className="text-slate-300 max-w-xl mb-8 text-lg leading-relaxed">
                            {headingData.description}
                        </motion.p>
                        <motion.div variants={item} className="flex gap-4">
                            <a href="#work" className="px-8 py-4 rounded-xl bg-linear-to-r from-blue-500 to-indigo-500 hover:brightness-110 transition text-white font-semibold">View Work</a>
                            <a href={resumeLink} download className="flex flex-row items-center gap-2 px-8 py-4 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 hover:border-indigo-300/70 transition text-white"><FaCloudDownloadAlt /> Download Resume</a>
                        </motion.div>
                    </motion.div>
                    <div className="relative" />
                </div>
            </div>
        </Section>
    );
}