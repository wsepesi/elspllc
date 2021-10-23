import React from 'react'
import { Receipt } from '@material-ui/icons'
import { Typography } from '@material-ui/core'
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles({
    wrapper: {

    },
    icon: {

    }
})

const Logo = (): React.ReactElement => {
    const classes = useStyles()
    return(
        <div className={classes.wrapper}>
            <Receipt className={classes.icon}/>
            <Typography variant="subtitle2">Environmental Law and Science, PLLC</Typography>
        </div>
    )
}

export default Logo