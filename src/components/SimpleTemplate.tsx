import React from 'react'
import { cn } from '../utils/cn'

type Props = {
  children: React.ReactNode
  title: string
}

const SimpleTemplate = (props: Props): React.ReactElement => {
  return (
    <div
      className={cn(
        'h-auto min-h-[calc(100vh-10rem)] mt-20 px-6 md:px-12 pb-12',
        'w-full max-w-5xl mx-auto',
        'bg-white/95 backdrop-blur-sm rounded-sm',
        'animate-fade-in'
      )}
    >
      <div className="mt-8">
        <h3 className="text-4xl font-playfair font-normal leading-tight tracking-tight">
          {props.title}
        </h3>
        <div className="h-px bg-secondary/20 mt-3 mb-6" />
      </div>
      <div>{props.children}</div>
    </div>
  )
}

export default SimpleTemplate
