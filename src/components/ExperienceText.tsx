import Image from 'next/image'
import React from 'react'

type Section = {
  label: string
  body: React.ReactNode
}

const sections: Section[] = [
  {
    label: 'Early Training',
    body: (
      <>
        Jeff&rsquo;s professional experience began with a start-up environmental
        testing and consulting company, where he literally climbed smokestacks,
        went down sewers and ran an environmental laboratory. He created his
        own interdisciplinary master&rsquo;s program in hazardous waste
        management at the University of Michigan School of Public Health,
        taking classes ranging from risk assessment and science policy to
        environmental engineering.
      </>
    ),
  },
  {
    label: 'Environmental Consulting',
    body: (
      <>
        Jeff was an environmental scientist at two nationally recognized
        environmental consulting firms, CH2M Hill and Barr Engineering. He
        performed site investigations and evaluations, health risk assessments
        and compliance evaluations for Superfund sites, MGP sites, refineries,
        landfills, commercial property and manufacturing operations.
      </>
    ),
  },
  {
    label: 'Legal Practice',
    body: (
      <>
        Jeff has practiced environmental law for over 25 years at Am Law 100
        and mid-size law firms and in a solo practice. During this time, he has
        addressed a broad range of environmental regulatory compliance,
        transactional and environmental litigation matters for clients ranging
        from oil companies to resort hotels.
      </>
    ),
  },
  {
    label: 'In-House at 3M',
    body: (
      <>
        Jeff recently served as in-house environmental counsel at 3M Company,
        where his portfolio included facility environmental, safety and health,
        audits, OSHA compliance, TSCA compliance, site remediation, third
        party/legacy sites and PFAS issues. He also served on 3M&rsquo;s
        Institutional Review Board for human subject research.
      </>
    ),
  },
]

const ExperienceText = (): React.ReactElement => {
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-8 md:mb-10">
        <Image
          src="/images/headshot.webp"
          alt="Jeffery A. Sepesi"
          width={418}
          height={418}
          sizes="(min-width: 768px) 14rem, 10rem"
          className="w-32 sm:w-40 md:w-56 aspect-square object-cover rounded-sm shrink-0"
          priority
          fetchPriority="high"
        />
        <div className="flex-1">
          <h2 className="font-caslon text-3xl md:text-4xl font-normal leading-tight tracking-tight mb-2">
            Jeffery A. Sepesi
          </h2>
          <p className="text-[0.7rem] uppercase tracking-[0.28em] text-gray font-libre mb-5">
            Principal
            <span className="mx-2 text-light-gray">·</span>
            Environmental Law and Science, PLLC
          </p>
          <p className="font-caslon text-lg md:text-xl text-gray-shade leading-snug">
            Over 25 years practicing environmental law, informed by a career in
            environmental science and consulting.
          </p>
        </div>
      </div>
      <div className="space-y-7 md:space-y-8">
        {sections.map((s) => (
          <section key={s.label}>
            <h3 className="text-[0.72rem] uppercase tracking-[0.3em] text-gray font-libre mb-3">
              {s.label}
            </h3>
            <p className="text-base leading-relaxed">{s.body}</p>
          </section>
        ))}
      </div>
    </div>
  )
}

export default ExperienceText
