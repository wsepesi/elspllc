import React from 'react'
import Link from 'next/link'
import { Card } from './ui/card'
import { cn } from '../utils/cn'

type Props = {
  link: string
  children: React.ReactNode
}

// add hover effect, add link
const Panel = (props: Props): React.ReactElement => {
  return (
    <Link
      href={props.link}
      className="block hover:scale-105 transition-transform duration-200"
    >
      <Card
        className={cn(
          'h-28 md:h-32 p-6 bg-white shadow-md rounded-sm',
          'border-l-2 border-primary/40',
          'hover:shadow-lg transition-shadow duration-200 cursor-pointer',
          'flex items-center justify-center'
        )}
      >
        <h5 className="text-xl font-medium text-center">{props.children}</h5>
      </Card>
    </Link>
  )
}

export default Panel
