import CoreTemplate from './CoreTemplate'
import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles({
    wrapper: {
       
    },
})

const ContaminatedSites = (): React.ReactElement => {
    const classes = useStyles()
    return(
        <CoreTemplate mode="light" title="contaminated sites" img="drums" id="contaminated">
            <ul className={classes.wrapper}>
                <li>
                    <Typography>
                        CERCLA (Superfund) and similar third party and legacy site liabilities, defenses and management.
                    </Typography>
                </li>
            </ul>
        </CoreTemplate>
    )
}

export default ContaminatedSites