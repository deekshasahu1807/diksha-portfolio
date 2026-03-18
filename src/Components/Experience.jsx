import { motion } from "framer-motion";
import { fadeUp, experienceData } from "./Data";
import { FaRegUser, FaCalendar } from "react-icons/fa";
import { HiOfficeBuilding } from "react-icons/hi";
import { CiLocationOn } from "react-icons/ci";



export default function Experience({ ref }) {
    return (
        <motion.section ref={ref}
            initial="hidden" whileInView="show" variants={fadeUp}
            className="p-10 max-w-4xl mx-auto"
        >
            <h2 className="text-3xl font-bold mb-10">Experience</h2>

            <div className="space-y-8 border-l border-white/20 pl-6 mt-8">
                {experienceData.map((item, index) => (
                    <div key={index} className="space-y-2 pb-4 border-b border-white/10 last:border-b-0">
                        {/* Company logo, name, location and duration in a row */}
                        <div className="flex flex-wrap justify-between items-center gap-4">

                            <div className="flex items-center gap-2">
                                <div className="bg-gray-200 p-1 rounded-full">
                                    <HiOfficeBuilding className="text-gray-800" />
                                </div>
                                <h3 className="font-semibold text-l text-white">
                                    <a href={item.companyUrl} target="_blank" rel="noreferrer" className="hover:text-blue-500">
                                        {item.company}
                                    </a>
                                </h3>
                                <div className="flex flex-row items-center">
                                    <CiLocationOn className="text-gray-400 mb-0.5" />
                                    <p className="text-gray-400">{item.location}</p>
                                </div>
                                
                            </div>

                            <div className="text-sm text-cyan-300 font-semibold flex items-center gap-2">
                                <FaRegUser className="text-cyan-300" />
                                {item.role}
                            </div>

                            <div className="flex items-center gap-2 text-right text-sm text-gray-400">
                                <FaCalendar className="text-cyan-300" />
                                {item.duration}
                            </div>

                        </div>
                        {/* Responsibilities */}
                        <ul className="list-disc list-inside pl-0 space-y-1 text-gray-200 text-left">
                            {item.responsibilities.map((resp, idx) => (
                                <li key={idx} className="text-gray-300 text-left">{resp}</li>
                            ))}
                        </ul>

                    </div>
                ))}
            </div>
        </motion.section>
    );
}