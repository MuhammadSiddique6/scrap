export default function CategoryFilter({ categories, value, onChange }: { categories: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <div className="flex gap-2 overflow-x-auto py-1 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-thin">
      {categories.map((c) => (
        <button
          key={c}
          onClick={() => onChange(c)}
          className={`px-3 py-2 rounded-full whitespace-nowrap text-sm transition ${
            value === c ? 'bg-slate-800 text-white shadow' : 'bg-white border border-slate-200 hover:bg-slate-100'
          }`}
        >
          {c}
        </button>
      ))}
    </div>
  )
}
