import { experienceData } from "./Common/Data";
import { HiOfficeBuilding } from "react-icons/hi";
import Section from "./Common/Section";
import Card from "./Common/Card";

export default function Experience() {
    return (
        <Section id="experience" className="relative overflow-hidden py-16">
            <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-emerald-500/20 via-teal-500/10 to-cyan-500/20" />
            <div className="relative z-10 mx-auto max-w-6xl rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-2xl backdrop-blur-xl md:p-12">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
                        <span className="bg-linear-to-r from-teal-300 via-emerald-300 to-cyan-300 bg-clip-text text-transparent">Professional Experience</span>
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
                        A journey through roles that shaped my expertise in development, design, and leadership.
                    </p>
                </div>
                <div className="space-y-6">
                    {experienceData.map((item, index) => (
                        <Card key={index}>
                            {/* Company logo, name, location and duration in a row */}
                            <div className="flex flex-wrap justify-between items-center gap-4">

                                <div className="flex flex-row items-center gap-2">
                                    <div className="flex flex-row items-center gap-2">
                                        <HiOfficeBuilding className="text-gray-800 bg-gray-200 p-1 rounded-full" />
                                        <h3 className="font-semibold text-l text-white">
                                            <a href={item.companyUrl} target="_blank" rel="noreferrer" className="hover:text-teal-400 transition">
                                                {item.company}
                                            </a>
                                        </h3>
                                    </div>
                                    -
                                    <p className="text-sm text-gray-400 font-semibold ">{item.role}</p>
                                </div>

                                <div className="flex flex-col items-center gap-2 text-right text-sm text-gray-400">
                                    <p>{item.duration}</p>
                                    <p>{item.location}</p>
                                </div>

                            </div>
                             <ul className="list-disc list-inside ml-5 mt-5 pl-0 space-y-1 text-sm text-gray-400 text-left">
                                 {item.responsibilities.map((resp, idx) => (
                                    <li key={idx} className="text-gray-300 text-left">{resp}</li>
                                ))}
                            </ul>
                        </Card>
                    ))}
                </div>
            </div>
        </Section>
    );
}