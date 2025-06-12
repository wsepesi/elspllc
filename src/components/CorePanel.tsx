import Image from 'next/image'
import Panel from './Panel'
import React from 'react'
import { cn } from '../utils/cn'

const CorePanel = (): React.ReactElement => {
  return (
    <div
      className={cn(
        'w-screen h-[75vh] flex justify-center items-center',
        'bg-white/80 backdrop-blur-sm'
      )}
    >
      <Image
        className="w-[44.375vw] h-[65vh] m-[5vh_3.75vw_5vh_3.75vw]"
        src="/images/fire.webp"
        alt="Cuyahoga River Fire"
        width={800}
        height={600}
        priority
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknywtN9Fv2XMGZ9NE8RhNm6Vd8fzxuwS5W7b8X8Wv5kOgb1YCWMGc6KgSCWlCz/8V"
        style={{ objectFit: 'cover' }}
      />
      <div className="w-[44.375vw] h-[65vh] m-[5vh_3.75vw_5vh_0]">
        <h1 className="text-6xl font-playfair font-normal leading-tight tracking-tight">
          practice focus
        </h1>
        <div className="grid grid-cols-2 gap-x-6 gap-y-4 mt-12">
          <Panel link={'practice_focus/#compliance'}>
            Environmental Compliance and Advocacy
          </Panel>
          <Panel link={'practice_focus/#contaminated'}>
            Contaminated Sites and Brownfields
          </Panel>
          <Panel link={'practice_focus/#business'}>Business Transactions</Panel>
          <Panel link={'practice_focus/#pfas'}>
            PFAS and Chemical Regulation
          </Panel>
        </div>
      </div>
    </div>
  )
}

export default CorePanel
