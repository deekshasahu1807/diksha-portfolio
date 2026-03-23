import { skillsData } from "./Common/Data";
import Section from "./Common/Section";

export default function Skills() {
    return (
        <Section id="stack" className="relative overflow-hidden py-16">
            <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-orange-500/20 via-amber-500/10 to-yellow-500/20" />
            <div className="relative z-10 mx-auto max-w-6xl rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-2xl backdrop-blur-xl md:p-12">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
                        <span className="bg-linear-to-r from-orange-300 via-amber-300 to-yellow-300 bg-clip-text text-transparent">Tech Stack</span>
                    </h2>
                    <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-300">
                        Technologies and tools I use to bring ideas to life, from frontend to backend and beyond.
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                    {skillsData.map((skill) => (
                        <div key={skill.name} className="group flex flex-row items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-gray-300 transition hover:-translate-y-1 hover:border-amber-300/70 hover:bg-amber-500/20 hover:text-white hover:shadow-lg">
                            {skill.icon}
                            <span className="ml-2">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}