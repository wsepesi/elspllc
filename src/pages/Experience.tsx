import ExperienceDropdown from '../components/ExperienceDropdown'
import ExperienceText from '../components/ExperienceText'
import Page from './Page'
import React from 'react'
import SimpleTemplate from '../components/SimpleTemplate'
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles({
    wrapper: {
       display: 'flex',
       flexDirection: 'row',
    },

    title: {
        margin: '2.5vh 0px 0px 0px'
    },
})

const Experience = (): React.ReactElement => {
    const classes = useStyles()
    return(
        <Page>
            <SimpleTemplate title="Experience">
                <div className={classes.wrapper}>
                    <ExperienceText />
                    <ExperienceDropdown />
                </div>
            </SimpleTemplate>
        </Page>
    )
}

export default Experience