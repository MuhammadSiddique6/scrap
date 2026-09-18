import { scrapItems } from '../../data/scrapItems'
import { companyInfo } from '../../data/company'
import ScrapListClient from '../../components/ScrapListClient'

export const metadata = {
  title: `Scrap Inventory | ${companyInfo.name}`,
  description: `Browse available scrap items and categories.`
}

export default function ScrapPage() {
  return <ScrapListClient initialItems={scrapItems} />
}
