import type { Metadata } from 'next'
import PracticeFocus from '../../src/pages/PracticeFocus'
import React from 'react'

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
  return <PracticeFocus />
}
