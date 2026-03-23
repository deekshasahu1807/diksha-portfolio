import { headingData } from "./Data";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 backdrop-blur bg-slate-950/70 border-b border-white/5">
            <nav className="max-w-7xl mx-auto px-6 md:px-16 h-16 flex items-center justify-between">
                <a href="#home" className="font-semibold tracking-wide flex items-center gap-2">
                    <img src={headingData.profilePic} alt="Profile" className="w-10 h-10 rounded-full ring-2 ring-cyan-400 shadow-lg object-cover" />
                    {/* <span className="hidden sm:inline text-white">Diksha</span> */}
                </a>
                <div className="hidden md:flex items-center gap-6 text-sm text-gray-300">
                    <a href="#work" className="hover:text-white">Work</a>
                    <a href="#stack" className="hover:text-white">Stack</a>
                    <a href="#experience" className="hover:text-white">Experience</a>
                    <a href="#contact" className="hover:text-white">Contact</a>
                </div>
                <a href="#contact" className="px-4 py-2 rounded-xl bg-white text-slate-900 text-sm font-medium">Hire Me</a>
            </nav>
        </header>
    );
}