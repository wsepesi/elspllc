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
                        Advice and guidance on PFAS issues, including emerging federal and state laws, regulations, policies, use restrictions, health science, remediation and litigation.
                    </Typography>
                </li>
                <li>
                    <Typography>
                        TSCA counseling and compliance, including requirements for new and existing chemicals, import and export requirements and reporting
                    </Typography>
                </li>
                <li>
                    <Typography>           
                        Emergency Planning and Community Right-to-Know Act (EPRCA) notification and reporting
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
                        State chemical regulation programs, including California Prop 65, Massachuesetts TURA
                    </Typography>
                </li>
            </ul>
        </CoreTemplate>
    )
}

export default PFAS