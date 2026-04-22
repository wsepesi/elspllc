import Link from 'next/link'
import React from 'react'

const Logo = (): React.ReactElement => {
  return (
    <Link
      href="/"
      className="ml-4 sm:ml-6 md:ml-10 lg:ml-16 font-caslon text-[0.8rem] sm:text-[0.95rem] md:text-base tracking-wide text-gray-shade transition-colors duration-300 hover:text-secondary whitespace-nowrap"
    >
      Environmental Law and Science, PLLC
    </Link>
  )
}

export default Logo
