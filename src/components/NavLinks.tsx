'use client'

import NavLink from './NavLink'
import React from 'react'

const NavLinks = (): React.ReactElement => {
  return (
    <div className="flex mr-[5vw]">
      <NavLink text="About" to="about" />
      <NavLink text="Experience" to="experience" />
      <NavLink text="Practice Focus" to="practice_focus" />
      <NavLink text="Contact" to="contact" />
    </div>
  )
}

export default NavLinks
