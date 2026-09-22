import AboutContent from '../../components/AboutContent'
import { companyInfo } from '../../data/company'

export const metadata = {
  title: `About | ${companyInfo.name}`,
  description: `About ${companyInfo.name} - scrap trading and recycling in Sharjah.`
}

export default function About() {
  return <AboutContent />
}
