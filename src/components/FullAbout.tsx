import Image from 'next/image'
import React from 'react'

const FullAbout = (): React.ReactElement => {
  return (
    <div>
      <p className="text-base leading-relaxed mb-2">
        Founded by Jeff Sepesi, Environmental Law and Science, PLLC provides
        environmental law services informed by his experiences serving as
        in-house environmental counsel at a Fortune 100 diversified,
        multi-national conglomerate, practicing at Am Law 100 law firms, in solo
        practice and in environmental consulting. We provide strong client
        advocacy, coupled with collaborative problem solving and practical
        solutions.
      </p>
      <div className="pl-8 mb-4">
        <div>
          →{' '}
          <a
            href="/experience"
            className="text-gray-700 hover:text-gray-900 hover:underline italic"
          >
            Our Experience
          </a>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center mb-4">
        <div>
          <p className="text-base leading-relaxed mb-2">
            We work with businesses big and small, from startups to Fortune 100
            companies. Clients have included manufacturers, technology
            companies, municipalities, resort hotels, commercial businesses,
            investors, financial institutions and property developers. In each
            situation we work to address each client's specific environmental
            law needs.
          </p>
          <div className="pl-8 mb-4">
            <div>
              →{' '}
              <a
                href="/representative_experience"
                className="text-gray-700 hover:text-gray-900 hover:underline italic"
              >
                Representative Experience
              </a>
            </div>
          </div>
          <p className="text-base leading-relaxed mb-4">
            We also team with law firms that require environmental law expertise
            in mergers and acquisitions, property transactions and clients
            facing environmental enforcement actions. The firm also provides
            environmental law expertise to general counsels at companies lacking
            dedicated in-house environmental attorneys.
          </p>
          <p className="text-base leading-relaxed">
            Over the years, we have addressed environmental law challenges from
            the courtroom to the board room, whether on factory floor or at
            hazardous waste sites. Whether in the conference room, on a Zoom
            call, before a judge or at a regulatory agency, we provide
            sophisticated, timely, practical and cost-effective environmental
            legal and regulatory representation and advice.
          </p>
        </div>
        <Image
          src="/images/conference.webp"
          alt="Jeff giving a talk at a conference"
          className="ml-5 h-[45vh]"
          width={500}
          height={375}
          priority
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
          style={{ objectFit: 'cover' }}
        />
      </div>
      <p className="text-base leading-relaxed mb-2">
        At its core, the practice of environmental law solves intertwining legal
        and scientific considerations. Effective representation requires not
        only understanding the environmental laws and regulations, but also
        their technical underpinnings. We provide this understanding. As a
        result, we effectively work and communicate with clients and their EHS
        staff, agency lawyers and technical staff, environmental consultants and
        experts.
      </p>
      <div className="pl-8">
        <div>
          →{' '}
          <a
            href="/practice_focus"
            className="text-gray-700 hover:text-gray-900 hover:underline italic"
          >
            Practice Focus
          </a>
        </div>
      </div>
    </div>
  )
}

export default FullAbout
