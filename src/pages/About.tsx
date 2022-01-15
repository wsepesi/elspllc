import FullAbout from '../components/FullAbout'
import GetToKnowUs from '../components/GetToKnowUs'
import Page from './Page'
import React from 'react'
import SimpleTemplate from '../components/SimpleTemplate'

const About = (): React.ReactElement => {
    return(
        <Page>
            <SimpleTemplate title="About">
                <FullAbout />
            </SimpleTemplate>
            {/* <BlueTransition /> */}
            <GetToKnowUs />
        </Page>
    )
}

export default About