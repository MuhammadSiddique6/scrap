import ContactSection from '../../components/ContactSection'
import { companyInfo } from '../../data/company'

export const metadata = {
  title: `Contact | ${companyInfo.name}`,
  description: `Contact ${companyInfo.name} - call or WhatsApp us for scrap inquiries.`
}

export default function Contact() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <p className="mt-2">Office: {companyInfo.address}</p>
      <ContactSection />
    </div>
  )
}
