import Link from "next/link";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <div className="px-8 pb-20 text-center">
        <Link
          href="/projects"
          className="inline-flex rounded-full bg-sky-600 px-6 py-3 text-white shadow-lg shadow-sky-900/20 transition hover:bg-sky-500"
        >
          ดู Projects เพิ่มเติม
        </Link>
      </div>
    </main>
  );
}
