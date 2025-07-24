import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Layout({ children }) {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <>
      <nav>
        <Link href="/" legacyBehavior>
          <a className={currentPath === '/' ? 'active' : ''}>Home</a>
        </Link>
        <Link href="/about" legacyBehavior>
          <a className={currentPath === '/about' ? 'active' : ''}>About</a>
        </Link>
        <Link href="/portfolio" legacyBehavior>
          <a className={currentPath === '/portfolio' ? 'active' : ''}>Portfolio</a>
        </Link>
        <Link href="/blog" legacyBehavior>
          <a className={currentPath === '/blog' ? 'active' : ''}>Blog</a>
        </Link>
        <Link href="/contact" legacyBehavior>
          <a className={currentPath === '/contact' ? 'active' : ''}>Contact</a>
        </Link>
      </nav>
      <main>{children}</main>
    </>
  );
}
