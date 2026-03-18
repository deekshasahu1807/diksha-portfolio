import { aboutData } from "./Data";

export default function About() {
    return (
        <section className="p-10 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">About</h2>
            <p className="text-gray-400">{aboutData}</p>
        </section>
    );
}