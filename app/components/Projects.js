import ProjectCard from "./Projectcard";
const projects = [
  { id: 1, title: "Quote Generator", tag: "คำคมบาดใจ", description: "สุ่มประโยคสร้างแรงบันดาลใจ", link: "https://www.canva.com/quote-generator/" },
  { id: 2, title: "BMI Calculator", tag: "สัดส่วนร่างกาย", description: "คำนวณดัชนีมวลกาย", link: "https://www.calculator.net/bmi-calculator.html" },
  { id: 3, title: "Todo List", tag: "ทำทุกวัน", description: "เว็บไซต์จัดการกิจวัตรประจำวัน", link: "https://www.freetodolist.com/" },
];

export default function Projects() {
  return (
    <section className="py-20 px-8">
      <h2 className="text-4xl font-bold mb-8">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            tag={project.tag}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
}
