import type { Metadata } from 'next'
import Contact from '../../src/pages/Contact'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Environmental Law and Science, PLLC for expert environmental legal services. Get in touch for PFAS litigation, contaminated site remediation, and environmental compliance matters.',
  keywords:
    'contact environmental lawyer, environmental law consultation, PFAS attorney, contaminated sites lawyer, environmental compliance help',
  openGraph: {
    title: 'Contact | Environmental Law and Science, PLLC',
    description: 'Get in touch for expert environmental legal services',
    type: 'website',
  },
}

export default function ContactPage() {
  return <Contact />
}
