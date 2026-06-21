const skills = ["Editor", "JavaScript", "Coding", "Go Home", "Let me cook"];

export default function Skills() {
  return (
    <section className="py-1 px-8">
      <h2 className="text-3xl font-bold mb-2">ทักษะของฉัน</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
    </section>
  );
}
