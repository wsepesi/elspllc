import CoreTemplate from './CoreTemplate'
import React from 'react'

const ContaminatedSites = (): React.ReactElement => {
  return (
    <CoreTemplate
      mode="light"
      title="contaminated sites and brownfields"
      img="drums"
      id="contaminated"
    >
      <ul className="space-y-4">
        <li>
          <p className="text-base leading-relaxed">
            Contaminated property issues under CERCLA, RCRA and related state
            statues for owned, third party and legacy sites
          </p>
        </li>
        <li>
          <p className="text-base leading-relaxed">
            Cost recovery, contribution, allocation and natural resource damage
            actions and defenses
          </p>
        </li>
        <li>
          <p className="text-base leading-relaxed">
            Response to agency information requests, cleanup orders and cost
            claims
          </p>
        </li>
        <li>
          <p className="text-base leading-relaxed">
            Cleanup and redevelop of contaminated properties, including under
            state voluntary cleanup programs
          </p>
        </li>
        <li>
          <p className="text-base leading-relaxed">
            Negotiation of administrative orders and judicial consent decrees
          </p>
        </li>
        <li>
          <p className="text-base leading-relaxed">
            Federal and state liability protections for property purchases and
            brownfield developments
          </p>
        </li>
      </ul>
    </CoreTemplate>
  )
}

export default ContaminatedSites
