// import { NavLink } from 'react-router-dom'
import NavLink from './NavLink'
import React from 'react'
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles({
    wrapper: {
        // flexDirection: 'column'
        display: "flex",
        margin: "0px 5vw 0px 0px"
    },
})

const NavLinks = (): React.ReactElement => {
    const classes = useStyles()
    
    return(
        <div className={classes.wrapper}>
            <NavLink 
                text="About"
                to="about"
            />
            <NavLink 
                text="Experience"
                to="experience"
            />
            <NavLink 
                text="Practice Focus"
                to="practice_focus"
            />
            {/* <NavLink 
                text="Presentations"
                to="presentations"
            /> */}
            <NavLink 
                text="Contact"
                to="contact"
            />
        </div>
    )
}

export default NavLinks