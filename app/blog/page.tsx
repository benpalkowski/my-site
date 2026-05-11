import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="space-y-12">

      <section className="space-y-6">

        <h1 className="text-6xl font-bold tracking-tight">
          My Website
        </h1>

        <p className="text-xl text-gray-600 max-w-2xl">
          Thoughts, writing, projects, and updates.
        </p>

        <Link
          href="/blog"
          className="inline-block rounded-lg bg-black text-white px-6 py-3 text-lg"
        >
          Read the Blog
        </Link>

      </section>

      <section>
        <Image
          src="/images/photo.jpg"
          alt="Homepage image"
          width={1200}
          height={700}
          className="rounded-2xl w-full"
        />
      </section>

    </main>
  );
}