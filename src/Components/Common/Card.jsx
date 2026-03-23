import { motion } from "framer-motion";
import { item } from "./Data.jsx";

export default function Card({ children }) {
  return (
        <motion.div
            variants={item}
            whileHover={{ y: -6 }}
            className="rounded-2xl border border-white/5 bg-slate-900/70 p-6 shadow-xl shadow-black/20"
        >
            {children}
        </motion.div>
    );
}