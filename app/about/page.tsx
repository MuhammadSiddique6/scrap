import { companyInfo } from '../../data/company'

export const metadata = {
  title: `About | ${companyInfo.name}`,
  description: `About ${companyInfo.name} - scrap trading and recycling in Lahore.`
}

export default function About() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold">About {companyInfo.name}</h1>
      <p className="mt-4">{companyInfo.about}</p>
      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Materials We Trade</h2>
        <ul className="mt-4 list-disc list-inside">
          <li>Copper Scrap</li>
          <li>Aluminum Scrap</li>
          <li>Iron & Steel Scrap</li>
          <li>AC & Electrical Scrap</li>
          <li>Machinery Scrap</li>
        </ul>
      </section>
    </div>
  )
}
