"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { companyInfo } from '../data/company'
import { scrapItems } from '../data/scrapItems'

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeItem = scrapItems[activeIndex]

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % scrapItems.length)
    }, 5000)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <section className="bg-gradient-to-b from-slate-800 to-primary text-white py-20">
      <div className="container grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold">Reliable Scrap Trading & Recycling Solutions</h1>
          <p className="mt-4 text-lg">{companyInfo.tagline}</p>
          <div className="mt-6 flex gap-3">
            <Link href="/scrap" className="bg-white text-slate-900 px-4 py-3 rounded shadow hover:scale-105 transform transition">View Scrap</Link>
            <a className="bg-green-600 text-white px-4 py-3 rounded shadow hover:scale-105 transform transition" href={`https://wa.me/${companyInfo.whatsapp}`} target="_blank" rel="noreferrer">Contact on WhatsApp</a>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg bg-slate-700 shadow-xl">
          <div className="relative h-72">
            <Image
              key={activeItem.id}
              src={activeItem.image}
              alt={activeItem.name}
              fill
              priority
              className="object-cover transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <p className="text-sm uppercase tracking-widest text-green-300">Featured inventory</p>
              <h2 className="mt-1 text-2xl font-bold">{activeItem.name}</h2>
              <p className="mt-1 text-sm text-slate-200">{activeItem.quantity} available · {activeItem.condition}</p>
            </div>
          </div>
          <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 justify-between px-3">
            <button
              type="button"
              aria-label="Previous featured item"
              onClick={() => setActiveIndex((activeIndex - 1 + scrapItems.length) % scrapItems.length)}
              className="rounded-full bg-white/90 px-3 py-2 text-xl text-slate-900 shadow transition hover:bg-white"
            >
              &#8592;
            </button>
            <button
              type="button"
              aria-label="Next featured item"
              onClick={() => setActiveIndex((activeIndex + 1) % scrapItems.length)}
              className="rounded-full bg-white/90 px-3 py-2 text-xl text-slate-900 shadow transition hover:bg-white"
            >
              &#8594;
            </button>
          </div>
          <div className="absolute bottom-4 right-5 flex gap-2" aria-label="Featured item slides">
            {scrapItems.map((item, index) => (
              <button
                key={item.id}
                type="button"
                aria-label={`Show ${item.name}`}
                aria-current={index === activeIndex}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all ${index === activeIndex ? 'w-7 bg-green-400' : 'w-2 bg-white/70'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
