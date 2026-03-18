import { FaGithub, FaLinkedin } from "react-icons/fa";
import { contactData } from "./Data";

export default function Contact({ ref }) {
    return (
        <section ref={ref} className="p-10 text-center border-t border-white/10">
            <div className="flex justify-center gap-6 text-xl mb-4">
                <a href={contactData.github} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                <a href={contactData.linkedin} target="_blank" rel="noopener noreferrer" style={{color: '#0A66C2'}}><FaLinkedin /></a>
            </div>
            <p className="text-gray-400"><a href={`mailto:${contactData.email}`} target="_blank" rel="noopener noreferrer">{contactData.email}</a></p>
            <p className="text-gray-400"><a href={`tel:${contactData.mobile}`} target="_blank" rel="noopener noreferrer">{contactData.mobile}</a></p>
        </section>
    );
}