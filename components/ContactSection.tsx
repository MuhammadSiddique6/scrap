import { companyInfo } from '../data/company'
import GoogleMap from './GoogleMap'

export default function ContactSection() {
  return (
    <section className="container py-12">
      <h2 className="text-2xl font-semibold">Contact & Visit</h2>
      <div className="grid md:grid-cols-2 gap-6 mt-4">
        <div className="card">
          <p><strong>Address:</strong> {companyInfo.address}</p>
          <p className="mt-2"><strong>Phone:</strong> {companyInfo.phone}</p>
          <p className="mt-4"><strong>Business hours:</strong> {companyInfo.hours}</p>
          <div className="mt-4 flex gap-2">
            <a className="bg-green-600 text-white px-3 py-2 rounded" href={`https://wa.me/${companyInfo.whatsapp}`} target="_blank" rel="noreferrer">WhatsApp</a>
            <a className="border px-3 py-2 rounded" href={`tel:${companyInfo.phone}`}>Call</a>
            <a className="border px-3 py-2 rounded" href={companyInfo.googleMapsUrl} target="_blank" rel="noreferrer">Get Directions</a>
          </div>
        </div>
        <GoogleMap />
      </div>
    </section>
  )
}
