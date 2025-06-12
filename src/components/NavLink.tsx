'use client'

import React, { useEffect, useState } from 'react'

import { Button } from './ui/button'
import Link from 'next/link'
import { cn } from '../utils/cn'
import { usePathname } from 'next/navigation'

type Props = {
  text: string
  to: string
}

const NavLink = (props: Props): React.ReactElement => {
  const [isHere, setIsHere] = useState<boolean>()
  const pathname = usePathname()
  const location = pathname.replace('/', '')

  useEffect(() => {
    if (props.to === location) {
      setIsHere(true)
    } else setIsHere(false)
  }, [props.to, location])

  return (
    <Button
      variant="ghost"
      className={cn(
        'font-normal hover-underline hover:bg-transparent',
        isHere && 'active'
      )}
      asChild
    >
      <Link href={`/${props.to}`}>{props.text}</Link>
    </Button>
  )
}

export default NavLink
