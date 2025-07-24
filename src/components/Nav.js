import Link from 'next/link'
import { useRouter } from 'next/router'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const { pathname } = useRouter()

  return (
    <nav>
      {links.map(({ href, label }) => {
        const isActive = pathname === href
        return (
          <Link key={href} href={href} legacyBehavior>
            <a className={isActive ? 'active' : undefined}>
              {label}
            </a>
          </Link>
        )
      })}
    </nav>
  )
}
