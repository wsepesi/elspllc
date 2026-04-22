'use client'

import NavLink from './NavLink'
import React from 'react'

const NavLinks = (): React.ReactElement => {
  return (
    <div className="hidden md:flex items-center gap-1 mr-6 md:mr-10 lg:mr-16">
      <NavLink text="About" to="about" />
      <NavLink text="Experience" to="experience" />
      <NavLink text="Practice Focus" to="practice_focus" />
      <NavLink text="Contact" to="contact" />
    </div>
  )
}

export default NavLinks
