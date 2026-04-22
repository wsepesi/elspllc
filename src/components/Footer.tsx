import { Button } from './ui/button'
import LinkedinIcon from './icons/LinkedinIcon'
import { cn } from '../utils/cn'

export default function Footer() {
  return (
    <div
      className={cn(
        'bg-[#1a1a1a] w-full py-5 flex justify-between items-center'
      )}
    >
      <p className="text-white text-xs sm:text-sm font-normal px-4 sm:px-6 md:px-10 lg:px-16 leading-snug">
        © 2026 Environmental Law and Science, PLLC. All rights reserved.
      </p>
      <Button
        variant="ghost"
        size="icon"
        className="text-white mr-3 sm:mr-6 md:mr-10 lg:mr-16 shrink-0 hover:bg-white/10"
        asChild
      >
        <a
          href="https://www.linkedin.com/in/jeffery-sepesi-24980315"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinIcon className="h-5 w-5" />
        </a>
      </Button>
    </div>
  )
}
