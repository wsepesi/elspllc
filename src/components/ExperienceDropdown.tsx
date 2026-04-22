import Link from 'next/link'
import React from 'react'

type FactGroup = {
  label: string
  items: React.ReactNode[]
  note?: string
}

const factGroups: FactGroup[] = [
  {
    label: 'Education',
    items: [
      'University of Minnesota Law School, JD cum laude, Dean’s List',
      'University of Michigan School of Public Health, MPH',
      'Washington University in St. Louis, BA Biology',
    ],
  },
  {
    label: 'Bar Admissions',
    items: ['Minnesota (1994)', 'Illinois (1995)'],
    note: 'Admitted to U.S. District Court Northern District of Illinois (1996; trial bar 2004), U.S. District Court District of Minnesota (1997), U.S. District Court Central District of Illinois (1999), U.S. District Court Southern District of Illinois (2000), and Third Circuit Court of Appeals (2011).',
  },
  {
    label: 'Organizations',
    items: [
      'Commissioner, Minneapolis Environmental Commission (1992–1994)',
      <>
        Minnesota State Bar Association, Section on Environmental, Natural
        Resources &amp; Energy Law: Governing Council Delegate (2007–2014,
        2019–2025), Secretary (2014–2015), Treasurer
        (2015–2016), Vice-Chair (2016–2017), Chair (2017–2018)
      </>,
      'Minnesota CLE’s Minnesota Environmental Institute Planning Committee (2009–2025)',
      'Minnesota Brownfields ReScape Awards Judge (2013–2015)',
    ],
  },
]

type RelatedLink = {
  label: string
  href: string
}

const relatedLinks: RelatedLink[] = [
  { label: 'Presentations', href: '/presentations' },
  { label: 'Representative Experience', href: '/representative_experience' },
  { label: 'Practice Focus', href: '/practice_focus' },
]

const ExperienceDropdown = (): React.ReactElement => {
  return (
    <aside className="w-full lg:sticky lg:top-24 lg:self-start space-y-8">
      {factGroups.map((group) => (
        <section key={group.label}>
          <h3 className="text-[0.72rem] uppercase tracking-[0.3em] text-gray font-libre mb-3 pb-3 border-b border-transparent-border">
            {group.label}
          </h3>
          <ul className="space-y-2">
            {group.items.map((item, i) => (
              <li key={i} className="text-sm leading-relaxed text-gray-shade">
                {item}
              </li>
            ))}
          </ul>
          {group.note && (
            <p className="mt-3 text-xs leading-relaxed text-gray">
              {group.note}
            </p>
          )}
        </section>
      ))}
      <section>
        <h3 className="text-[0.72rem] uppercase tracking-[0.3em] text-gray font-libre mb-3 pb-3 border-b border-transparent-border">
          Related
        </h3>
        <ul>
          {relatedLinks.map((link) => (
            <li
              key={link.href}
              className="border-b border-transparent-border last:border-b-0"
            >
              <Link
                href={link.href}
                className="group flex items-center justify-between py-3 text-sm text-gray-shade transition-colors duration-300 hover:text-secondary focus-visible:text-secondary focus-visible:outline-none"
              >
                <span>{link.label}</span>
                <span
                  aria-hidden
                  className="text-gray opacity-40 transition-all duration-300 group-hover:opacity-100 group-hover:text-secondary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-focus-visible:opacity-100 group-focus-visible:text-secondary"
                >
                  ↗
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  )
}

export default ExperienceDropdown
