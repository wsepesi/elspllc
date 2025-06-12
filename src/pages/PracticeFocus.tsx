import BusinessTransactions from '../components/BusinessTransactions'
import Compliance from '../components/Compliance'
import ContaminatedSites from '../components/ContaminatedSites'
import Focus from '../components/Focus'
import PFAS from '../components/PFAS'
import Page from './Page'
import React from 'react'
import SimpleTemplate from '../components/SimpleTemplate'
// import Transition from '../components/Transition'

const PracticeFocus = (): React.ReactElement => {
  return (
    <Page>
      <SimpleTemplate title="Practice Focus">
        <Focus />
      </SimpleTemplate>
      {/* <Transition /> */}
      <Compliance />
      <ContaminatedSites />
      <BusinessTransactions />
      <PFAS />
    </Page>
  )
}

export default PracticeFocus
