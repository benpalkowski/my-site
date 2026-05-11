import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen p-10">

      <h1 className="text-5xl font-bold mb-6">
        My Website
      </h1>

      <Image
        src="/images/photo.jpg"
        alt="Website photo"
        width={800}
        height={500}
        className="rounded-lg mb-6"
      />

      <p className="text-lg">
        Welcome to my new website.
      </p>

    </main>
  );
}