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
                        Advise clients on environmental risks in business transactions, including mergers and acquisitions and real estate transactions
                    </Typography>
                </li>
                <li>
                    <Typography>
                        Manage and oversee environmental due diligence
                    </Typography>
                </li>
                <li>
                    <Typography>
                        Environmental risks allocation through transactional documents, environmental indemnities and alternative risk mitigation
                    </Typography>
                </li>
                <li>
                    <Typography>
                        Securing liability assurance letters
                    </Typography>
                </li>
                <li>
                    <Typography>
                        Support contaminated property investigation, acquisition or sale, cleaning up, and redevelopment
                    </Typography>
                </li>
                <li>
                    <Typography>
                        Coordinate with environmental consultants
                    </Typography>
                </li>
            </ul>
        </CoreTemplate>
    )
}

export default BusinessTransactions