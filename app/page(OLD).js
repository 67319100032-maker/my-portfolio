import Image from "next/image";

export default function Home() {
  
  const name = "Nutthaphol Margabkaew";

  return (
    <main className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-950 via-blue-800 to-sky-600">
      <div className="w-full max-w-6xl mx-6 px-8">
        <div className="rounded-[2.5rem] border border-slate-400/20 bg-slate-900/70 px-16 py-10 shadow-2xl shadow-black/20 backdrop-blur-xl sm:px-20 sm:py-12">
          <div className="flex flex-col items-center text-center text-white">
            <div className="flex items-center justify-center w-44 h-44 mb-8 overflow-hidden rounded-full border-4 border-white/20 bg-white/10 shadow-lg backdrop-blur-md">
              <Image
                src="/ICe.jpg"
                alt="Avatar ของ Nutthaphol"
                width={176}
                height={176}
                className="h-full w-full rounded-full object-cover"
                priority
              />
            </div>
            <p className="text-lg opacity-90 mb-2">Portfolio</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 whitespace-nowrap overflow-hidden text-ellipsis">
              {name}
            </h1>
            <p className="text-xl leading-loose">Digital Business Technology · Thonburi Commercial College</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#projects"
                className="rounded-full bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-3 text-white shadow-lg shadow-sky-900/20 transition hover:from-sky-400 hover:to-blue-500"
              >
                ดู Projects
              </a>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-4">
              <a
                href="https://www.facebook.com/RyuZennx1"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-2xl bg-slate-800/80 px-4 py-3 text-sm text-white transition hover:bg-slate-700"
              >
                <Image src="/icons/facebook.svg" width={24} height={24} alt="Facebook" />
                Facebook
              </a>
              <a
                href="https://line.me/R/ti/p/@shinal3cat"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-2xl bg-slate-800/80 px-4 py-3 text-sm text-white transition hover:bg-slate-700"
              >
                <Image src="/icons/LINE.png" width={24} height={24} alt="Line" />
                Line
              </a>
              <div className="flex items-center justify-center gap-2 rounded-2xl bg-slate-800/80 px-4 py-3 text-sm text-white">
                <Image src="/icons/email.png" width={24} height={24} alt="Email" />
                67319100032
                @panitthon.ac.th
              </div>
              <div className="flex items-center justify-center gap-2 rounded-2xl bg-slate-800/80 px-4 py-3 text-sm text-white">
                <Image src="/icons/phone.png" width={24} height={24} alt="Phone" />
                094-946-9911
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

