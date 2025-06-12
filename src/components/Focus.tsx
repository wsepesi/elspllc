import Image from 'next/image'
import React from 'react'

const Focus = (): React.ReactElement => {
  return (
    <div>
      <div className="flex flex-row justify-between my-[5vh]">
        <div className="w-1/2">
          <p className="text-base leading-relaxed mb-4">
            Environmental Law and Science, PLLC has experience with a wide range
            of environmental law matters and challenges at the federal level and
            in many states. Our practice focuses on four primary areas:
          </p>
          <ul className="space-y-3">
            <li className="my-[5px]">
              <p className="text-base leading-relaxed">
                <span className="font-bold">
                  Environmental Compliance and Advocacy{' '}
                </span>
                – advising and supporting clients in complying with the vast
                network of laws addressing air, water and waste, including
                permitting and auditing, as well the defense of agency
                enforcement actions
              </p>
            </li>
            <li className="my-[5px]">
              <p className="text-base leading-relaxed">
                <span className="font-bold">
                  Contaminated Sites and Brownfields{' '}
                </span>
                - providing legal support to clients regarding potential
                liability from third party and legacy waste sites, as well as
                the cleanup and redevelop of contaminated property
              </p>
            </li>
            <li className="my-[5px]">
              <p className="text-base leading-relaxed">
                <span className="font-bold">Business Transactions </span>–
                assisting clients with the environmental aspects of corporate,
                real estate and other business transactions
              </p>
            </li>
            <li className="my-[5px]">
              <p className="text-base leading-relaxed">
                <span className="font-bold">PFAS and Chemical Regulation </span>
                – providing strategic and compliance advice to clients on
                chemical product regulation, including PFAS and other emerging
                chemicals
              </p>
            </li>
          </ul>
          <p className="text-base leading-relaxed mt-4">
            Beyond these core areas, we have experience in a broad array of
            environmental, health and safety law issues, at the federal level
            and across the states, from Minnesota to the US Virgin Islands.
          </p>
        </div>
        <div className="w-1/2 flex justify-center items-center ml-[5vw]">
          <div className="w-[15vw]">
            <Image
              className="w-[15vw] h-[15vw]"
              src="/images/lab.webp"
              alt="Jeff working in a lab"
              width={400}
              height={300}
              style={{ objectFit: 'cover' }}
            />
            <Image
              className="w-[15vw] h-[15vw]"
              src="/images/drums_color.webp"
              alt="Waste drums"
              width={400}
              height={300}
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="w-[15vw]">
            <Image
              className="w-[15vw] h-[15vw]"
              src="/images/red.webp"
              alt="Superfund site on the US Virgin Islands"
              width={400}
              height={300}
              style={{ objectFit: 'cover' }}
            />
            <Image
              className="w-[15vw] h-[15vw]"
              src="/images/conference_2.webp"
              alt="Jeff presenting at a conference"
              width={400}
              height={300}
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Focus
