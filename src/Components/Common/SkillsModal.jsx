import { motion } from "framer-motion";
import {
  Code,
  Server,
  Smartphone,
  Database,
  Cloud,
  Settings,
  Layers,
  Zap,
  Brain,
  ShoppingCart,
  Bell
} from "lucide-react";
import { skillCategories } from "./Data";

const categoryIcons = {
  "Frontend Engineering": Code,
  "Backend Engineering": Server,
  "Mobile Development": Smartphone,
  "Databases": Database,
  "Cloud & DevOps": Cloud,
  "Tools & Collaboration": Settings,
  "State Management": Layers,
  "API & Integration": Zap,
  "AI & Developer Productivity": Brain,
  "CMS & eCommerce": ShoppingCart,
  "Capabilities": Bell
};

const getLevelStyles = (level) => {
  switch (level) {
    case "Expert":
      return "bg-green-500/20 text-green-400 border-green-500/30";
    case "Advanced":
      return "bg-blue-500/20 text-blue-400 border-blue-500/30";
    case "Intermediate":
      return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
    default:
      return "bg-gray-500/20 text-gray-300 border-gray-500/30";
  }
};

export default function SkillsSection() {
    return (
        <div className="max-h-[60vh] overflow-y-auto pr-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
                {skillCategories.map((category, idx) => {
                    const Icon = categoryIcons[category.title] || Code;

                    return (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                        >
                            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-lg hover:shadow-2xl transition-all duration-300 p-5">
                                <div className="flex items-center gap-3 mb-4">
                                    <Icon className="w-6 h-6 text-white" />
                                    <h2 className="text-lg font-semibold text-white">
                                        {category.title}
                                    </h2>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {category.items.map((skill, i) => (
                                        <motion.div
                                            key={i}
                                            whileHover={{ scale: 1.08 }}
                                            className="relative group cursor-pointer"
                                        >
                                            <div
                                                className={`px-3 py-1 text-sm rounded-full border ${getLevelStyles(
                                                    skill.level
                                                )}`}
                                            >
                                                {skill.name}
                                            </div>

                                            {/* Tooltip */}
                                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block">
                                                <div className="bg-black text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap">
                                                    {skill.level}
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
