import CoreTemplate from './CoreTemplate'
import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles({
    wrapper: {
       
    },
})

const Compliance = (): React.ReactElement => {
    const classes = useStyles()
    return(
        <CoreTemplate mode="dark" title="environmental compliance" img="epa" id="compliance">
            <ul className={classes.wrapper}>
                <li>
                    <Typography>
                        Facility EHS operation, management and regulatory compliance 
                    </Typography>
                </li>
                <li>
                    <Typography>
                        Environmental auditing, EHS compliance programs, internal investigations, release reporting and voluntary self-disclosures.
                    </Typography>
                </li>
                <li>
                    <Typography>
                        Enforcement response support for agency inspections, information requests, and enforcement actions
                    </Typography>
                </li>
                <li>
                    <Typography>
                        Compliance counseling, permitting, strategic planning, advocacy and enforcement response support for most Federal environmental laws and state law equivalents, including RCRA, CWA, CAA, EPCRA and TSCA
                    </Typography>
                </li>
                <li>
                    <Typography>
                        Occupational safety and health law compliance
                    </Typography>
                </li>
                <li>
                    <Typography>
                        Environmental litigation
                    </Typography>
                </li>
            </ul>
        </CoreTemplate>
    )
}

export default Compliance