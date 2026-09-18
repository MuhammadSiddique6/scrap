import { companyInfo } from '../data/company'

export default function WhatsAppButton({ message, children }: { message?: string; children?: React.ReactNode }) {
  const text = message || 'Hi, I would like to know more.'
  const href = `https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(text)}`
  return (
    <a href={href} target="_blank" rel="noreferrer" className="inline-block bg-green-600 text-white px-4 py-2 rounded">{children || 'Contact on WhatsApp'}</a>
  )
}
