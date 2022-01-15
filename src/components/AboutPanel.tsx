import { Button, Typography } from '@material-ui/core'

import { NavLink } from 'react-router-dom'
import React from 'react'
import { SYSTEM_COLORS } from '../configs/colors'
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles({
    "@keyframes textEffect": {
        "0%": {
            backgroundPosition: 'right bottom'
        },
        "100%": {
            backgroundPosition: 'left bottom'
        }
    },
    wrapper: {
        width: '100vw',
        height: '100vh',
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: '40vh',
        margin: '25vh 0',
        width: '75vw',
        fontFamily: 'Libre Franklin',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: 64,
        // lineHeight: '78px',
        textAlign: 'center',
        // backgroundColor: SYSTEM_COLORS.WHITE,
        // opacity: .75
    },
    about: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 32,
        color: "#000000",
        fontStyle: 'normal',
        fontWeight: 'normal',
        '&:after': {
            backgroundColor: SYSTEM_COLORS.BLACK,
            height: 2
        },
        // backgroundColor: SYSTEM_COLORS.WHITE,
        opacity: .75,
        borderRadius: 0,
        '&:hover': {
            // backgroundColor: SYSTEM_COLORS.WHITE,
            opacity: .75,
        },
        width: '175px', //FIXME:
        height: '50px',
        margin: '35px 0px 0px 0px',
        background: 'linear-gradient(to left, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, .9) 50%)',
        backgroundSize: '200% 100%',
        animation: '$textEffect .75s ease-out',
    },
    highlight: {
        // background: SYSTEM_COLORS.WHITE,
        // background: 'linear-gradient(to left, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, .75) 50%)',
        // backgroundSize: '200% 100%',
        // backgroundPosition: 'right bottom',
        // float: 'left',
        // transition: 'all 1s ease',
        // backgroundPosition: 'right bottom',
        // '&:hover': {
        //     backgroundPosition: 'left bottom'
        // }
        // animation: '$textEffect 1.5s ease-in-out',
        // display: 'inline-block',
		// position: 'relative',
        // '&:after': {
        //     content: "''",
        //     position: 'absolute',
        //     transform: 'scaleX(1)',
        //     backgroundColor: SYSTEM_COLORS.WHITE,
        //     opacity: .75,
        //     height: 100,
        //     width: 100,
        //     bottom: 0,
		// 	left: 0,
        //     zIndex: 5,
        //     transformOrigin: 'center left',
        //     transition: 'transform 4s ease-in-out 2s',
        // },
        // backgroundColor: SYSTEM_COLORS.WHITE,
        // opacity: .75,
        // transition: 'opacity 2s ease-in-out 1s',
    }
})

const AboutPanel = (): React.ReactElement => {
    const classes = useStyles()
    return(
        <div className={classes.wrapper}>
            <div className={classes.text}>
                <Typography variant='h1'>
                    An environmental law practice grounded in <span className={classes.highlight}>science</span> and the <span className={classes.highlight}>law</span>
                </Typography>
                <Button className={classes.about} component={NavLink} to="/about">
                    About us
                </Button>
            </div>
        </div>
    )
}

export default AboutPanel