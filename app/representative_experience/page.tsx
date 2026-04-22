import type { Metadata } from 'next'
import Link from 'next/link'
import PageLayout from '@/components/PageLayout'
import SimpleTemplate from '@/components/SimpleTemplate'

export const metadata: Metadata = {
  title: 'Representative Experience',
  description:
    'Explore our representative experience and case studies in environmental law, including successful PFAS litigation, contaminated site remediation projects, and regulatory compliance matters.',
  keywords:
    'environmental law case studies, PFAS litigation success, contaminated site remediation, environmental compliance cases, representative experience',
  alternates: { canonical: '/representative_experience' },
  openGraph: {
    title: 'Representative Experience | Environmental Law and Science, PLLC',
    description:
      'Case studies and representative experience in environmental law',
    type: 'website',
    url: '/representative_experience',
  },
}

type Matter = {
  label: string
  body: React.ReactNode
}

const privatePractice: Matter[] = [
  {
    label: 'CERCLA Liability',
    body: (
      <>
        Negotiated a consent decree with DOJ/EPA that cost-effectively resolved
        the City of Cass Lake, Minnesota&rsquo;s liability for all past and
        future response costs for the St. Regis NPL Site with full contribution
        protection; recovered the City&rsquo;s defense and settlement costs
        from its legacy insurer.
      </>
    ),
  },
  {
    label: 'Environmental and Business Litigation',
    body: (
      <>
        Lead environmental litigator on a three-attorney team that obtained a
        $28.7 million federal jury award under federal and Delaware law in a
        fraud and breach-of-contract action against a former Fortune 200 owner
        regarding an alumina refinery property in the US Virgin Islands, after
        a three-year battle involving dozens of lawyers. Post-verdict motions
        upheld $6 million in punitive damages. The verdict led to a consent
        decree with the Virgin Islands&rsquo; government and the former owner
        that fully resolved the client&rsquo;s CERCLA liability at no cost,
        required one former owner to spend $20 million to fully remediate the
        disputed area, and bound other former owners to inject $50 million for
        future remediation.
      </>
    ),
  },
  {
    label: 'PFAS',
    body: 'Provide strategic advice and guidance to a painting and coating company regarding emerging PFAS regulations, restrictions and legislation.',
  },
  {
    label: 'TSCA Self-Disclosure',
    body: 'Assisted global data storage company with self-disclosure of potential TSCA violations to EPA.',
  },
  {
    label: 'Clean Air Act Enforcement',
    body: 'Negotiated the settlement of an EPA Region 5 administrative NESHAP enforcement action against a chromium plater for 25 percent less than the proposed civil penalty.',
  },
  {
    label: 'Clean Water Act Enforcement',
    body: 'Helped an asphalt company resolve with EPA multiple Clean Water Act compliance and enforcement actions, including settling an oil pollution administrative enforcement action for less than one fifth of a proposed six-figure penalty and settling multiple SPCC plan violations for no penalty.',
  },
  {
    label: 'RCRA and Illinois EPA Enforcement',
    body: 'Negotiated the settlement of an enforcement action by the Cook County Illinois State’s Attorney and Illinois EPA regarding a chromium release, employing a novel and cost-effective settlement agreement incorporating low-cost, long-term monitoring, engineering controls and institutional control agreements with IEPA and the City of Chicago.',
  },
  {
    label: 'FIFRA',
    body: 'Counseled client on FIFRA importation requirements for pesticide devices, including the voluntary self-disclosure of import violations that resulted in no penalty.',
  },
  {
    label: 'Business Transactions',
    body: 'Advised real estate investment trust on environmental due diligence, liability assurance letters and environmental terms of purchase agreements for property acquisitions, development and divestitures.',
  },
  {
    label: 'Property Transfer and Environmental Covenants',
    body: 'Enabled former property owner to finalize environmental obligations to property purchaser and obtain release of $250,000 escrow, including the negotiation of an environmental covenant with a state environmental agency.',
  },
  {
    label: 'CERCLA Liability',
    body: 'Advised a paint manufacturer regarding CERCLA legacy site liability connected to a recently acquired company.',
  },
  {
    label: 'Auditing',
    body: 'Performed quarterly legal reviews of internal safety and operational risk evaluations by a Fortune 100 oil company of its worldwide production, refining and support operations.',
  },
  {
    label: 'CERCLA Liability',
    body: 'Represented seven waste-oil generators in response to EPA CERCLA 104(e) information request, special notice letter and cost recovery demands for the cleanup of a defunct waste-oil recycler. After intensive settlement negotiations with EPA and DOJ, achieved cost-effective settlements for each client.',
  },
]

const inHouse: Matter[] = [
  {
    label: 'PFAS Matters',
    body: 'Advised company business and legal leadership on emerging PFAS regulatory trends, initiatives, and proposed rulemakings at the international, federal and state level; helped lead rulemaking comments and challenges across several states. Worked with government affairs experts and trade groups to assess and respond to agency PFAS initiatives and proposed Congressional and state PFAS legislative actions.',
  },
  {
    label: 'Environmental Compliance',
    body: 'Lead attorney for facility environmental, health and safety law compliance and advice.',
  },
  {
    label: 'OSHA Compliance and Enforcement',
    body: 'Provided legal support and counsel for OSHA compliance, including employee complaint notifications, information requests, agency inspections and enforcement.',
  },
  {
    label: 'Legacy Waste Site Liability',
    body: 'Lead attorney regarding legacy liability for third-party waste sites and current and former company facilities.',
  },
  {
    label: 'Audits',
    body: 'Provided legal guidance, review and oversight of corporate EHS audits and audit policies.',
  },
  {
    label: 'RCRA Compliance',
    body: 'Lead attorney for RCRA compliance including assessing requirements for specific waste management situations, response to RCRA compliance inspections and enforcement, evaluation of third-party waste management vendors, and hazardous waste import/export rules.',
  },
  {
    label: 'Permitting',
    body: 'Assisted and advised company experts and facility EHS staff on air, wastewater and stormwater permitting, permit implementation, compliance and agency permit enforcement.',
  },
  {
    label: 'TSCA',
    body: 'Provided guidance for TSCA-related compliance, including EPA inspections, review of TSCA audits, self-disclosures of TSCA violations, TSCA 8(e) reporting and TSCA 8(c) adverse report recording.',
  },
]

const relatedLinks = [
  {
    label: 'Practice Focus',
    href: '/practice_focus',
    desc: 'The four areas of environmental law that define our work.',
  },
  {
    label: 'Experience',
    href: '/experience',
    desc: 'Jeff’s professional background, education, and bar admissions.',
  },
  {
    label: 'About',
    href: '/about',
    desc: 'How the firm approaches environmental law and the clients we serve.',
  },
]

function MatterList({ items }: { items: Matter[] }) {
  return (
    <ul className="border-t border-transparent-border">
      {items.map((m, i) => (
        <li
          key={`${m.label}-${i}`}
          className="grid grid-cols-1 md:grid-cols-[14rem_1fr] gap-2 md:gap-8 py-5 md:py-6 border-b border-transparent-border"
        >
          <h3 className="text-[0.72rem] uppercase tracking-[0.25em] text-gray font-libre md:pt-1 leading-relaxed">
            {m.label}
          </h3>
          <p className="text-sm md:text-[0.95rem] leading-relaxed text-gray-shade">
            {m.body}
          </p>
        </li>
      ))}
    </ul>
  )
}

export default function RepresentativeExperiencePage() {
  return (
    <PageLayout>
      <SimpleTemplate title="Representative Experience">
        <p className="font-spectral text-xl md:text-2xl text-gray-shade leading-snug max-w-3xl mb-12 md:mb-16">
          A selection of matters across compliance, contaminated sites,
          business transactions, and chemical regulation — in private practice
          and in-house.
        </p>

        <section id="private-practice" className="mb-16 md:mb-20 scroll-mt-24">
          <div className="flex items-baseline justify-between gap-4 mb-6 md:mb-8">
            <h2 className="font-spectral text-2xl md:text-3xl font-normal leading-tight tracking-tight">
              Private Practice
            </h2>
            <span className="text-[0.7rem] uppercase tracking-[0.3em] text-gray font-libre shrink-0 whitespace-nowrap">
              {String(privatePractice.length).padStart(2, '0')} matters
            </span>
          </div>
          <MatterList items={privatePractice} />
        </section>

        <section id="in-house" className="scroll-mt-24">
          <div className="flex items-baseline justify-between gap-4 mb-6 md:mb-8">
            <h2 className="font-spectral text-2xl md:text-3xl font-normal leading-tight tracking-tight">
              In-House
            </h2>
            <span className="text-[0.7rem] uppercase tracking-[0.3em] text-gray font-libre shrink-0 whitespace-nowrap">
              {String(inHouse.length).padStart(2, '0')} matters
            </span>
          </div>
          <MatterList items={inHouse} />
        </section>

        <section className="mt-16 md:mt-20 pt-6 border-t border-transparent-border">
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
                    <span className="font-spectral text-xl md:text-2xl text-gray-shade transition-colors duration-500 group-hover:text-secondary group-focus-visible:text-secondary">
                      {link.label}
                    </span>
                    <span
                      aria-hidden
                      className="font-spectral text-lg text-gray opacity-40 transition-all duration-500 group-hover:opacity-100 group-hover:text-secondary group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
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
