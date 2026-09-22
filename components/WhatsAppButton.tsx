import { companyInfo } from '../data/company'

export default function WhatsAppButton({ message, children }: { message?: string; children?: React.ReactNode }) {
  const text = message || 'Hi, I would like to know more.'
  const href = `https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(text)}`
  return (
    <a href={href} target="_blank" rel="noreferrer" className="btn-primary">{children || 'Contact on WhatsApp'}</a>
  )
}
