'use client'

import { useEffect, useRef, useState } from 'react'
import { companyInfo } from '../data/company'

declare global {
  interface Window {
    L?: any
  }
}

function loadLeaflet(): Promise<any> {
  if (typeof window === 'undefined') return Promise.reject(new Error('no window'))
  if (window.L) return Promise.resolve(window.L)

  return new Promise((resolve, reject) => {
    const existingCss = document.querySelector('link[data-leaflet]')
    if (!existingCss) {
      const css = document.createElement('link')
      css.rel = 'stylesheet'
      css.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
      css.setAttribute('data-leaflet', 'true')
      document.head.appendChild(css)
    }

    const existingScript = document.querySelector('script[data-leaflet]') as HTMLScriptElement | null
    if (existingScript) {
      existingScript.addEventListener('load', () => resolve(window.L))
      existingScript.addEventListener('error', () => reject(new Error('Leaflet failed to load')))
      return
    }

    const script = document.createElement('script')
    script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
    script.async = true
    script.setAttribute('data-leaflet', 'true')
    script.onload = () => resolve(window.L)
    script.onerror = () => reject(new Error('Leaflet failed to load'))
    document.body.appendChild(script)
  })
}

export default function GoogleMap() {
  const mapNode = useRef<HTMLDivElement>(null)
  const mapInstance = useRef<any>(null)
  const [ready, setReady] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    let cancelled = false

    loadLeaflet()
      .then((L) => {
        if (cancelled || !mapNode.current || mapInstance.current) return
        const map = L.map(mapNode.current, {
          scrollWheelZoom: false,
          tap: true,
        }).setView([companyInfo.latitude, companyInfo.longitude], 17)

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        }).addTo(map)

        L.marker([companyInfo.latitude, companyInfo.longitude])
          .addTo(map)
          .bindPopup(`<strong>${companyInfo.name}</strong><br/>${companyInfo.address}`)
          .openPopup()

        map.on('click', () => map.scrollWheelZoom.enable())
        mapInstance.current = map
        setReady(true)
        window.setTimeout(() => map.invalidateSize(), 250)
      })
      .catch(() => {
        if (!cancelled) setError(true)
      })

    return () => {
      cancelled = true
      mapInstance.current?.remove()
      mapInstance.current = null
    }
  }, [])

  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${companyInfo.latitude},${companyInfo.longitude}`

  return (
    <div className="card overflow-hidden p-0">
      <div className="p-4 sm:p-5">
        <h4 className="font-semibold text-lg">Find Our Office</h4>
        <p className="mt-2 text-slate-600 text-sm sm:text-base">
          {companyInfo.address}, {companyInfo.city}, {companyInfo.country}
        </p>
      </div>
      <div className="relative h-56 sm:h-72 md:h-80 bg-slate-100">
        <div ref={mapNode} className="absolute inset-0 z-0 h-full w-full" />
        {error && (
          <iframe
            title="Office location on Google Maps"
            src={companyInfo.googleMapsEmbedUrl}
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        )}
        {!ready && !error && (
          <div className="absolute inset-0 z-10 flex items-center justify-center text-sm text-slate-500">
            Loading map…
          </div>
        )}
      </div>
      <div className="flex flex-col sm:flex-row gap-2 p-4 sm:p-5">
        <a className="btn-secondary text-center" href={companyInfo.googleMapsUrl} target="_blank" rel="noreferrer">
          Open in Google Maps
        </a>
        <a className="btn-primary text-center" href={directionsUrl} target="_blank" rel="noreferrer">
          Get directions
        </a>
      </div>
    </div>
  )
}
