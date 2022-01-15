import CoreTemplate from './CoreTemplate'
import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles({
    wrapper: {
       
    },
})

const BusinessTransactions = (): React.ReactElement => {
    const classes = useStyles()
    return(
        <CoreTemplate mode="dark" title="transactional advice" img="business" id="business">
            <ul className={classes.wrapper}>
                <li>
                    <Typography>
                        Environmental support and advice accross a wide range of business transactions
                    </Typography>
                </li>
                <li>
                    <Typography>
                        Environmental due diligence for corporate mergers and acquisitions,
                    </Typography>
                </li>
                <li>
                    <Typography>
                        Post-acquisition self disclosures
                    </Typography>
                </li>
                <li>
                    <Typography>
                        Environmental issues for real estate transactions
                    </Typography>
                </li>
                <li>
                    <Typography>
                        Assistance with agency liability assurance letters and BFPP requirements
                    </Typography>
                </li>
                <li>
                    <Typography>
                        Environmental legal support for property clean up, redevelop of contaminated property, Brownfield redevelopment and voluntary cleanups
                    </Typography>
                </li>
            </ul>
        </CoreTemplate>
    )
}

export default BusinessTransactions