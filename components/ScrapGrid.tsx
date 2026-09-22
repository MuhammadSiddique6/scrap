import ScrapCard from './ScrapCard'
import { ScrapItem } from '../data/scrapItems'

export default function ScrapGrid({ items }: { items: ScrapItem[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {items.map((item) => (
        <ScrapCard key={item.id} item={item} />
      ))}
    </div>
  )
}
