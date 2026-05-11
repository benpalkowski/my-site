import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

export default function PostsPage() {
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
    <main className="space-y-4">
      <h1 className="text-4xl font-bold mb-6">
        Posts
      </h1>

      {posts.map((post) => (
        <Link
          key={post.slug}
          href={`/posts/${post.slug}`}
          className="block border rounded-lg p-4 hover:bg-gray-50"
        >
          <h2 className="text-2xl font-semibold">
            {post.title}
          </h2>
        </Link>
      ))}
    </main>
  );
}