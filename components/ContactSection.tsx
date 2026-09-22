import { companyInfo } from '../data/company'
import GoogleMap from './GoogleMap'
import ContactForm from './ContactForm'

export default function ContactSection() {
  return (
    <section className="container py-10 sm:py-12">
      <h2 className="text-2xl sm:text-3xl font-semibold">Contact & Visit</h2>
      <p className="mt-2 text-slate-600 max-w-2xl">Visit our Sharjah yard, call us, or send a WhatsApp inquiry. We are available 24/7.</p>
      <div className="grid lg:grid-cols-2 gap-6 mt-6">
        <div className="space-y-4">
          <div className="card">
            <p><strong>Address:</strong> {companyInfo.address}</p>
            <p className="mt-2"><strong>Phone:</strong> <a className="text-green-700 hover:underline" href={`tel:${companyInfo.phone}`}>{companyInfo.phone}</a></p>
            <p className="mt-2"><strong>Business hours:</strong> {companyInfo.hours}</p>
            <div className="mt-4 flex flex-col sm:flex-row gap-2">
              <a className="btn-primary" href={`https://wa.me/${companyInfo.whatsapp}`} target="_blank" rel="noreferrer">WhatsApp</a>
              <a className="btn-secondary" href={`tel:${companyInfo.phone}`}>Call</a>
              <a className="btn-secondary" href={companyInfo.googleMapsUrl} target="_blank" rel="noreferrer">Get Directions</a>
            </div>
          </div>
          <ContactForm />
        </div>
        <GoogleMap />
      </div>
    </section>
  )
}
