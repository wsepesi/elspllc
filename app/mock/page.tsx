import {
  Libre_Franklin,
  Playfair_Display,
  Source_Serif_4,
  Lora,
  Libre_Caslon_Text,
  Fraunces,
  EB_Garamond,
  Spectral,
  Cormorant_Garamond,
  Inter,
} from 'next/font/google'
import React from 'react'

const libreFranklin = Libre_Franklin({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-libre',
})
const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-playfair',
})
const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-source',
})
const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-lora',
})
const libreCaslon = Libre_Caslon_Text({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-caslon',
})
const fraunces = Fraunces({
  subsets: ['latin'],
  axes: ['SOFT'],
  variable: '--font-fraunces',
})
const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-eb',
})
const spectral = Spectral({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-spectral',
})
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-cormorant',
})

type Pairing = {
  id: string
  label: string
  note: string
  displayClass: string
  displayStyle?: React.CSSProperties
  bodyClass: string
}

const pairings: Pairing[] = [
  {
    id: 'current',
    label: 'Current — Playfair Display + Libre Franklin',
    note: 'High-contrast Didone serif. Elegant but reads editorial/lifestyle.',
    displayClass: playfair.className,
    displayStyle: { letterSpacing: '-0.02em' },
    bodyClass: libreFranklin.className,
  },
  {
    id: 'source-inter',
    label: 'Source Serif 4 + Inter',
    note: 'Neutral transitional serif + modern corporate sans. AmLaw feel.',
    displayClass: sourceSerif.className,
    bodyClass: inter.className,
  },
  {
    id: 'lora-inter',
    label: 'Lora + Inter',
    note: 'Calm workhorse serif. Professional, unfussy.',
    displayClass: lora.className,
    bodyClass: inter.className,
  },
  {
    id: 'caslon-libre',
    label: 'Libre Caslon + Libre Franklin',
    note: 'Traditional Caslon — "firm that has been around forever."',
    displayClass: libreCaslon.className,
    bodyClass: libreFranklin.className,
  },
  {
    id: 'fraunces-inter',
    label: 'Fraunces + Inter',
    note: 'Old-style revival with weight and personality. Tuned less soft.',
    displayClass: fraunces.className,
    displayStyle: { fontVariationSettings: '"SOFT" 30', fontWeight: 500 },
    bodyClass: inter.className,
  },
  {
    id: 'eb-libre',
    label: 'EB Garamond + Libre Franklin',
    note: 'Classical, scholarly. Old New England firm.',
    displayClass: ebGaramond.className,
    bodyClass: libreFranklin.className,
  },
  {
    id: 'spectral-inter',
    label: 'Spectral + Inter',
    note: 'Quiet authority. Strong for long-form too.',
    displayClass: spectral.className,
    bodyClass: inter.className,
  },
  {
    id: 'cormorant-inter',
    label: 'Cormorant Garamond + Inter',
    note: 'More literary/historical than fashion. Refined.',
    displayClass: cormorant.className,
    bodyClass: inter.className,
  },
]

function HeroSample({ pairing }: { pairing: Pairing }) {
  return (
    <div className={`${pairing.bodyClass} bg-white/85 backdrop-blur-sm p-10`}>
      <p className="text-[0.7rem] uppercase tracking-[0.3em] text-gray mb-8">
        Environmental Law and Science, PLLC
        <span className="mx-3 text-light-gray">—</span>
        Eden Prairie, Minnesota
      </p>
      <h1
        className={`${pairing.displayClass} text-3xl md:text-4xl font-normal leading-tight tracking-tight`}
        style={pairing.displayStyle}
      >
        An environmental law practice grounded in science and the law
      </h1>
      <nav
        aria-label="Primary"
        className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm tracking-wide text-gray-shade"
      >
        <span className="border-b border-transparent hover:border-secondary pb-0.5">
          About
        </span>
        <span className="text-light-gray">·</span>
        <span className="border-b border-transparent hover:border-secondary pb-0.5">
          Practice Focus
        </span>
        <span className="text-light-gray">·</span>
        <span className="border-b border-transparent hover:border-secondary pb-0.5">
          Experience
        </span>
      </nav>
      <p className="mt-8 text-base leading-7 text-gray-shade max-w-prose">
        Jeffery A. Sepesi represents clients in PFAS litigation, contaminated
        site remediation, environmental compliance, and the environmental
        aspects of business transactions. The practice is built on three
        decades of trial work, regulatory experience, and graduate training in
        environmental science.
      </p>
    </div>
  )
}

export default function MockPage() {
  return (
    <div
      className={`${libreFranklin.variable} ${inter.variable} ${playfair.variable} ${sourceSerif.variable} ${lora.variable} ${libreCaslon.variable} ${fraunces.variable} ${ebGaramond.variable} ${spectral.variable} ${cormorant.variable} min-h-screen bg-background`}
    >
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="mb-12">
          <p className="text-[0.7rem] uppercase tracking-[0.3em] text-gray mb-3">
            Internal — Font Exploration
          </p>
          <h1 className="text-3xl font-semibold text-gray-shade">
            Typeface pairings
          </h1>
          <p className="mt-3 text-sm text-gray max-w-prose">
            Same hero, swapped typography. Compare weight, contrast, and tone.
          </p>
        </div>

        <div className="flex flex-col gap-10">
          {pairings.map((p) => (
            <section key={p.id}>
              <div className="mb-3 flex items-baseline justify-between gap-6">
                <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
                  {p.label}
                </h2>
                <p className="text-xs text-gray text-right max-w-sm">
                  {p.note}
                </p>
              </div>
              <HeroSample pairing={p} />
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}
