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

  const title = `${item.name} in ${item.location} | ${companyInfo.name}`

  return (
    <div className="container py-12">
      <nav className="text-sm mb-4"><Link href="/scrap">&larr; Back to inventory</Link></nav>
      <h1 className="text-3xl font-bold">{item.name}</h1>
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <div className="w-full h-64 bg-slate-100 rounded overflow-hidden">
          <Image src={item.image} alt={item.name} width={1200} height={800} className="object-cover w-full h-full" />
        </div>
        <div>
          <p className="mb-2">{item.description}</p>
          <ul className="space-y-2">
            <li><strong>Category:</strong> {item.category}</li>
            <li><strong>Quantity:</strong> {item.quantity}</li>
            <li><strong>Condition:</strong> {item.condition}</li>
            <li><strong>Location:</strong> {item.location}</li>
          </ul>

          <div className="mt-6">
            <a className="inline-block bg-green-600 text-white px-4 py-2 rounded" href={`https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(`Hi, I am interested in ${item.name}. Please share the price, quantity and further details.`)}`} target="_blank" rel="noreferrer">Ask on WhatsApp</a>
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
