import { motion } from "framer-motion";
import { fadeUp, keyPointsData } from "./Data";

export default function KeyPoints() {
    return (
        <motion.section 
            initial="hidden" whileInView="show" variants={fadeUp}
            className="p-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
            {keyPointsData.map(({num, label}) => (
            <div key={label}>
                <h3 className="text-3xl font-bold">{num}</h3>
                <p className="text-gray-400">{label}</p>
            </div>
            ))}
        </motion.section>
    );
}