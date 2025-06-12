import type { Metadata } from 'next'
import Experience from '../../src/pages/Experience'

export const metadata: Metadata = {
  title: 'Experience',
  description:
    'Explore our extensive experience in environmental law, including PFAS litigation, contaminated site remediation, regulatory compliance, and environmental consulting services.',
  keywords:
    'environmental law experience, PFAS litigation, contaminated sites, environmental compliance, regulatory affairs, environmental consulting',
  openGraph: {
    title: 'Experience | Environmental Law and Science, PLLC',
    description:
      'Extensive experience in environmental law and regulatory compliance',
    type: 'website',
  },
}

export default function ExperiencePage() {
  return <Experience />
}
