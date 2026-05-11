import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

export default function BlogPage() {
  const postsDirectory = path.join(
    process.cwd(),
    "content/posts"
  );

  const files = fs.readdirSync(postsDirectory);

  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");

    const filePath = path.join(
      postsDirectory,
      fileName
    );

    const fileContents = fs.readFileSync(
      filePath,
      "utf8"
    );

    const { data } = matter(fileContents);

    return {
      slug,
      title: data.title || slug,
    };
  });

  return (
    <main className="min-h-screen p-10">
      <h1 className="text-4xl font-bold mb-6">
        Blog
      </h1>

      <div className="space-y-4">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block border p-4 rounded hover:bg-gray-100"
          >
            <h2 className="text-2xl font-semibold">
              {post.title}
            </h2>
          </Link>
        ))}
      </div>
    </main>
  );
}