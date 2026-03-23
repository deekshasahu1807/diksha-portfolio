import { motion } from "framer-motion";
import { item } from "./Data.jsx";

export default function ProjectCard({ title, firm, desc, tech }) {
  return (
        <motion.div
            variants={item}
            whileHover={{ y: -8 }}
            className="group rounded-2xl border border-white/5 bg-slate-900/70 overflow-hidden"
        >
            <div className="h-44 bg-linear-to-br from-slate-800 to-slate-700" />
            <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{title} - {firm}</h3>
                <p className="text-gray-400 text-sm mb-4">{desc}</p>
                <div className="flex flex-wrap gap-2 text-xs text-gray-300">
                    {tech.map((t, index) => (
                        <span key={index} className="px-3 py-1 rounded-full bg-white/5">{t}</span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}