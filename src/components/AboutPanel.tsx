import React from 'react'

const AboutPanel = (): React.ReactElement => {
  return (
    <div className="relative w-full h-screen flex justify-center items-center">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 50% 28% at 50% 50%, rgba(255,255,255,0.22), rgba(255,255,255,0) 65%)',
        }}
      />
      <h1 className="relative max-w-3xl mx-auto px-6 text-center text-3xl md:text-[2.75rem] font-caslon font-normal leading-[1.15] tracking-tight text-black">
        An environmental law practice grounded in science and the law
      </h1>
    </div>
  )
}

export default AboutPanel
