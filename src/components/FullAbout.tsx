import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type RelatedLink = {
  label: string
  href: string
  desc: string
}

const relatedLinks: RelatedLink[] = [
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
    label: 'Representative Experience',
    href: '/representative_experience',
    desc: 'Selected matters across compliance, sites, and transactions.',
  },
]

const FullAbout = (): React.ReactElement => {
  return (
    <div className="space-y-9 md:space-y-11">
      <section className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
        <div className="flex-1 order-2 md:order-1">
          <h2 className="font-caslon text-3xl md:text-4xl font-normal leading-tight tracking-tight mb-2">
            Jeff Sepesi
          </h2>
          <p className="text-[0.7rem] uppercase tracking-[0.28em] text-gray font-libre mb-6">
            Principal
            <span className="mx-2 text-light-gray">·</span>
            Environmental Law and Science, PLLC
          </p>
          <p className="text-base leading-relaxed">
            Environmental Law and Science, PLLC provides environmental law
            services informed by Jeff&rsquo;s experience as in-house
            environmental counsel at a Fortune 100 diversified, multi-national
            conglomerate, practicing at Am Law 100 law firms, in solo practice
            and in environmental consulting. The firm provides strong client
            advocacy, coupled with collaborative problem solving and practical
            solutions.
          </p>
        </div>
        <Image
          src="/images/headshot.webp"
          alt="Jeff Sepesi"
          width={418}
          height={418}
          sizes="(min-width: 768px) 14rem, 10rem"
          className="w-32 sm:w-40 md:w-56 aspect-square object-cover rounded-sm shrink-0 order-1 md:order-2"
          priority
          fetchPriority="high"
        />
      </section>

      <section>
        <h3 className="text-[0.72rem] uppercase tracking-[0.3em] text-gray font-libre mb-4">
          The Practice
        </h3>
        <p className="text-base leading-relaxed">
          At its core, the practice of environmental law solves intertwining
          legal and scientific considerations. Effective representation requires
          not only understanding the environmental laws and regulations, but
          also their technical underpinnings. We provide this understanding. As
          a result, we effectively work and communicate with clients and their
          EHS staff, agency lawyers and technical staff, environmental
          consultants and experts.
        </p>
      </section>

      <section>
        <h3 className="text-[0.72rem] uppercase tracking-[0.3em] text-gray font-libre mb-4">
          Who We Work With
        </h3>
        <p className="text-base leading-relaxed mb-4">
          We work with businesses big and small, from startups to Fortune 100
          companies. Clients have included manufacturers, technology companies,
          municipalities, resort hotels, commercial businesses, investors,
          financial institutions and property developers. In each situation we
          work to address each client&rsquo;s specific environmental law needs.
        </p>
        <p className="text-base leading-relaxed">
          We also team with law firms that require environmental law expertise
          in mergers and acquisitions, property transactions and clients facing
          environmental enforcement actions. The firm also provides
          environmental law expertise to general counsels at companies lacking
          dedicated in-house environmental attorneys.
        </p>
      </section>

      <section className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
        <div className="flex-1">
          <h3 className="text-[0.72rem] uppercase tracking-[0.3em] text-gray font-libre mb-4">
            How We Work
          </h3>
          <p className="text-base leading-relaxed">
            Over the years, we have addressed environmental law challenges from
            the courtroom to the board room, whether on factory floor or at
            hazardous waste sites. Whether in the conference room, on a Zoom
            call, before a judge or at a regulatory agency, we provide
            sophisticated, timely, practical and cost-effective environmental
            legal and regulatory representation and advice.
          </p>
        </div>
        <Image
          src="/images/conference.webp"
          alt="Jeff giving a talk at a conference"
          width={500}
          height={375}
          sizes="(min-width: 768px) 40vw, 100vw"
          className="w-full md:w-[40%] aspect-[4/3] object-cover rounded-sm shrink-0"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
        />
      </section>

      <section className="pt-6 border-t border-transparent-border">
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
    </div>
  )
}

export default FullAbout
