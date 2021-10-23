import React from 'react'
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles({
    wrapper: {

    }
})

const PracticeFocus = (): React.ReactElement => {
    const classes = useStyles()
    return(
        <div className={classes.wrapper}>
            
        </div>
    )
}

export default PracticeFocus