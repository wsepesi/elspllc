import React from 'react'
import Link from 'next/link'
import { Card } from './ui/card'
import { cn } from '../utils/cn'

type Props = {
  link: string
  children: any
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
          'h-[15vh] p-6 bg-white shadow-xl rounded-none m-[5px]',
          'hover:shadow-2xl transition-shadow duration-200 cursor-pointer',
          'flex items-center justify-center'
        )}
      >
        <h5 className="text-xl font-medium text-center">{props.children}</h5>
      </Card>
    </Link>
  )
}

export default Panel
