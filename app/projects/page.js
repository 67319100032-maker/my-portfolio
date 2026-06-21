import Link from "next/link";
import Projects from "../components/Projects";
export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="px-2 py-16">
        <div className="mb-10">
          <Link
            href="/"
            className="inline-block rounded-full border border-white/20 px-5 py-2 text-sm hover:bg-white/10"
          >
            กลับหน้าหลัก
          </Link>
        </div>
        <Projects />
      </div>
    </main>
  );
}
