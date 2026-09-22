import Link from 'next/link'
import Image from 'next/image'
import { ScrapItem } from '../data/scrapItems'
import { companyInfo } from '../data/company'

export default function ScrapCard({ item }: { item: ScrapItem }) {
  return (
    <article className="group overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-slate-100">
        <Image src={item.image} alt={item.name} fill className="object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg">{item.name}</h3>
        <p className="text-sm text-slate-600">{item.category} • {item.location}</p>
        <p className="mt-2 text-sm text-slate-700 line-clamp-2">{item.description}</p>
        <div className="mt-4 flex flex-col sm:flex-row gap-2">
          <a
            aria-label={`Ask about ${item.name} on WhatsApp`}
            className="btn-primary text-center text-sm"
            href={`https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(`Hi, I am interested in ${item.name}. Please share the price and further details.`)}`}
            target="_blank"
            rel="noreferrer"
          >
            Ask on WhatsApp
          </a>
          <Link href={`/scrap/${item.slug}`} className="btn-secondary text-center text-sm">
            View Details
          </Link>
        </div>
      </div>
    </article>
  )
}
