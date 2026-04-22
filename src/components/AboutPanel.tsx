import { Button } from './ui/button'
import Link from 'next/link'
import React from 'react'
import { cn } from '../utils/cn'

const AboutPanel = (): React.ReactElement => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div
        className={cn(
          'flex flex-col items-center justify-center py-16 md:py-20',
          'w-full max-w-3xl mx-auto px-6',
          'font-libre text-center font-medium',
          'bg-white/80 backdrop-blur-sm'
        )}
      >
        <h1 className="text-4xl md:text-5xl font-playfair font-normal leading-tight tracking-tight">
          An environmental law practice grounded in science and the law
        </h1>
        <Button
          className={cn(
            'hover-underline flex justify-center items-center text-xl text-black',
            'rounded-sm w-44 h-12 mt-9 text-black',
            'bg-white/80 backdrop-blur-sm border border-black/10',
            'hover:bg-white/90 transition-all duration-300'
          )}
        >
          <Link href="/about" className="no-underline text-black">
            About us
          </Link>
        </Button>
      </div>
    </div>
  )
}

export default AboutPanel
