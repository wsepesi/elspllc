import Logo from './Logo'
import NavLinks from './NavLinks'
import React from 'react'
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles({
    wrapper: {

    },
    text: {
        
    }
})

const Navbar = (): React.ReactElement => {
    const classes = useStyles()
    return(
        <div className={classes.wrapper}>
            <div className={classes.text}>
                <Logo />
                <NavLinks />
            </div>
        </div>
    )
}

export default Navbar