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

            <Link href="/blog">
              Blog
            </Link>

          </div>
        </nav>

        <main className="max-w-4xl mx-auto px-6 py-10">
          {children}
        </main>

      </body>
    </html>
  );
}