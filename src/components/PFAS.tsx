import PracticeSpread from './PracticeSpread'
import React from 'react'

const PFAS = (): React.ReactElement => {
  return (
    <PracticeSpread
      id="pfas"
      number="04"
      title="PFAS & Chemical Regulation"
      imgAlt="Molecular structure illustration"
      img="molecule"
      imageSide="right"
      kicker="Strategic and compliance advice on chemical product regulation, including PFAS and other emerging chemicals, across federal and state programs."
      services={[
        'PFAS advice and guidance — emerging federal and state laws, regulations, policies and use restrictions, plus PFAS health science, remediation and litigation',
        'TSCA counseling and compliance, including new and existing chemicals regulation, import and export requirements and reporting',
        'EPCRA notification and reporting',
        'Chemical release reporting',
        'Emerging chemical management concerns',
        'State chemical regulation programs',
      ]}
    />
  )
}

export default PFAS
