import { Button } from './ui/button'
import { Linkedin } from 'lucide-react'
import React from 'react'
import { cn } from '../utils/cn'

const Footer = (): React.ReactElement => {
  return (
    <div
      className={cn(
        'bg-black w-full min-h-[7vh] flex justify-between items-center'
      )}
    >
      <p className="text-white text-sm font-normal ml-12">
        © 2021 Environmental Law and Science, PLLC. All rights reserved.
      </p>
      <Button
        variant="ghost"
        size="icon"
        className="text-white mr-12 hover:bg-white/10"
        asChild
      >
        <a
          href="https://www.linkedin.com/in/jeffery-sepesi-24980315"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin className="h-5 w-5" />
        </a>
      </Button>
    </div>
  )
}

export default Footer
