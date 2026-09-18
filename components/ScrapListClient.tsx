"use client"
import { useState, useMemo } from 'react'
import { ScrapItem } from '../data/scrapItems'
import ScrapGrid from './ScrapGrid'
import CategoryFilter from './CategoryFilter'

export default function ScrapListClient({ initialItems }: { initialItems: ScrapItem[] }) {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')

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

  return (
    <div className="container py-12">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1 className="text-3xl font-bold">Scrap Inventory</h1>
        <div className="flex gap-2">
          <input aria-label="Search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search scrap, location" className="border rounded px-3 py-2" />
        </div>
      </div>

      <div className="mt-4">
        <CategoryFilter categories={categories} value={category} onChange={setCategory} />
      </div>

      <div className="mt-6">
        {filtered.length === 0 ? (
          <div className="p-8 text-center">No results found. Try a different search or category.</div>
        ) : (
          <ScrapGrid items={filtered} />
        )}
      </div>
    </div>
  )
}
