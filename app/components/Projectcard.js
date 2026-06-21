export default function ProjectCard({ title, tag, description, link }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-sm shadow-black/10">
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-slate-300 mb-2">{tag}</p>
      <p className="text-slate-400 mb-4">{description}</p>
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="inline-flex rounded-full bg-slate-800 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
        >
          ดูโปรเจกต์
        </a>
      ) : null}
    </div>
  );
}
