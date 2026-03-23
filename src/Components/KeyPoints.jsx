import { motion } from "framer-motion";
import { keyPointsData, container } from "./Common/Data";
import Section from "./Common/Section";
import Card from "./Common/Card";

export default function KeyPoints() {
    return (
        <Section id="value" className="relative overflow-hidden py-16">
            <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-purple-500/20 via-pink-500/10 to-rose-500/20" />
            <div className="relative z-10 mx-auto max-w-6xl rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-2xl backdrop-blur-xl md:p-12">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
                        <span className="bg-linear-to-r from-purple-300 via-pink-300 to-rose-300 bg-clip-text text-transparent">Key Achievements</span>
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
                        Milestones and metrics that highlight my impact and expertise in the field.
                    </p>
                </div>
                <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {keyPointsData.map(({num, label}) => (
                        <Card key={label}>
                            <h3 className="text-4xl font-bold text-white">{num}</h3>
                            <p className="text-slate-300">{label}</p>
                        </Card>
                    ))}
                </motion.div>
            </div>
        </Section>
    );
}