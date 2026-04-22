import Image from 'next/image'
import React from 'react'
import { cn } from '../utils/cn'

type Props = {
  mode: string
  title: string
  children: React.ReactNode
  img: string
  id: string
}

const CoreTemplate = (props: Props): React.ReactElement => {
  const isDark = props.mode === 'dark'

  return (
    <div
      className={cn(
        'w-full max-w-5xl mx-auto min-h-0 h-auto',
        isDark
          ? 'bg-[#1a1a1a]/90 text-[#fafafa]'
          : 'bg-white/95 text-[#1a1a1a]',
        'backdrop-blur-sm animate-fade-in'
      )}
      id={props.id}
    >
      <div
        className={cn(
          'px-6 md:px-12 py-12 flex flex-col',
          isDark ? 'items-end' : 'items-start justify-start'
        )}
      >
        <h1 className="text-3xl md:text-4xl font-playfair font-normal leading-tight tracking-tight">
          {props.title}
        </h1>
        <hr className="w-[85%] self-start my-2" />
        <div
          className={cn(
            'flex flex-col md:flex-row justify-between items-center my-6 gap-8 w-full'
          )}
        >
          {isDark && (
            <div className="w-full md:w-2/5 aspect-[4/3] relative flex-shrink-0">
              <Image
                src={`/images/${props.img}.webp`}
                alt={props.img}
                fill
                className="object-cover rounded-lg"
                loading="eager"
              />
            </div>
          )}
          <div className="flex-1 overflow-auto">{props.children}</div>
          {!isDark && (
            <div className="w-full md:w-2/5 aspect-[4/3] relative flex-shrink-0">
              <Image
                src={`/images/${props.img}.webp`}
                alt={props.img}
                fill
                className="object-cover rounded-lg"
                loading="eager"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CoreTemplate
