import Logo from './Logo'
import NavLinks from './NavLinks'
import React from 'react'
import { cn } from '../utils/cn'

const Navbar = (): React.ReactElement => {
  return (
    <div
      className={cn(
        'bg-white/80 backdrop-blur-sm w-full h-[7vh] flex justify-between items-center',
        'fixed z-[5] top-0'
      )}
    >
      <Logo />
      <NavLinks />
    </div>
  )
}

export default Navbar
