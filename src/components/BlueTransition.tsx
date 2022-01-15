import React from 'react'
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles({
    wrapper: {
        // backgroundColor: SYSTEM_COLORS.WHITE,
        background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.95) 0%, #000000 100%)',
        // boxShadow: '0px 50px 32px rgba(0, 0, 0, 0.12)',
        width: '90vw',
        height: '150vh',
    },
})

const BlueTransition = (): React.ReactElement => {
    const classes = useStyles()
    return(
        <div className={classes.wrapper}>
            
        </div>
    )
}

export default BlueTransition

