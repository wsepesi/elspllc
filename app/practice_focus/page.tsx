import type { Metadata } from 'next'
import PageLayout from '@/components/PageLayout'
import SimpleTemplate from '@/components/SimpleTemplate'
import Focus from '@/components/Focus'
import Compliance from '@/components/Compliance'
import ContaminatedSites from '@/components/ContaminatedSites'
import BusinessTransactions from '@/components/BusinessTransactions'
import PFAS from '@/components/PFAS'

export const metadata: Metadata = {
  title: 'Practice Focus',
  description:
    'Our practice focuses on PFAS litigation, contaminated site remediation, environmental compliance, and business transactions. Expert environmental legal services backed by scientific expertise.',
  keywords:
    'PFAS litigation, contaminated sites, environmental compliance, business transactions, environmental law, regulatory compliance, site remediation',
  openGraph: {
    title: 'Practice Focus | Environmental Law and Science, PLLC',
    description:
      'PFAS litigation, contaminated sites, compliance, and business transactions',
    type: 'website',
  },
}

export default function PracticeFocusPage() {
  return (
    <PageLayout>
      <SimpleTemplate title="Practice Focus">
        <Focus />
      </SimpleTemplate>
      <Compliance />
      <ContaminatedSites />
      <BusinessTransactions />
      <PFAS />
    </PageLayout>
  )
}
