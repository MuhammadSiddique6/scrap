export default function CategoryFilter({ categories, value, onChange }: { categories: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <div className="flex gap-2 overflow-x-auto py-1">
      {categories.map((c) => (
        <button key={c} onClick={() => onChange(c)} className={`px-3 py-1 rounded whitespace-nowrap ${value === c ? 'bg-slate-800 text-white' : 'bg-slate-100 hover:bg-slate-200'}`}>
          {c}
        </button>
      ))}
    </div>
  )
}
