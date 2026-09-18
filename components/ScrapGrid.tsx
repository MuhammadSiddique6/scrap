import ScrapCard from './ScrapCard'
import { ScrapItem } from '../data/scrapItems'

export default function ScrapGrid({ items }: { items: ScrapItem[] }) {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
      {items.map((item) => (
        <ScrapCard key={item.id} item={item} />
      ))}
    </div>
  )
}
