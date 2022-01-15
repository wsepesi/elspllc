import React from 'react'
import { SYSTEM_COLORS } from '../configs/colors'
import { Typography } from '@material-ui/core'
import { makeStyles } from "@material-ui/styles"

type Props = {
    children: any,
    title: string
}

const useStyles = makeStyles({
    wrapper: {
        height: 'auto',
        minHeight: '81vh',
        margin: '7vh 0vw 0px 0px',
        padding: '0px 5vw 5vh 5vw',
        width: '80vw',
        backgroundColor: SYSTEM_COLORS.WHITE,
        opacity: .95
    },
    title: {
        margin: '2.5vh 0px 0px 0px'
    },
})

const SimpleTemplate = (props: Props): React.ReactElement => {
    const classes = useStyles()
    return(
        <div className={classes.wrapper}>
            <div className={classes.title}>
                <Typography variant="h3">{props.title}</Typography>
                <hr />
            </div>
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default SimpleTemplate