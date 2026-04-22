import type { Metadata } from 'next'
import PageLayout from '@/components/PageLayout'
import SimpleTemplate from '@/components/SimpleTemplate'
import Focus from '@/components/Focus'
import Compliance from '@/components/Compliance'
import ContaminatedSites from '@/components/ContaminatedSites'
import BusinessTransactions from '@/components/BusinessTransactions'
import PFAS from '@/components/PFAS'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Practice Focus',
  description:
    'Our practice focuses on PFAS litigation, contaminated site remediation, environmental compliance, and business transactions. Expert environmental legal services backed by scientific expertise.',
  keywords:
    'PFAS litigation, contaminated sites, environmental compliance, business transactions, environmental law, regulatory compliance, site remediation',
  alternates: { canonical: '/practice_focus' },
  openGraph: {
    title: 'Practice Focus | Environmental Law and Science, PLLC',
    description:
      'PFAS litigation, contaminated sites, compliance, and business transactions',
    type: 'website',
    url: '/practice_focus',
  },
}

const relatedLinks = [
  {
    label: 'About',
    href: '/about',
    desc: 'How the firm approaches environmental law and the clients we serve.',
  },
  {
    label: 'Experience',
    href: '/experience',
    desc: 'Jeff’s professional background, education, and bar admissions.',
  },
  {
    label: 'Representative Experience',
    href: '/representative_experience',
    desc: 'Selected matters across compliance, sites, and transactions.',
  },
]

export default function PracticeFocusPage() {
  return (
    <PageLayout>
      <SimpleTemplate title="Practice Focus">
        <Focus />
        <div className="space-y-16 md:space-y-24">
          <Compliance />
          <ContaminatedSites />
          <BusinessTransactions />
          <PFAS />
        </div>
        <section className="mt-20 md:mt-24 pt-8 border-t border-transparent-border">
          <h3 className="text-[0.72rem] uppercase tracking-[0.3em] text-gray font-libre mb-6">
            Continue Reading
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
            {relatedLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group block border-t border-transparent-border pt-4 focus-visible:outline-none"
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="font-caslon text-xl md:text-2xl text-gray-shade transition-colors duration-500 group-hover:text-secondary group-focus-visible:text-secondary">
                      {link.label}
                    </span>
                    <span
                      aria-hidden
                      className="font-caslon text-lg text-gray opacity-40 transition-all duration-500 group-hover:opacity-100 group-hover:text-secondary group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    >
                      ↗
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-gray leading-relaxed">
                    {link.desc}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </SimpleTemplate>
    </PageLayout>
  )
}
