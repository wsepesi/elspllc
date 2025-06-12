import FullAbout from '../components/FullAbout'
import Page from './Page'
import React from 'react'
import SimpleTemplate from '../components/SimpleTemplate'

const About = (): React.ReactElement => {
  return (
    <Page>
      <SimpleTemplate title="About">
        <FullAbout />
      </SimpleTemplate>
      {/* <BlueTransition /> */}
    </Page>
  )
}

export default About
