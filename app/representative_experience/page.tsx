import type { Metadata } from 'next'
import RepExp from '../../src/pages/RepExp'

export const metadata: Metadata = {
  title: 'Representative Experience',
  description:
    'Explore our representative experience and case studies in environmental law, including successful PFAS litigation, contaminated site remediation projects, and regulatory compliance matters.',
  keywords:
    'environmental law case studies, PFAS litigation success, contaminated site remediation, environmental compliance cases, representative experience',
  openGraph: {
    title: 'Representative Experience | Environmental Law and Science, PLLC',
    description:
      'Case studies and representative experience in environmental law',
    type: 'website',
  },
}

export default function RepresentativeExperiencePage() {
  return <RepExp />
}
