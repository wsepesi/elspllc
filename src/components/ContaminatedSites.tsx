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
                        Contaminated property issues under CERCLA, RCRA and related state statues for owned, third party and legacy sites
                    </Typography>
                </li>
                <li>
                    <Typography>
                        Cost recovery, contribution, allocation and natural resource damage actions and defenses
                    </Typography>
                </li>
                <li>
                    <Typography>
                        Response to agency information requests, cleanup orders and cost claims
                    </Typography>
                </li>
                <li>
                    <Typography>
                        Provide environmental legal support for cleanup and redevelop of contaminated properties, including under state voluntary cleanup programs
                    </Typography>
                </li>
                <li>
                    <Typography>
                        Negotiation of administrative orders and judicial consent decrees
                    </Typography>
                </li>
                <li>
                    <Typography>
                        Federal and state liability protections for property purchases and brownfield developments
                    </Typography>
                </li>
            </ul>
        </CoreTemplate>
    )
}

export default ContaminatedSites