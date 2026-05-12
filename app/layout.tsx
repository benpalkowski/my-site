import type { Metadata } from "next";
import Link from "next/link";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Website",
  description: "My blog website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geist.className}>

        <nav className="border-b px-6 py-4">
          <div className="max-w-4xl mx-auto flex gap-6 text-lg font-medium">

            <Link href="/">
              Home
            </Link>

            <Link href="/posts">
  Posts
</Link>

          </div>
        </nav>

        <>
  <main className="max-w-4xl mx-auto px-6 py-10">
    {children}
  </main>

  <footer className="border-t mt-20">
    <div className="max-w-4xl mx-auto px-6 py-10 text-center space-y-4">

      <p className="text-gray-600">
        Interested in working together?
      </p>

      <a
        href="https://go.oncehub.com/benpalkowski"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block rounded-lg bg-black text-white px-6 py-3 hover:opacity-90 transition"
      >
        Book a Consultation
      </a>

    </div>
  </footer>
</>

      </body>
    </html>
  );
}