import Link from 'next/link';
import fs from 'fs';
import path from 'path';

function parseMetadata(fileContent: string) {
  const parts = fileContent.split('---');
  const frontmatterRaw = parts[1] || '';
  const metadata: Record<string, string> = {};
  
  frontmatterRaw.split('\n').forEach((line) => {
    const [key, ...valueParts] = line.split(':');
    if (key && valueParts.length) {
      metadata[key.trim()] = valueParts.join(':').trim();
    }
  });
  return metadata;
}

export default function PostsFeedPage() {
  const contentDirectory = path.join(process.cwd(), 'content');
  let posts: any[] = [];

  if (fs.existsSync(contentDirectory)) {
    const filenames = fs.readdirSync(contentDirectory);
    posts = filenames
      .filter((filename) => filename.endsWith('.md'))
      .map((filename) => {
        const slug = filename.replace('.md', '');
        const filePath = path.join(contentDirectory, filename);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const metadata = parseMetadata(fileContent);

        return {
          slug,
          title: metadata.title || slug,
          date: metadata.date || '',
          description: metadata.description || '',
        };
      });
  }

  return (
    <main style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <Link href="/" style={{ color: '#888', textDecoration: 'none' }}>← Back to Homepage</Link>
      <h1 style={{ marginTop: '1rem' }}>My Updates Feed</h1>
      <hr style={{ margin: '2rem 0' }} />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {posts.map((post) => (
          <article key={post.slug} style={{ borderBottom: '1px solid #eee', paddingBottom: '1rem' }}>
            <h2>
              <Link href={`/posts/${post.slug}`} style={{ color: '#0070f3', textDecoration: 'none' }}>
                {post.title}
              </Link>
            </h2>
            <small style={{ color: '#888' }}>{post.date}</small>
            <p style={{ color: '#555', marginTop: '0.5rem' }}>{post.description}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
