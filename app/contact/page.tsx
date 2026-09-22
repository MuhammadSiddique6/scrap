import ContactSection from '../../components/ContactSection'
import { companyInfo } from '../../data/company'

export const metadata = {
  title: `Contact | ${companyInfo.name}`,
  description: `Contact ${companyInfo.name} - call or WhatsApp us for scrap inquiries.`
}

export default function Contact() {
  return <ContactSection />
}
