
import { notFound } from 'next/navigation';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import { marked } from 'marked';

interface PageProps {
  params: Promise<{ slug: string }>;
}

function parseMarkdown(fileContent: string) {
  const parts = fileContent.split('---');
  const frontmatterRaw = parts[1] || '';
  const body = parts.slice(2).join('---');

  const metadata: Record<string, string> = {};

  frontmatterRaw.split('\n').forEach((line) => {
    const [key, ...valueParts] = line.split(':');
    if (key && valueParts.length) {
      metadata[key.trim()] = valueParts.join(':').trim();
    }
  });

  return { metadata, body };
}

export async function generateStaticParams() {
  const contentDirectory = path.join(process.cwd(), 'content');
  if (!fs.existsSync(contentDirectory)) return [];

  const filenames = fs.readdirSync(contentDirectory);

  return filenames
    .filter((filename) => filename.endsWith('.md'))
    .map((filename) => ({
      slug: filename.replace('.md', ''),
    }));
}

export default async function StandalonePostPage({ params }: PageProps) {
  const { slug } = await params;

  const filePath = path.join(process.cwd(), 'content', `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { metadata, body } = parseMarkdown(fileContent);
  const htmlContent = await marked(body);

  return (
    <main
      style={{
        padding: '2rem',
        maxWidth: '600px',
        margin: '0 auto',
        fontFamily: 'sans-serif',
      }}
    >
      <Link
        href="/posts"
        style={{ color: '#888', textDecoration: 'none' }}
      >
        ← Back to Feed
      </Link>

      <article style={{ marginTop: '2rem' }}>
        <h1 style={{ marginBottom: '0.5rem' }}>
          {metadata.title || slug}
        </h1>

        <small
          style={{
            color: '#888',
            display: 'block',
            marginBottom: '1.5rem',
          }}
        >
          {metadata.date || 'No date provided'}
        </small>

        {/* Optional audio player */}
        {metadata.audio && (
          <section style={{ marginBottom: '2rem' }}>
            <h3>Listen to this post</h3>
            <audio
              controls
              preload="none"
              style={{ width: '100%' }}
              src={metadata.audio}
            >
              Your browser does not support audio playback.
            </audio>
          </section>
        )}

        {/* Article text */}
        <div
          dangerouslySetInnerHTML={{ __html: htmlContent }}
          style={{ lineHeight: '1.6', fontSize: '1.1rem' }}
        />

        {/* Optional Substack link */}
        {metadata.substack && (
          <div style={{ marginTop: '2rem' }}>
            <a
              href={metadata.substack}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#2563eb',
                textDecoration: 'none',
              }}
            >
              Listen to the podcast on Substack →
            </a>
          </div>
        )}
      </article>
    </main>
  );
}
