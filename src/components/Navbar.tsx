import Logo from './Logo'
import NavLinks from './NavLinks'
import React from 'react'
import { SYSTEM_COLORS } from '../configs/colors'
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles({
    wrapper: {
        backgroundColor: SYSTEM_COLORS.WHITE,
        maxWidth: '100vw',
        minWidth: '100vw',
        height: '7vh',
        display: 'flex',
        justifyContent: 'space-between',
        // flexDirection: 'column',
        alignItems: 'center',
        opacity: .9,
        position: 'fixed',
        zIndex: 5
        // top: '-7vh'
    },
    text: {
        
    }
})

const Navbar = (): React.ReactElement => {
    const classes = useStyles()
    return(
        <div className={classes.wrapper}>
            <Logo />
            <NavLinks />
        </div>
    )
}

export default Navbar