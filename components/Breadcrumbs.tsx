import Link from 'next/link'

export default function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav className="text-sm text-slate-600" aria-label="Breadcrumb">
      {items.map((it, idx) => (
        <span key={idx}>
          {it.href ? <Link href={it.href}>{it.label}</Link> : <span>{it.label}</span>}
          {idx < items.length - 1 && ' / '}
        </span>
      ))}
    </nav>
  )
}
