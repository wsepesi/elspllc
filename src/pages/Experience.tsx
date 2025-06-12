import ExperienceDropdown from '../components/ExperienceDropdown'
import ExperienceText from '../components/ExperienceText'
import Page from './Page'
import React from 'react'
import SimpleTemplate from '../components/SimpleTemplate'

const Experience = (): React.ReactElement => {
  return (
    <Page>
      <SimpleTemplate title="Experience">
        <div className="flex flex-row">
          <ExperienceText />
          <ExperienceDropdown />
        </div>
      </SimpleTemplate>
    </Page>
  )
}

export default Experience
