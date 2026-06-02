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

  const posts = files
  .map((fileName) => {
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
      date: data.date || "",
      time: data.time || "",
      excerpt: data.excerpt || "",
    };
  })
  .sort((a, b) =>
    new Date(b.date).getTime() -
    new Date(a.date).getTime()
  );

  return (
    <main className="space-y-6">

      <h1 className="text-5xl font-bold mb-8">
        Posts
      </h1>

      {posts.map((post) => (
        <Link
          key={post.slug}
          href={`/posts/${post.slug}`}
          className="block border rounded-2xl p-6 hover:bg-gray-50 transition"
        >

          <p className="text-sm text-gray-500 mb-2">
 {new Date(post.date + "T12:00:00").toLocaleDateString(
  "en-US",
  {
    year: "numeric",
    month: "long",
    day: "numeric",
  }
)}
  {" • "}
  {post.time}
          </p>

          <h2 className="text-3xl font-semibold mb-2">
            {post.title}
          </h2>


        </Link>
      ))}

    </main>
  );
}