import type { Metadata } from "next";
import Link from "next/link";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ben Palkowski",
  description: "Estate planning, campaign finance and charitable giving",
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

<Link href="/contact">
  Contact
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
      Book a Consultation with Ben Palkowski
    </a>

    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "30px",
      }}
    >
      <a
        href="https://www.oldcolonylaw.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/images/old-colony-law-logo-ben-palkowkski.png"
          alt="Old Colony Law"
          width="120"
        />
      </a>
  <p
    style={{
      color: "#666",
      fontSize: ".9rem",
      margin: "0 20px",
    }}
  >
    © Ben Palkowski, {new Date().getFullYear()}
  </p>
      <a
        href="https://fiscalhighlands.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/images/fiscal-highlands-logo-ben-palkowksi.png"
          alt="Second Logo"
          width="120"
        />
      </a>
    </div>

  </div>
</footer>
</>
      </body>
    </html>
  );
}