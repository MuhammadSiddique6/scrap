"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { companyInfo } from '../data/company'
import { scrapItems } from '../data/scrapItems'

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const activeItem = scrapItems[activeIndex]

  useEffect(() => {
    if (paused) return
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % scrapItems.length)
    }, 5000)

    return () => window.clearInterval(timer)
  }, [paused])

  return (
    <section className="bg-gradient-to-b from-slate-800 to-primary text-white py-12 sm:py-16 md:py-20">
      <div className="container grid md:grid-cols-2 gap-8 md:gap-10 items-center">
        <div className="animate-fade-up">
          <p className="text-green-300 text-sm font-semibold tracking-wide uppercase">Sharjah, UAE</p>
          <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Reliable Scrap Trading & Recycling Solutions
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-200">{companyInfo.tagline}</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link href="/scrap" className="btn-secondary text-center">
              View Scrap
            </Link>
            <a
              className="btn-primary text-center"
              href={`https://wa.me/${companyInfo.whatsapp}`}
              target="_blank"
              rel="noreferrer"
            >
              Contact on WhatsApp
            </a>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-2 sm:gap-3 text-center">
            {[
              ['7+', 'Materials'],
              ['24/7', 'Pickup'],
              ['Fair', 'Rates'],
            ].map(([value, label]) => (
              <div key={label} className="rounded-xl bg-white/10 px-2 py-3 backdrop-blur-sm">
                <div className="text-lg sm:text-2xl font-bold">{value}</div>
                <div className="text-xs sm:text-sm text-slate-300">{label}</div>
              </div>
            ))}
          </div>
        </div>
        <div
          className="relative overflow-hidden rounded-2xl bg-slate-700 shadow-2xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
        >
          <div className="relative h-56 sm:h-72 md:h-80">
            <Image
              key={activeItem.id}
              src={activeItem.image}
              alt={activeItem.name}
              fill
              priority
              className="object-cover transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
              <p className="text-xs sm:text-sm uppercase tracking-widest text-green-300">Featured inventory</p>
              <h2 className="mt-1 text-xl sm:text-2xl font-bold">{activeItem.name}</h2>
              <p className="mt-1 text-sm text-slate-200">{activeItem.condition} · {activeItem.location}</p>
            </div>
          </div>
          <div className="absolute inset-x-0 top-1/2 flex -translate-y-1/2 justify-between px-2 sm:px-3">
            <button
              type="button"
              aria-label="Previous featured item"
              onClick={() => setActiveIndex((activeIndex - 1 + scrapItems.length) % scrapItems.length)}
              className="rounded-full bg-white/90 w-9 h-9 sm:w-10 sm:h-10 text-lg text-slate-900 shadow transition hover:bg-white hover:scale-105"
            >
              &#8592;
            </button>
            <button
              type="button"
              aria-label="Next featured item"
              onClick={() => setActiveIndex((activeIndex + 1) % scrapItems.length)}
              className="rounded-full bg-white/90 w-9 h-9 sm:w-10 sm:h-10 text-lg text-slate-900 shadow transition hover:bg-white hover:scale-105"
            >
              &#8594;
            </button>
          </div>
          <div className="absolute bottom-3 right-4 flex gap-2" aria-label="Featured item slides">
            {scrapItems.map((item, index) => (
              <button
                key={item.id}
                type="button"
                aria-label={`Show ${item.name}`}
                aria-current={index === activeIndex}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all ${index === activeIndex ? 'w-7 bg-green-400' : 'w-2 bg-white/70 hover:bg-white'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
