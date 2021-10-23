import { Link, useLocation } from 'react-router-dom'

import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles({
    wrapper: {

    }
})

type Props = {
    text: string,
    dest: string
}

const NavLink = (props: Props): React.ReactElement => {
    const location = useLocation().pathname.replace('/', '')
    const classes = useStyles()
    return(
        <div className={classes.wrapper}>
            <Typography 
                variant="body2"
                component={Link}
                to={`/${props.dest}`}
            >{props.text}</Typography>
        </div>
    )
}

export default NavLink