import Link from 'next/link'
import React from 'react'

type Practice = {
  number: string
  title: string
  id: string
  kicker: string
}

const practices: Practice[] = [
  {
    number: '01',
    title: 'Environmental Compliance & Advocacy',
    id: 'compliance',
    kicker:
      'Permitting, enforcement defense, and counsel across federal and state environmental laws.',
  },
  {
    number: '02',
    title: 'Contaminated Sites & Brownfields',
    id: 'contaminated',
    kicker:
      'CERCLA and RCRA cleanup, cost recovery, consent decrees, and brownfield redevelopment.',
  },
  {
    number: '03',
    title: 'Business Transactions',
    id: 'business',
    kicker:
      'Environmental risk in M&A and real estate — due diligence, indemnities, and liability allocation.',
  },
  {
    number: '04',
    title: 'PFAS & Chemical Regulation',
    id: 'pfas',
    kicker:
      'PFAS counsel, TSCA compliance, chemical release reporting, and emerging-contaminant strategy.',
  },
]

const Focus = (): React.ReactElement => {
  return (
    <div className="mb-14 md:mb-20">
      <p className="font-caslon text-xl md:text-2xl text-gray-shade leading-snug max-w-3xl mb-10 md:mb-14">
        Environmental Law and Science, PLLC has experience with a wide range of
        environmental law matters and challenges at the federal level and in
        many states, from Minnesota to the US Virgin Islands.
      </p>
      <div className="flex items-baseline justify-between gap-4 mb-6 md:mb-8">
        <h2 className="font-caslon text-2xl md:text-3xl font-normal leading-tight tracking-tight">
          Four primary areas
        </h2>
        <span className="text-[0.7rem] uppercase tracking-[0.3em] text-gray font-libre shrink-0 whitespace-nowrap">
          01 — 04
        </span>
      </div>
      <ul className="border-t border-transparent-border">
        {practices.map((p) => (
          <li key={p.id} className="border-b border-transparent-border">
            <Link
              href={`#${p.id}`}
              className="group block py-4 md:py-5 focus-visible:outline-none"
            >
              <div className="flex items-baseline gap-4 md:gap-6">
                <span className="font-libre text-[0.7rem] tabular-nums tracking-[0.25em] text-gray shrink-0 w-6 pt-1">
                  {p.number}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-caslon text-xl md:text-2xl leading-tight tracking-tight text-gray-shade transition-colors duration-500 group-hover:text-secondary group-focus-visible:text-secondary">
                      {p.title}
                    </h3>
                    <span
                      aria-hidden
                      className="font-caslon text-base md:text-lg text-gray shrink-0 opacity-30 transition-all duration-500 group-hover:opacity-100 group-hover:text-secondary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-focus-visible:opacity-100 group-focus-visible:text-secondary"
                    >
                      ↓
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm text-gray leading-relaxed">
                    {p.kicker}
                  </p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Focus
