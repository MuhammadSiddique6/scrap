"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { companyInfo } from '../data/company'

const links = [
  { href: '/', label: 'Home' },
  { href: '/scrap', label: 'Scrap Inventory' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header className="bg-primary/95 text-white sticky top-0 z-40 shadow-sm backdrop-blur">
      <div className="container flex items-center justify-between gap-3 py-3 sm:py-4">
        <Link href="/" className="min-w-0 font-bold leading-tight">
          <span className="block truncate text-base sm:hidden">{companyInfo.shortName}</span>
          <span className="hidden sm:block text-lg lg:text-xl">{companyInfo.name}</span>
        </Link>

        <nav className="hidden md:flex gap-6 items-center">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${pathname === link.href ? 'text-white after:!w-full' : ''}`}
            >
              {link.label}
            </Link>
          ))}
          <a
            className="btn-primary"
            href={`https://wa.me/${companyInfo.whatsapp}`}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp Us
          </a>
        </nav>

        <div className="md:hidden flex items-center gap-2">
          <button
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((s) => !s)}
            className="p-2 rounded-lg hover:bg-white/10 transition"
          >
            {open ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden bg-primary transition-all duration-300 ${
          open ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pb-4 pt-1 space-y-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`block rounded-lg px-3 py-3 ${
                pathname === link.href ? 'bg-white/10 font-semibold' : 'hover:bg-white/5'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            className="btn-primary mt-2 w-full"
            href={`https://wa.me/${companyInfo.whatsapp}`}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </header>
  )
}
