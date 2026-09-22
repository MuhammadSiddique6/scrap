import { Suspense } from 'react'
import { scrapItems } from '../../data/scrapItems'
import { companyInfo } from '../../data/company'
import ScrapListClient from '../../components/ScrapListClient'

export const metadata = {
  title: `Scrap Inventory | ${companyInfo.name}`,
  description: `Browse available scrap items and categories.`
}

export default function ScrapPage() {
  return (
    <Suspense fallback={<div className="container py-12">Loading inventory...</div>}>
      <ScrapListClient initialItems={scrapItems} />
    </Suspense>
  )
}
