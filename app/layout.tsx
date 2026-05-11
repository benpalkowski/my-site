import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

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
      <body>

        <nav className="border-b p-4">
          <div className="flex gap-6 text-lg font-medium">
            <Link href="/">
              Home
            </Link>

            <Link href="/blog">
              Blog
            </Link>

            <Link href="/about">
              About
            </Link>
          </div>
        </nav>

      <main className="max-w-4xl mx-auto">
  {children}
</main>

      </body>
    </html>
  );
}