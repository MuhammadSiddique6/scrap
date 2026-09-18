import Hero from '../components/Hero'
import ScrapGrid from '../components/ScrapGrid'
import { scrapItems } from '../data/scrapItems'
import ContactSection from '../components/ContactSection'
import { companyInfo } from '../data/company'

export const metadata = {
  title: `Reliable Scrap Trading & Recycling Solutions | ${companyInfo.name}`,
  description: companyInfo.description
}

export default function Home() {
  return (
    <div>
      <Hero />
      <section className="container py-12">
        <h2 className="text-2xl font-semibold mb-4">Featured Scrap Items</h2>
        <ScrapGrid items={scrapItems} />
      </section>

      <section className="container py-8">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="card">Reliable pricing and fair deals.</div>
          <div className="card">Fast local pickup and logistics.</div>
          <div className="card">Sustainable recycling practices.</div>
        </div>
      </section>

      <ContactSection />
    </div>
  )
}
