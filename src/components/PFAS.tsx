import CoreTemplate from './CoreTemplate'
import React from 'react'

const PFAS = (): React.ReactElement => {
  return (
    <CoreTemplate
      mode="light"
      title="chemical regulation"
      img="molecule"
      id="pfas"
    >
      <ul className="space-y-4">
        <li>
          <p className="text-base leading-relaxed">
            PFAS advice and guidance, including emerging federal and state laws,
            regulations, policies, and use restrictions, as well as PFAS health
            science, remediation and litigation.
          </p>
        </li>
        <li>
          <p className="text-base leading-relaxed">
            TSCA counseling and compliance, including new and existing chemicals
            regulation, import and export requirements and reporting
          </p>
        </li>
        <li>
          <p className="text-base leading-relaxed">
            EPCRA notification and reporting
          </p>
        </li>
        <li>
          <p className="text-base leading-relaxed">
            Chemical release reporting
          </p>
        </li>
        <li>
          <p className="text-base leading-relaxed">
            Emerging chemical management concerns
          </p>
        </li>
        <li>
          <p className="text-base leading-relaxed">
            State chemical regulation programs
          </p>
        </li>
      </ul>
    </CoreTemplate>
  )
}

export default PFAS
