import CoreTemplate from './CoreTemplate'
import React from 'react'

const BusinessTransactions = (): React.ReactElement => {
  return (
    <CoreTemplate
      mode="dark"
      title="transactional advice"
      img="business"
      id="business"
    >
      <ul className="space-y-4">
        <li>
          <p className="text-base leading-relaxed">
            Advise clients on environmental risks in business transactions,
            including mergers and acquisitions and real estate transactions
          </p>
        </li>
        <li>
          <p className="text-base leading-relaxed">
            Manage and oversee environmental due diligence
          </p>
        </li>
        <li>
          <p className="text-base leading-relaxed">
            Environmental risks allocation through transactional documents,
            environmental indemnities and alternative risk mitigation
          </p>
        </li>
        <li>
          <p className="text-base leading-relaxed">
            Securing liability assurance letters
          </p>
        </li>
        <li>
          <p className="text-base leading-relaxed">
            Support contaminated property investigation, acquisition or sale,
            cleaning up, and redevelopment
          </p>
        </li>
        <li>
          <p className="text-base leading-relaxed">
            Coordinate with environmental consultants
          </p>
        </li>
      </ul>
    </CoreTemplate>
  )
}

export default BusinessTransactions
