import CoreTemplate from './CoreTemplate'
import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles({
    wrapper: {
       
    },
})

const PFAS = (): React.ReactElement => {
    const classes = useStyles()
    return(
        <CoreTemplate mode="light" title="chemical regulation" img="molecule" id="pfas">
            <ul className={classes.wrapper}>
                <li>
                    <Typography>
                        PFAS advice and guidance, including emerging federal and state laws, regulations, policies, and use restrictions, as well as PFAS health science, remediation and litigation.
                    </Typography>
                </li>
                <li>
                    <Typography>
                        TSCA counseling and compliance, including new and existing chemicals regulation, import and export requirements and reporting
                    </Typography>
                </li>
                <li>
                    <Typography>           
                        EPCRA notification and reporting
                    </Typography>
                </li>
                <li>
                    <Typography>           
                        Chemical release reporting
                    </Typography>
                </li>
                <li>
                    <Typography>           
                        Emerging chemical management concerns
                    </Typography>
                </li>
                <li>
                    <Typography>           
                        State chemical regulation programs
                    </Typography>
                </li>
            </ul>
        </CoreTemplate>
    )
}

export default PFAS