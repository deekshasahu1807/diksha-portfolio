import { aboutData } from "./Common/Data";
import Section from "./Common/Section";

export default function About() {
    return (
        <Section id="about" className="relative overflow-hidden py-16">
            <div className="pointer-events-none absolute inset-0 " />
            <div className="relative z-10 mx-auto max-w-6xl rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-2xl backdrop-blur-xl md:p-12">
                <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
                        <span className="bg-linear-to-r from-slate-300 via-gray-300 to-zinc-300 bg-clip-text text-transparent">About Me</span>
                    </h2>
                </div>
                <p className="text-lg leading-relaxed text-slate-300">{aboutData}</p>
            </div>
        </Section>
    );
}