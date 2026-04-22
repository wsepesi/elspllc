import { Button } from './ui/button'
import Link from 'next/link'
import React from 'react'
import { cn } from '../utils/cn'

const Logo = (): React.ReactElement => {
  return (
    <div className="flex ml-6 md:ml-10 lg:ml-16">
      <Button
        variant="ghost"
        className={cn(
          'hover:bg-transparent p-0 h-auto font-medium text-lg tracking-wide font-playfair',
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
