'use client'

import { Button } from './ui/button'
import Link from 'next/link'
import { cn } from '../utils/cn'
import { usePathname } from 'next/navigation'

type Props = {
  text: string
  to: string
}

const NavLink = (props: Props): React.ReactElement => {
  const pathname = usePathname()
  const location = pathname.replace('/', '')
  const isHere = props.to === location

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
