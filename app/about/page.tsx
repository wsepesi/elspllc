import type { Metadata } from 'next'
import PageLayout from '@/components/PageLayout'
import SimpleTemplate from '@/components/SimpleTemplate'
import FullAbout from '@/components/FullAbout'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Environmental Law and Science, PLLC - an environmental law practice grounded in science and law, providing expert legal services for environmental compliance, contaminated sites, and PFAS litigation.',
  keywords:
    'environmental law, environmental lawyer, environmental compliance, contaminated sites, PFAS litigation, environmental consulting, legal services',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About | Environmental Law and Science, PLLC',
    description: 'Environmental law practice grounded in science and law',
    type: 'website',
    url: '/about',
  },
}

export default function AboutPage() {
  return (
    <PageLayout>
      <SimpleTemplate title="About">
        <FullAbout />
      </SimpleTemplate>
    </PageLayout>
  )
}
