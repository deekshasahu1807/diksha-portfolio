import { motion } from "framer-motion";

export default function GradientOrb() {
  return (
        <motion.div
            aria-hidden
            className="pointer-events-none absolute right-10 top-20 w-72 h-72 md:w-md md:h-112 rounded-full blur-3xl bg-linear-to-r from-blue-500/40 via-purple-500/40 to-fuchsia-500/40"
            animate={{ y: [0, -25, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
    );
}