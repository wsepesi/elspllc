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
                        Advising clients on environemntal risks across a wide range of business transactions, including mergers and acquisitions and real estate transactions
                    </Typography>
                </li>
                <li>
                    <Typography>
                        Manage and oversee environmental due diligence
                    </Typography>
                </li>
                <li>
                    <Typography>
                        Allocating environmental risks through transactional documents, environmental indemnities and alternative risk mitigation
                    </Typography>
                </li>
                <li>
                    <Typography>
                        Assistance in obtaining agency liability assurance letters
                    </Typography>
                </li>
                <li>
                    <Typography>
                        Support clients in investigating, buying or selling, cleaning up, and redeveloping contaminated property
                    </Typography>
                </li>
                <li>
                    <Typography>
                        Work closely with and manage environmental consultants during and after pre-acquisition due diligence
                    </Typography>
                </li>
            </ul>
        </CoreTemplate>
    )
}

export default BusinessTransactions