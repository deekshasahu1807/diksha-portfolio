import { motion } from "framer-motion";
import { fadeUp, headingData } from "./Data";

export default function Heading({ handleContactRef, handleExperienceRef }) {
    return (
        <section className="h-screen flex flex-col justify-center items-center text-center px-4">
            <motion.h1 initial="hidden" animate="show" variants={fadeUp} className="text-5xl md:text-7xl font-bold leading-tight">
                {headingData.h1} <span className="text-gray-400">{headingData.h1HighlightedText}</span>
            </motion.h1>

            <motion.p initial="hidden" animate="show" variants={fadeUp} className="mt-6 text-lg text-gray-400 max-w-2xl">
                {headingData.description}
            </motion.p>

            <motion.div initial="hidden" animate="show" variants={fadeUp} className="flex gap-6 mt-6">
                <a href="#" onClick={handleExperienceRef} className="px-6 py-3 bg-white text-black rounded-full">View Work</a>
                <a href="#" onClick={handleContactRef} className="px-6 py-3 border border-white rounded-full">Contact Me</a>
            </motion.div>
        </section>
    );
}