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
        'w-[80vw] min-h-[75vh] h-auto',
        isDark
          ? 'bg-[#1a1a1a]/90 text-[#fafafa]'
          : 'bg-white/90 text-[#1a1a1a]',
        'backdrop-blur-sm'
      )}
      id={props.id}
    >
      <div
        className={cn(
          'm-[5vh_5vw] flex flex-col',
          isDark ? 'items-end' : 'items-start justify-start'
        )}
      >
        <h1 className="text-6xl font-playfair font-normal leading-tight tracking-tight">
          {props.title}
        </h1>
        <hr className="w-[85%] self-start my-2" />
        <div
          className={cn(
            'flex flex-row justify-between items-center my-[2.5vh] min-h-[45vh] gap-8'
          )}
        >
          {isDark && (
            <div className="w-[35vw] h-[40vh] relative flex-shrink-0">
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
            <div className="w-[35vw] h-[40vh] relative flex-shrink-0">
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
