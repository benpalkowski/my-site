import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';

// 1. Tell Next.js to look at the posts folder
const postsDirectory = path.join(process.cwd(), 'posts');

export default async function PostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const filePath = path.join(postsDirectory, `${slug}.md`);

  // 2. If the file doesn't exist, throw a 404
  if (!fs.existsSync(filePath)) {
    notFound();
  }

  // 3. Read the Markdown file content
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  return (
    <main style={{ maxWidth: '600px', margin: '40px auto', padding: '0 20px', fontFamily: 'sans-serif' }}>
      <p style={{ color: '#666', fontSize: '0.9rem' }}>{data.date}</p>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>{data.title}</h1>
      <hr style={{ border: '0', borderTop: '1px solid #eee', marginBottom: '30px' }} />
      
      {/* 4. Render the Markdown text as clean HTML */}
      <article style={{ lineHeight: '1.6', fontSize: '1.1rem' }}>
        <MDXRemote source={content} />
      </article>
    </main>
  );
}
// This tells Next.js exactly what slugs exist so it can pre-build the HTML pages
export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  
  return fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => ({
      slug: fileName.replace(/\.md$/, ''),
    }));
}
