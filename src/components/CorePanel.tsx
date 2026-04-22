import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { cn } from '../utils/cn'

type Practice = {
  title: string
  desc: string
  link: string
}

const practices: Practice[] = [
  {
    title: 'Environmental Compliance',
    desc: 'Permitting, enforcement defense, and counsel across federal and state environmental laws — RCRA, CWA, CAA, TSCA, EPCRA.',
    link: 'practice_focus/#compliance',
  },
  {
    title: 'Contaminated Sites',
    desc: 'CERCLA and RCRA cleanup, cost recovery, administrative orders and consent decrees, and brownfield redevelopment.',
    link: 'practice_focus/#contaminated',
  },
  {
    title: 'Business Transactions',
    desc: 'Environmental risk in M&A and real estate — due diligence, indemnities, and liability allocation across transactions.',
    link: 'practice_focus/#business',
  },
  {
    title: 'PFAS & Chemicals',
    desc: 'PFAS counsel, TSCA compliance, chemical release reporting, and strategy for emerging-contaminant regulation.',
    link: 'practice_focus/#pfas',
  },
]

const CorePanel = (): React.ReactElement => {
  return (
    <div
      className={cn(
        'w-full py-16 md:py-24 flex flex-col lg:flex-row justify-center items-start gap-10 lg:gap-[5vw]',
        'bg-white/80 backdrop-blur-sm'
      )}
    >
      <div className="w-full lg:w-[40%] px-6 lg:px-0 lg:ml-[3.75vw]">
        <figure className="relative aspect-[4/3] w-full">
          <Image
            src="/images/fire.webp"
            alt="Cuyahoga River Fire, 1969"
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
            priority
            fetchPriority="high"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknywtN9Fv2XMGZ9NE8RhNm6Vd8fzxuwS5W7b8X8Wv5kOgb1YCWMGc6KgSCWlCz/8V"
          />
          <figcaption className="mt-3 text-[0.7rem] uppercase tracking-[0.2em] text-gray font-libre">
            Cuyahoga River Fire, 1969
          </figcaption>
        </figure>
      </div>
      <div className="w-full lg:w-[46%] px-6 lg:px-0 lg:mr-[3.75vw]">
        <div className="flex items-baseline justify-between gap-4 mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-caslon font-normal leading-tight tracking-tight">
            Practice Focus
          </h2>
          <span className="text-[0.7rem] uppercase tracking-[0.3em] text-gray font-libre shrink-0 whitespace-nowrap">
            01 — 04
          </span>
        </div>
        <ul className="border-t border-transparent-border">
          {practices.map((p, i) => (
            <li key={p.link} className="border-b border-transparent-border">
              <Link
                href={p.link}
                className="group block relative py-5 md:py-6 focus-visible:outline-none"
              >
                <div className="flex items-baseline gap-4 md:gap-6">
                  <span className="font-libre text-[0.7rem] tabular-nums tracking-[0.25em] text-gray shrink-0 self-start pt-2.5 md:pt-3 w-6">
                    0{i + 1}
                  </span>
                  <h3
                    className={cn(
                      'font-caslon font-normal flex-1 min-w-0',
                      'text-[1.75rem] leading-[0.98] tracking-tight',
                      'md:text-[2.25rem] md:leading-[0.96]',
                      'lg:text-[2.75rem] lg:leading-[0.95]',
                      'transition-colors duration-500 ease-out',
                      'text-gray-shade group-hover:text-secondary group-focus-visible:text-secondary'
                    )}
                  >
                    {p.title}
                  </h3>
                  <span
                    aria-hidden
                    className="font-caslon text-xl md:text-2xl text-gray shrink-0 self-start pt-2 md:pt-3 opacity-30 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:text-secondary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-focus-visible:opacity-100 group-focus-visible:text-secondary"
                  >
                    ↗
                  </span>
                </div>
                <div className="pl-10 md:pl-12 max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-out group-hover:max-h-32 group-hover:opacity-100 group-hover:mt-3 group-focus-visible:max-h-32 group-focus-visible:opacity-100 group-focus-visible:mt-3">
                  <p className="font-libre text-[0.95rem] md:text-base text-gray-shade max-w-xl leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CorePanel
