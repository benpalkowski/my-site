import Image from "next/image";

export default function HomePage() {
  return (
    <main className="space-y-20">

      <section className="space-y-6 pt-10">

        <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
          Personal Website
        </p>

        <h1 className="text-6xl font-bold tracking-tight max-w-3xl">
          Thoughts, writing, and projects.
        </h1>

        <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
          A collection of posts, ideas, updates, and work
          built with Next.js and Markdown.
        </p>

      </section>

      <section>
        <Image
          src="/images/photo.jpg"
          alt="Homepage image"
          width={1400}
          height={800}
          className="rounded-3xl w-full"
        />
      </section>

      <section className="space-y-6 pb-20">

        <h2 className="text-3xl font-bold">
          Latest Posts
        </h2>

        <div className="space-y-4">

          <a
            href="/posts/first-post"
            className="block border rounded-2xl p-6 hover:bg-gray-50 transition"
          >
            <h3 className="text-2xl font-semibold mb-2">
              First Post
            </h3>

            <p className="text-gray-600">
              My first post built with Next.js and Markdown.
            </p>
          </a>

          <a
            href="/posts/second-post"
            className="block border rounded-2xl p-6 hover:bg-gray-50 transition"
          >
            <h3 className="text-2xl font-semibold mb-2">
              Second Post
            </h3>

            <p className="text-gray-600">
              Notes and thoughts from building the site.
            </p>
          </a>

        </div>

      </section>

    </main>
  );
}