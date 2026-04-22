import Image from 'next/image'
import React from 'react'
import { cn } from '../utils/cn'

type Props = {
  id: string
  number: string
  title: string
  kicker: string
  img: string
  imgAlt: string
  services: string[]
  imageSide?: 'left' | 'right'
}

const PracticeSpread = (props: Props): React.ReactElement => {
  const imageLeft = props.imageSide !== 'right'

  return (
    <section
      id={props.id}
      className="scroll-mt-24 animate-fade-in"
    >
      <header className="flex items-baseline gap-4 sm:gap-6 md:gap-10 mb-10 md:mb-14 pb-6 md:pb-8 border-b border-transparent-border">
        <span className="font-caslon font-normal text-gray-shade tabular-nums leading-[0.85] shrink-0 text-[2.5rem] sm:text-[3.5rem] md:text-[5.5rem] lg:text-[6.5rem]">
          {props.number}
        </span>
        <h2 className="flex-1 min-w-0 font-caslon font-normal leading-[1.05] tracking-tight text-xl sm:text-2xl md:text-4xl lg:text-[2.75rem] break-words">
          {props.title}
        </h2>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12 items-start">
        <div
          className={cn(
            'lg:col-span-2',
            imageLeft ? 'lg:order-1' : 'lg:order-2'
          )}
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
            <Image
              src={`/images/${props.img}.webp`}
              alt={props.imgAlt}
              fill
              sizes="(min-width: 1024px) 35vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
        <div
          className={cn(
            'lg:col-span-3',
            imageLeft ? 'lg:order-2' : 'lg:order-1'
          )}
        >
          <p className="font-caslon font-normal text-xl md:text-[1.5rem] lg:text-[1.625rem] text-gray-shade leading-[1.3] mb-9 md:mb-11">
            {props.kicker}
          </p>
          <h3 className="text-[0.72rem] uppercase tracking-[0.3em] text-gray font-libre mb-4 pb-3 border-b border-transparent-border">
            Services
          </h3>
          <ul className="space-y-3.5">
            {props.services.map((s) => (
              <li
                key={s}
                className="relative pl-6 text-sm md:text-[0.95rem] leading-relaxed text-gray-shade"
              >
                <span
                  aria-hidden
                  className="absolute left-0 top-[0.75rem] w-3.5 h-px bg-light-gray"
                />
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default PracticeSpread
