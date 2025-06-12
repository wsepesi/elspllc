import { Button } from './ui/button'
import Link from 'next/link'
import React from 'react'
import { cn } from '../utils/cn'

const AboutPanel = (): React.ReactElement => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div
        className={cn(
          'flex flex-col items-center justify-center h-[40vh] my-[25vh] w-3/4',
          'font-libre text-center font-medium text-6xl',
          'bg-white/80 backdrop-blur-sm p-8'
        )}
      >
        <h1 className="text-6xl font-garamond font-normal leading-tight tracking-tight">
          An environmental law practice grounded in science and the law
        </h1>
        <Button
          className={cn(
            'hover-underline flex justify-center items-center text-xl text-black',
            'rounded-none w-44 h-12 mt-9 text-black',
            'bg-white/80 backdrop-blur-sm',
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
