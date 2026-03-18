import { motion } from "framer-motion";
import { fadeUp } from "./Data";

export default function Projects() {
    return (
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
    );
}