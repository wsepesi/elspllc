import PracticeSpread from './PracticeSpread'
import React from 'react'

const BusinessTransactions = (): React.ReactElement => {
  return (
    <PracticeSpread
      id="business"
      number="03"
      title="Business Transactions"
      imgAlt="Professionals in discussion during a business transaction"
      img="business"
      imageSide="left"
      kicker="Counseling clients on the environmental aspects of corporate, real estate and other business transactions — from due diligence through risk allocation."
      services={[
        'Advising clients on environmental risks in business transactions, including mergers and acquisitions and real estate',
        'Managing and overseeing environmental due diligence',
        'Allocating environmental risk through transactional documents, environmental indemnities and alternative risk mitigation',
        'Securing liability assurance letters',
        'Supporting contaminated property investigation, acquisition, cleanup and redevelopment',
        'Coordinating with environmental consultants',
      ]}
    />
  )
}

export default BusinessTransactions
