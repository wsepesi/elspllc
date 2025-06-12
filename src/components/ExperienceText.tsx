import Image from 'next/image'
import React from 'react'

const ExperienceText = (): React.ReactElement => {
  return (
    <div className="w-[65%] mr-[10px]">
      <div className="flex flex-row">
        <Image
          src="/images/headshot.webp"
          alt="Jeff Sepesi"
          className="mr-5 w-48 h-48 mt-[30px]"
          width={418}
          height={418}
        />
        <div>
          <h2 className="text-xl font-semibold mb-2">Jeffery A. Sepesi</h2>
          <p className="text-base leading-relaxed">
            Jeff's professional experience began with a start up environmental
            testing and consulting company, where he literally climbed
            smokestacks, went down sewers and ran an environmental laboratory.
            He created his own interdisciplinary master's program in hazardous
            waste management at the University of Michigan School of Public
            Health taking classes ranging from risk assessment and science
            policy to environmental engineering.
          </p>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-base leading-relaxed mb-4">
          Jeff was an environmental scientist at two nationally recognized
          environmental consulting firms, CH2M Hill and Barr Engineering. He
          performed site investigations and evaluations, health risk assessments
          and compliance evaluations for Superfund sites, MGP sites, refineries,
          landfills, commercial property and manufacturing operations.
        </p>
        <p className="text-base leading-relaxed">
          Jeff has practiced environmental law for over 25 years at AmLaw 100
          and mid-size law firms and in a solo practice. During this time, he
          has addressed a broad range of environmental regulatory compliance,
          transactional and environmental litigation matters for clients ranging
          from oil companies to resort hotels. Jeff recently served as in-house
          environmental counsel at 3M Company, where his portfolio included
          facility environmental, safety and health, audits, OSHA compliance,
          TSCA compliance, site remediation, third party/legacy sites and PFAS
          issues. He also served on 3M's Institutional Review Board for human
          subject research.
        </p>
      </div>
    </div>
  )
}

export default ExperienceText
