import type { Metadata } from 'next'
import Presentations from '../../src/pages/Presentations'

export const metadata: Metadata = {
  title: 'Presentations',
  description:
    'View our speaking engagements and presentations on environmental law topics including PFAS, contaminated sites, environmental compliance, and regulatory updates.',
  keywords:
    'environmental law presentations, PFAS presentations, environmental compliance speaking, regulatory updates, environmental law conferences',
  openGraph: {
    title: 'Presentations | Environmental Law and Science, PLLC',
    description: 'Speaking engagements and presentations on environmental law',
    type: 'website',
  },
}

export default function PresentationsPage() {
  return <Presentations />
}
