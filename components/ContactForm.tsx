'use client'

import { FormEvent, useState } from 'react'
import { companyInfo } from '../data/company'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  function onSubmit(event: FormEvent) {
    event.preventDefault()
    const text = `Hi, I am ${name || 'a buyer'}. Phone: ${phone || 'not provided'}. ${message || 'I would like a scrap quote.'}`
    window.open(`https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer')
    setSent(true)
  }

  return (
    <form onSubmit={onSubmit} className="card space-y-3">
      <h3 className="font-semibold text-lg">Send a WhatsApp inquiry</h3>
      <label className="block text-sm">
        <span className="mb-1 block text-slate-600">Name</span>
        <input
          className="w-full rounded-lg border border-slate-200 px-3 py-2.5 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
        />
      </label>
      <label className="block text-sm">
        <span className="mb-1 block text-slate-600">Phone</span>
        <input
          className="w-full rounded-lg border border-slate-200 px-3 py-2.5 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+971..."
        />
      </label>
      <label className="block text-sm">
        <span className="mb-1 block text-slate-600">Message</span>
        <textarea
          className="w-full min-h-[96px] rounded-lg border border-slate-200 px-3 py-2.5 outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us what scrap you want to buy or sell"
        />
      </label>
      <button type="submit" className="btn-primary w-full sm:w-auto">
        Send on WhatsApp
      </button>
      {sent && <p className="text-sm text-green-700">WhatsApp should open with your message.</p>}
    </form>
  )
}
