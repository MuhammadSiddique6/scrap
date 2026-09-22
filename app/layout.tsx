import './globals.css'
import { ReactNode } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FloatingWhatsApp from '../components/FloatingWhatsApp'
import { companyInfo } from '../data/company'

export const metadata = {
  title: companyInfo.name,
  description: companyInfo.description,
  metadataBase: new URL('https://example.com'),
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  openGraph: {
    title: companyInfo.name,
    description: companyInfo.description
  }
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  )
}
