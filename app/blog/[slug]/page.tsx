import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function PostPage({ params }: Props) {
  const { slug } = await params;

  const filePath = path.join(
    process.cwd(),
    "content/posts",
    `${slug}.md`
  );

  if (!fs.existsSync(filePath)) {
    return (
      <main className="p-10">
        <h1 className="text-3xl font-bold">
          Post Not Found
        </h1>
      </main>
    );
  }

  const fileContents = fs.readFileSync(filePath, "utf8");

  const { data, content } = matter(fileContents);

  const htmlContent = marked(content);

  return (
    <main className="min-h-screen p-10">
      <h1 className="text-4xl font-bold mb-6">
        {data.title}
      </h1>

      <article
       className="prose prose-lg"
        dangerouslySetInnerHTML={{
          __html: htmlContent,
        }}
      />
    </main>
  );
}