import Link from 'next/link'
import { companyInfo } from '../data/company'
import { scrapItems } from '../data/scrapItems'

export default function Footer() {
  const categories = Array.from(new Set(scrapItems.map((s) => s.category))).slice(0, 6)
  return (
    <footer className="bg-slate-900 text-white mt-12">
      <div className="container py-10 sm:py-12 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold">{companyInfo.name}</h3>
          <p className="mt-2 text-slate-300 text-sm leading-relaxed">{companyInfo.description}</p>
        </div>
        <div>
          <h4 className="font-semibold">Categories</h4>
          <ul className="mt-2 space-y-2 text-slate-300">
            {categories.map((c) => (
              <li key={c}>
                <Link className="hover:text-white transition" href={`/scrap?category=${encodeURIComponent(c)}`}>
                  {c}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Contact</h4>
          <p className="mt-2 text-slate-300 text-sm">{companyInfo.address}</p>
          <p className="mt-2 text-slate-300 text-sm">
            <a className="hover:text-white" href={`tel:${companyInfo.phone}`}>{companyInfo.phone}</a>
          </p>
          <a className="btn-primary mt-4" href={`https://wa.me/${companyInfo.whatsapp}`} target="_blank" rel="noreferrer">
            WhatsApp Us
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 text-center py-4 text-sm text-slate-400">
        © {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
      </div>
    </footer>
  )
}
