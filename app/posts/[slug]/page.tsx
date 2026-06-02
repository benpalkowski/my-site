import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

export async function generateStaticParams() {
  const postsDirectory = path.join(
    process.cwd(),
    "content/posts"
  );

  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => ({
    slug: fileName.replace(".md", ""),
  }));
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const filePath = path.join(
    process.cwd(),
    "content/posts",
    `${slug}.md`
  );

  const fileContents = fs.readFileSync(
    filePath,
    "utf8"
  );

  const { data, content } = matter(fileContents);

  const contentHtml = await marked(content);

  return (
    <article className="space-y-6">

      <div className="space-y-2">

        <h1 className="text-5xl font-bold">
          {data.title}
        </h1>

        <p className="text-gray-500">
          Benjamin Palkowski •{" "}
          {new Date(
            data.date + "T12:00:00"
          ).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
          {" • "}
  {data.time}
        </p>

      </div>

      <div
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{
          __html: contentHtml,
        }}
      />

    </article>
  );
}