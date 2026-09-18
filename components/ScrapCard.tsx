import Link from 'next/link'
import Image from 'next/image'
import { ScrapItem } from '../data/scrapItems'
import { companyInfo } from '../data/company'

export default function ScrapCard({ item }: { item: ScrapItem }) {
  return (
    <article className="border rounded-md overflow-hidden bg-white hover:shadow-lg transform hover:-translate-y-1 transition">
      <div className="w-full h-48 bg-slate-100 relative">
        <Image src={item.image} alt={item.name} fill className="object-cover" />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg">{item.name}</h3>
        <p className="text-sm text-slate-600">{item.category} • {item.location}</p>
        <p className="mt-2 text-sm text-slate-700">{item.description}</p>
        <div className="mt-4 flex gap-2">
          <a aria-label={`Ask about ${item.name} on WhatsApp`} className="px-3 py-2 rounded bg-green-600 text-white text-sm hover:bg-green-700 transition" href={`https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(`Hi, I am interested in ${item.name}. Please share the price, quantity and further details.`)}`} target="_blank" rel="noreferrer">Ask on WhatsApp</a>
          <Link href={`/scrap/${item.slug}`} className="px-3 py-2 rounded border text-sm hover:bg-slate-50 transition">View Details</Link>
        </div>
      </div>
    </article>
  )
}
