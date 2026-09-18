"use client"
import Link from 'next/link'
import { useState } from 'react'
import { companyInfo } from '../data/company'

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="bg-primary text-white sticky top-0 z-40 shadow-sm">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="text-xl font-bold">{companyInfo.name}</Link>

        <nav className="hidden md:flex gap-6 items-center">
          <Link href="/">Home</Link>
          <Link href="/scrap">Scrap Inventory</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <a className="bg-green-600 text-white px-3 py-2 rounded transition" href={`https://wa.me/${companyInfo.whatsapp}`} target="_blank" rel="noreferrer">WhatsApp Us</a>
        </nav>

        <div className="md:hidden flex items-center">
          <button aria-label="Open menu" onClick={() => setOpen((s) => !s)} className="mr-2 p-2 rounded hover:bg-slate-700">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h18M3 6h18M3 18h18"></path></svg>
          </button>
          <a className="bg-green-600 text-white px-3 py-2 rounded" href={`https://wa.me/${companyInfo.whatsapp}`} target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden bg-primary/95 transform origin-top transition-all duration-200 ${open ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'}`}>
        <div className="px-4 pb-4 pt-2 space-y-2">
          <Link href="/" onClick={() => setOpen(false)} className="block py-2">Home</Link>
          <Link href="/scrap" onClick={() => setOpen(false)} className="block py-2">Scrap Inventory</Link>
          <Link href="/about" onClick={() => setOpen(false)} className="block py-2">About</Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="block py-2">Contact</Link>
          <a className="inline-block bg-green-600 text-white px-3 py-2 rounded mt-2" href={`https://wa.me/${companyInfo.whatsapp}`} target="_blank" rel="noreferrer">WhatsApp Us</a>
        </div>
      </div>
    </header>
  )
}
