import Hero from '../components/Hero'
import ScrapGrid from '../components/ScrapGrid'
import { scrapItems } from '../data/scrapItems'
import ContactSection from '../components/ContactSection'
import WhyChooseUs from '../components/WhyChooseUs'
import { companyInfo } from '../data/company'

export const metadata = {
  title: `Reliable Scrap Trading & Recycling Solutions | ${companyInfo.name}`,
  description: companyInfo.description
}

export default function Home() {
  return (
    <div>
      <Hero />
      <section className="container py-10 sm:py-12">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6">
          <h2 className="text-2xl sm:text-3xl font-semibold">Featured Scrap Items</h2>
          <a href="/scrap" className="text-green-700 font-medium hover:underline">Browse all inventory →</a>
        </div>
        <ScrapGrid items={scrapItems} />
      </section>

      <WhyChooseUs />
      <ContactSection />
    </div>
  )
}
