import CoreTemplate from './CoreTemplate'
import React from 'react'

const Compliance = (): React.ReactElement => {
  return (
    <CoreTemplate
      mode="dark"
      title="environmental compliance"
      img="epa"
      id="compliance"
    >
      <ul className="space-y-4">
        <li>
          <p className="text-base leading-relaxed">
            Facility EHS operation, management and regulatory compliance
          </p>
        </li>
        <li>
          <p className="text-base leading-relaxed">
            Environmental auditing, EHS compliance programs, internal
            investigations, release reporting and voluntary self-disclosures.
          </p>
        </li>
        <li>
          <p className="text-base leading-relaxed">
            Enforcement response support for agency inspections, information
            requests, and enforcement actions
          </p>
        </li>
        <li>
          <p className="text-base leading-relaxed">
            Compliance counseling, permitting, strategic planning, advocacy and
            enforcement response support for most Federal environmental laws and
            state law equivalents, including RCRA, CWA, CAA, EPCRA and TSCA
          </p>
        </li>
        <li>
          <p className="text-base leading-relaxed">
            Occupational safety and health law compliance
          </p>
        </li>
        <li>
          <p className="text-base leading-relaxed">Environmental litigation</p>
        </li>
      </ul>
    </CoreTemplate>
  )
}

export default Compliance
