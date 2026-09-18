import Link from 'next/link'
import { companyInfo } from '../data/company'
import { scrapItems } from '../data/scrapItems'

export default function Footer() {
  const categories = Array.from(new Set(scrapItems.map((s) => s.category))).slice(0, 6)
  return (
    <footer className="bg-slate-900 text-white mt-12">
      <div className="container py-12 grid md:grid-cols-3 gap-6">
        <div>
          <h3 className="font-bold">{companyInfo.name}</h3>
          <p className="mt-2">{companyInfo.description}</p>
        </div>
        <div>
          <h4 className="font-semibold">Categories</h4>
          <ul className="mt-2">
            {categories.map((c) => (
              <li key={c}><Link href={`/scrap?category=${encodeURIComponent(c)}`}>{c}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Contact</h4>
          <p className="mt-2">Address: {companyInfo.address}</p>
          <p className="mt-2">Phone: {companyInfo.phone}</p>
        </div>
      </div>
      <div className="text-center py-4 text-sm">© {new Date().getFullYear()} {companyInfo.name}. All rights reserved.</div>
    </footer>
  )
}
