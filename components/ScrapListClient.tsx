"use client"
import { useEffect, useMemo, useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { ScrapItem } from '../data/scrapItems'
import ScrapGrid from './ScrapGrid'
import CategoryFilter from './CategoryFilter'

export default function ScrapListClient({ initialItems }: { initialItems: ScrapItem[] }) {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()
  const categoryFromUrl = searchParams.get('category') || 'All'
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState(categoryFromUrl)

  useEffect(() => {
    setCategory(categoryFromUrl)
  }, [categoryFromUrl])

  const categories = useMemo(() => {
    const set = new Set(initialItems.map((s) => s.category))
    return ['All', ...Array.from(set)]
  }, [initialItems])

  const filtered = useMemo(() => {
    return initialItems.filter((item) => {
      const matchesQuery = [item.name, item.description, item.location].join(' ').toLowerCase().includes(query.toLowerCase())
      const matchesCategory = category === 'All' || item.category === category
      return matchesQuery && matchesCategory
    })
  }, [query, category, initialItems])

  const handleCategory = (next: string) => {
    setCategory(next)
    const params = new URLSearchParams(searchParams.toString())
    if (next === 'All') params.delete('category')
    else params.set('category', next)
    const queryString = params.toString()
    router.replace(queryString ? `${pathname}?${queryString}` : pathname, { scroll: false })
  }

  return (
    <div className="container py-8 sm:py-12">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold">Scrap Inventory</h1>
          <p className="mt-1 text-slate-600">{filtered.length} item{filtered.length === 1 ? '' : 's'} available</p>
        </div>
        <input
          aria-label="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search scrap, location"
          className="w-full md:w-72 rounded-lg border border-slate-200 px-3 py-2.5 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
        />
      </div>

      <div className="mt-4 -mx-4 px-4 sm:mx-0 sm:px-0">
        <CategoryFilter categories={categories} value={category} onChange={handleCategory} />
      </div>

      <div className="mt-6">
        {filtered.length === 0 ? (
          <div className="card p-8 text-center text-slate-600">No results found. Try a different search or category.</div>
        ) : (
          <ScrapGrid items={filtered} />
        )}
      </div>
    </div>
  )
}
