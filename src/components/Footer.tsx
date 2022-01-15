import { IconButton, Typography } from '@material-ui/core'

import { LinkedIn } from '@material-ui/icons'
import React from 'react'
import { SYSTEM_COLORS } from '../configs/colors'
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles({
    wrapper: {
        backgroundColor: SYSTEM_COLORS.BLACK,
        maxWidth: '100vw',
        minWidth: '100vw',
        minHeight: '7vh',
        display: 'flex',
        justifyContent: 'space-between',
        // flexDirection: 'column',
        alignItems: 'center',
    },
    text: {
        fontStyle: 'normal',
        fontSize: 14,
        color: SYSTEM_COLORS.WHITE,
        margin: '0px 0px 0px 50px'
    },
    icon: {
        margin: '0px 50px 0px 0px',
        color: SYSTEM_COLORS.WHITE,
    }
})

const Footer = (): React.ReactElement => {
    const classes = useStyles()
    return(
        <div className={classes.wrapper}>
            <Typography className={classes.text}>
                © 2021 Environmental Law PLLC. All rights reserved.
            </Typography>
            <IconButton className={classes.icon} href="https://www.linkedin.com/in/jeffery-sepesi-24980315">
                <LinkedIn />
            </IconButton>
        </div>
    )
}

export default Footer