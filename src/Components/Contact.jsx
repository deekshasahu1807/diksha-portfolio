import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";

import { contactData } from "./Common/Data";
import Section from "./Common/Section";

export default function Contact() {
    return (
        <Section id="contact" className="relative overflow-hidden py-16">
            <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-indigo-600/30 via-sky-500/15 to-violet-700/30 blur-3xl" />
            <div className="relative z-10 mx-auto max-w-6xl rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-2xl backdrop-blur-xl md:p-12">
                <div className="text-center">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
                        <span className="bg-linear-to-r from-sky-300 via-indigo-300 to-purple-300 bg-clip-text text-transparent">Let’s build something great</span>
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
                        I am open to freelance, contract, and full-time collaborations. Let’s talk about your next product, MVP or startup.
                    </p>
                </div>

                <div className="mt-10 grid gap-4 md:grid-cols-2">
                    <a href={`mailto:${contactData.email}`} className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-sky-300/70 hover:bg-sky-500/20">
                        <div className="flex items-center gap-3 text-sky-300">
                            <CiMail className="h-6 w-6" />
                            <span className="text-xl font-semibold">Email</span>
                        </div>
                        <p className="mt-2 text-slate-200">{contactData.email}</p>
                    </a>
                    <a href={`tel:${contactData.mobile}`} className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-green-300/70 hover:bg-emerald-500/20">
                        <div className="flex items-center gap-3 text-emerald-300">
                            <IoCallOutline className="h-6 w-6" />
                            <span className="text-xl font-semibold">Call</span>
                        </div>
                        <p className="mt-2 text-slate-200">{contactData.mobile}</p>
                    </a>
                </div>

                <div className="mt-8 flex justify-center gap-4">
                    <a href={contactData.github} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-lg text-white transition hover:bg-white/20 hover:text-sky-200">
                        <FaGithub />
                    </a>
                    <a href={contactData.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-lg text-white transition hover:bg-white/20 hover:text-blue-300">
                        <FaLinkedin />
                    </a>
                </div>

                {/* <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
                    <h3 className="text-lg font-semibold text-white">Quick message</h3>
                    <form className="mt-4 grid gap-3">
                        <input type="text" placeholder="Your name" className="w-full rounded-xl border border-white/20 bg-transparent px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-sky-300 focus:ring-2 focus:ring-sky-300/40" />
                        <input type="email" placeholder="Your email" className="w-full rounded-xl border border-white/20 bg-transparent px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-sky-300 focus:ring-2 focus:ring-sky-300/40" />
                        <textarea rows="4" placeholder="Your message" className="w-full rounded-xl border border-white/20 bg-transparent px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-sky-300 focus:ring-2 focus:ring-sky-300/40" />
                        <button type="submit" className="rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500 px-5 py-3 text-sm font-semibold text-white transition hover:brightness-110">Send message</button>
                    </form>
                </div> */}
            </div>
        </Section>
    );
}