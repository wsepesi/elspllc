'use client'

import Logo from './Logo'
import NavLinks from './NavLinks'
import NavLink from './NavLink'
import React, { useState } from 'react'
import { cn } from '../utils/cn'
import { Menu, X } from 'lucide-react'
import { Button } from './ui/button'

const Navbar = (): React.ReactElement => {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div
      className={cn(
        'bg-white/80 backdrop-blur-sm w-full h-16 flex flex-col',
        'fixed z-[5] top-0'
      )}
    >
      <div className="flex justify-between items-center h-16 shrink-0">
        <Logo />
        <NavLinks />
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden mr-3 sm:mr-6 hover:bg-transparent"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </Button>
      </div>
      {mobileOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-10 px-4 sm:px-6 py-4 flex flex-col gap-2">
          <NavLink text="About" to="about" />
          <NavLink text="Experience" to="experience" />
          <NavLink text="Practice Focus" to="practice_focus" />
          <NavLink text="Contact" to="contact" />
        </div>
      )}
    </div>
  )
}

export default Navbar
