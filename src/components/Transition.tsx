import React from 'react'
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles({
    wrapper: {
        // backgroundColor: SYSTEM_COLORS.WHITE,
        background: 'linear-gradient(180deg, rgba(255, 255, 255, .95) 0%, #1a1a1a 100%);',
        width: '90vw',
        height: '15vh',
    },
})

const Transition = (): React.ReactElement => {
    const classes = useStyles()
    return(
        <div className={classes.wrapper}>
            
        </div>
    )
}

export default Transition