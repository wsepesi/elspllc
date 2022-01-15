import React, { useEffect, useState } from 'react'

import { Button } from '@material-ui/core'
import { makeStyles } from "@material-ui/styles"
import { useLocation } from 'react-router-dom'

const useStyles = makeStyles({
    wrapper: {

    },
    button: {
        fontStyle: 'normal',
        fontWeight: 'normal'
    },
    here: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        '&:after': {
            transform: 'scaleX(1) translateX(-50%)',
            // transition: 'none', //TODO: do we like this
            left: '50%',
            width: '90%'
        }
    }
})

type Props = {
    text: string,
    to: string
}

const NavLink = (props: Props): React.ReactElement => {
    const [isHere, setIsHere] = useState<boolean>();
    const location = useLocation().pathname.replace('/', '')
    const classes = useStyles()

    useEffect(() => {
        if(props.to === location) {
            setIsHere(true);
        }
        else setIsHere(false);
    }, [props.to, location])

    //TODO: make these buttons, add hover effect, make button hover transparent
    return(
        <div className={classes.wrapper}>
            <Button 
                // disableFocusRipple={true}
                // disableElevation={true}
                // variant="text"
                href={props.to}
                className={!isHere ? classes.button : classes.here}
            >{props.text}</Button>
        </div>
    )
}

export default NavLink