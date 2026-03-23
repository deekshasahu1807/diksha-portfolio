export default function Section({ id, children }) {
  return (
    <section id={id} className="px-6 md:px-16 py-20 max-w-7xl mx-auto">
        {children}
    </section>
  );
}