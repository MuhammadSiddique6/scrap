"use client"

import { useState } from 'react'
import { companyInfo } from '../data/company'

const materials = [
  { name: 'Copper Scrap', detail: 'High-grade wire, pipe, and mixed copper lots.' },
  { name: 'Aluminum Scrap', detail: 'Sheets, profiles, and mixed aluminum offcuts.' },
  { name: 'Iron & Steel Scrap', detail: 'Industrial ferrous scrap for recycling.' },
  { name: 'AC & Electrical Scrap', detail: 'AC units, compressors, and electrical waste.' },
  { name: 'Machinery Scrap', detail: 'Plant equipment and machinery dismantling.' },
  { name: 'Batteries & Computers', detail: 'Used batteries and IT hardware scrap.' },
]

export default function AboutContent() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="container py-8 sm:py-12">
      <h1 className="text-2xl sm:text-3xl font-bold">About {companyInfo.name}</h1>
      <p className="mt-4 max-w-3xl text-slate-700">{companyInfo.about}</p>

      <section className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          ['Sharjah', 'Yard location'],
          ['24/7', 'Service hours'],
          ['Fair', 'Cash rates'],
          ['Fast', 'Pickup logistics'],
        ].map(([value, label]) => (
          <div key={label} className="card text-center hover:shadow-md transition">
            <div className="text-xl sm:text-2xl font-bold text-green-700">{value}</div>
            <div className="text-sm text-slate-600">{label}</div>
          </div>
        ))}
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Materials We Trade</h2>
        <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {materials.map((item, index) => (
            <button
              key={item.name}
              type="button"
              onClick={() => setOpen(open === index ? null : index)}
              className="card text-left hover:-translate-y-0.5 hover:shadow-lg transition"
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-semibold">{item.name}</h3>
                <span className="text-slate-400">{open === index ? '−' : '+'}</span>
              </div>
              {open === index && <p className="mt-2 text-sm text-slate-600">{item.detail}</p>}
            </button>
          ))}
        </div>
      </section>
    </div>
  )
}
