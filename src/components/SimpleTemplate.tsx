import React from 'react'
import { cn } from '../utils/cn'

type Props = {
  children: any
  title: string
}

const SimpleTemplate = (props: Props): React.ReactElement => {
  return (
    <div
      className={cn(
        'h-auto min-h-[81vh] mt-[7vh] px-[5vw] pb-[5vh] w-[80vw]',
        'bg-white/90 backdrop-blur-sm'
      )}
    >
      <div className="mt-[2.5vh]">
        <h3 className="text-4xl font-playfair font-normal leading-tight tracking-tight">
          {props.title}
        </h3>
        <hr className="pb-4" />
      </div>
      <div>{props.children}</div>
    </div>
  )
}

export default SimpleTemplate
