import Image from 'next/image'
import Link from 'next/link'
import { scrapItems } from '../../../data/scrapItems'
import { companyInfo } from '../../../data/company'

export async function generateStaticParams() {
  return scrapItems.map((s) => ({ slug: s.slug }))
}

export default function ScrapDetail({ params }: { params: { slug: string } }) {
  const item = scrapItems.find((s) => s.slug === params.slug)
  if (!item) return <div className="container py-12">Item not found</div>

  return (
    <div className="container py-8 sm:py-12">
      <nav className="text-sm mb-4"><Link className="hover:text-green-700" href="/scrap">&larr; Back to inventory</Link></nav>
      <h1 className="text-2xl sm:text-3xl font-bold">{item.name}</h1>
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <div className="w-full h-56 sm:h-72 md:h-80 bg-slate-100 rounded-xl overflow-hidden relative">
          <Image src={item.image} alt={item.name} fill className="object-cover" />
        </div>
        <div>
          <p className="mb-4 text-slate-700">{item.description}</p>
          <ul className="space-y-2 rounded-xl bg-white border border-slate-100 p-4">
            <li><strong>Category:</strong> {item.category}</li>
            <li><strong>Condition:</strong> {item.condition}</li>
            <li><strong>Location:</strong> {item.location}</li>
          </ul>

          <div className="mt-6 flex flex-col sm:flex-row gap-2">
            <a className="btn-primary w-full sm:w-auto text-center" href={`https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(`Hi, I am interested in ${item.name}. Please share the price and further details.`)}`} target="_blank" rel="noreferrer">Ask on WhatsApp</a>
            <a className="btn-secondary w-full sm:w-auto text-center" href={`tel:${companyInfo.phone}`}>Call now</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const item = scrapItems.find((s) => s.slug === params.slug)
  if (!item) return {}
  return {
    title: `${item.name} in ${item.location} | ${companyInfo.name}`,
    description: item.description,
    openGraph: {
      title: item.name,
      description: item.description,
      images: [item.image]
    }
  }
}
