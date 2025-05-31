import Link from 'next/link';

// Layout.js
export default function Layout({ children }) {
  return (
    <>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <main>{children}</main>
    </>
  );
}