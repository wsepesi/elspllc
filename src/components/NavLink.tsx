'use client'

import Link from 'next/link'
import React from 'react'
import { cn } from '../utils/cn'
import { usePathname } from 'next/navigation'

type Props = {
  text: string
  to: string
}

const NavLink = ({ text, to }: Props): React.ReactElement => {
  const pathname = usePathname()
  const isActive = pathname === `/${to}`

  return (
    <Link
      href={`/${to}`}
      className={cn(
        'group relative px-3 py-2 text-sm font-libre tracking-wide transition-colors duration-300',
        isActive ? 'text-secondary' : 'text-gray-shade hover:text-secondary'
      )}
    >
      {text}
      <span
        aria-hidden
        className={cn(
          'pointer-events-none absolute left-3 right-3 bottom-1 h-px bg-secondary origin-left transition-transform duration-300 ease-out',
          isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
        )}
      />
    </Link>
  )
}

export default NavLink
