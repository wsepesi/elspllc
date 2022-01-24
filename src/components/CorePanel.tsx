import Panel from './Panel'
import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles({
    wrapper: {
        width: '100vw',
        height: '75vh',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        // padding: 54
    },
    text: {
        width: '44.375vw',
        height: '65vh',
        margin: '5vh 3.75vw 5vh 0'
    },
    photo: {
        width: '44.375vw',
        height: '65vh',
        // height: 'auto',
        margin: '5vh 3.75vw 5vh 3.75vw'
    },
    panels: {
        display: "flex",
    },
    title: {
        fontSize: 76,
        fontStyle: 'normal',
        fontWeight: 'normal',
    }
})

const CorePanel = (): React.ReactElement => {
    const classes = useStyles()
    return(
        <div className={classes.wrapper}>
            <img className={classes.photo} src='/images/fire.jpg' alt='Cuyahoga River Fire'/>
            <div className={classes.text}>
                <Typography variant="h1" className={classes.title}>core practice areas</Typography>
                <div className={classes.panels}>
                    <div>
                        <Panel link={"practice_focus/#compliance"}>Environmental Compliance and Advocacy</Panel>
                        {/* FIXME: sublinks page location */}
                        <Panel link={"practice_focus/#business"}>Transactional Advice</Panel>
                    </div>
                    <div>
                        <Panel link={"practice_focus/#contaminated"}>Contaminated Sites and Brownfields</Panel>
                        <Panel link={"practice_focus/#pfas"}>PFAS and Chemical Regulation</Panel>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CorePanel