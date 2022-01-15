import { Button, Typography } from '@material-ui/core'

import { NavLink } from 'react-router-dom'
import React from 'react'
// import { Receipt } from '@material-ui/icons'
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles({
    wrapper: {
        display: 'flex',
        // flexDirection: 'column'
        margin: "0px 0px 0px 5vw"
    },
    icon: {

    },
    button: {
        '&:hover': {
            background: 'none'
        },
        '&:after': {
            background: 'none',
            height: 0
        }
    }
})

const Logo = (): React.ReactElement => {
    const classes = useStyles()
    return(
        <div className={classes.wrapper}>
            {/* <Receipt className={classes.icon}/> */}
            <Button disableRipple component={NavLink} to="/" className={classes.button}>
                <Typography variant="subtitle2">Environmental Law and Science, PLLC</Typography>
            </Button>
            {/* <a href="/"><Typography variant="subtitle2">Environmental Law and Science, PLLC</Typography></a> */}
        </div>
    )
}

export default Logo