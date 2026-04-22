import type { Metadata } from 'next'
import PageLayout from '@/components/PageLayout'
import SimpleTemplate from '@/components/SimpleTemplate'
import ExperienceDropdown from '@/components/ExperienceDropdown'
import ExperienceText from '@/components/ExperienceText'

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
  return (
    <PageLayout>
      <SimpleTemplate title="Experience">
        <div className="flex flex-col lg:flex-row gap-8">
          <ExperienceText />
          <ExperienceDropdown />
        </div>
      </SimpleTemplate>
    </PageLayout>
  )
}
