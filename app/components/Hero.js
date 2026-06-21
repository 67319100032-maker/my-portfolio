import Image from "next/image";

export default function Hero() {
  return (
    <section className="text-center py-16">
      <h1 className="text-6xl font-black">My Portfolio</h1>
      <Image
        src="/ICe.jpg"
        alt="Avatar ของ Nutthaphol"
        width={150}
        height={150}
        className="mx-auto h-36 w-36 rounded-full object-cover"
        priority
      />
      <p className="mt-4 text-2xl font-semibold">ณัฐพล ม้ากาบแก้ว</p>
    </section>
  );
}