import { Button } from './ui/button'
import Link from 'next/link'
import React from 'react'
import { cn } from '../utils/cn'

const Logo = (): React.ReactElement => {
  return (
    <div className="flex ml-[5vw]">
      <Button
        variant="ghost"
        className={cn(
          'hover:bg-transparent p-0 h-auto font-medium text-base font-garamond',
          'after:bg-transparent after:h-0'
        )}
        asChild
      >
        <Link href="/">Environmental Law and Science, PLLC</Link>
      </Button>
    </div>
  )
}

export default Logo
