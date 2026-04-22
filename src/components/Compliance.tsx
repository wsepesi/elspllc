import PracticeSpread from './PracticeSpread'
import React from 'react'

const Compliance = (): React.ReactElement => {
  return (
    <PracticeSpread
      id="compliance"
      number="01"
      title="Environmental Compliance & Advocacy"
      imgAlt="EPA headquarters signage"
      img="epa"
      imageSide="left"
      kicker="Advising and supporting clients in complying with the vast network of laws addressing air, water and waste — from permitting and auditing to the defense of agency enforcement actions."
      services={[
        'Facility EHS operation, management and regulatory compliance',
        'Environmental auditing, EHS compliance programs, internal investigations, release reporting and voluntary self-disclosures',
        'Enforcement response support for agency inspections, information requests, and enforcement actions',
        'Compliance counseling, permitting, strategic planning, advocacy and enforcement response for most federal environmental laws and state equivalents — including RCRA, CWA, CAA, EPCRA and TSCA',
        'Occupational safety and health law compliance',
        'Environmental litigation',
      ]}
    />
  )
}

export default Compliance
