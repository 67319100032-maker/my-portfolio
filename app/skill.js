const skills = ["JavaScript", "Next.js", "Tailwind", "Git", "React"];

export default function Skills() {
  return (
    <section className="py-20 px-8">
      <h2 className="text-4xl font-bold mb-8">ทักษะ</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span key={skill} className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}