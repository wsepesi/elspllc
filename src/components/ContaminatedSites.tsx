import PracticeSpread from './PracticeSpread'
import React from 'react'

const ContaminatedSites = (): React.ReactElement => {
  return (
    <PracticeSpread
      id="contaminated"
      number="02"
      title="Contaminated Sites & Brownfields"
      imgAlt="Weathered industrial waste drums at a remediation site"
      img="drums"
      imageSide="right"
      kicker="Legal support for clients facing potential liability from third-party and legacy waste sites, and for the cleanup and redevelopment of contaminated property."
      services={[
        'Contaminated property issues under CERCLA, RCRA and related state statutes for owned, third-party and legacy sites',
        'Cost recovery, contribution, allocation and natural resource damage actions and defenses',
        'Response to agency information requests, cleanup orders and cost claims',
        'Cleanup and redevelopment of contaminated properties, including under state voluntary cleanup programs',
        'Negotiation of administrative orders and judicial consent decrees',
        'Federal and state liability protections for property purchases and brownfield developments',
      ]}
    />
  )
}

export default ContaminatedSites
