import { Button, Typography } from '@material-ui/core'
import React, { useState } from 'react'

import { ArrowForward } from '@material-ui/icons'
import { Navigate } from 'react-router'
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles({
    wrapper: {
        width: '100vw',
        height: '60vh',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    quote: {
        fontStyle: 'italic',
        margin: '10px 0px'
    },
    contact: {
        margin: '3vh 0px 0px 0px',
        display: 'flex',
        padding: '0px 0px',
        '&:after': {
            width: '100%',
        }
    },
    quoteBox: {
        // width: 936,
        // height: 136,
        display: "flex",
        flexDirection: "row",
        justifyContent: "left",
        alignItems: 'center'
    },
    photo: {
        //circle of diameter 96
        minWidth: '96px',
        height: '96px',
        borderRadius: "50%",
        backgroundColor: "#123456",
        margin: '5px 20px 5px 0px'
    },
    quoteInfo: {
        height: 'auto',
        width: 'auto'
    },
    source: {
        color: '#0f8ffd'
    },
    centerPanel: {
        width: '70vw',
        // minHeight: '30vh',
        background: '#F3F3F2',
        padding: '5vh 5vw',
    },
    arrow: {
        margin: '0px 0px 0px 10px',
        width: '30px',
        height: '30px',
    }
})

const ContactPanel = (): React.ReactElement => {
    const [redirect, setRedirect] = useState<boolean>(false);
    const classes = useStyles()
    return(
        <div className={classes.wrapper}>
            <div className={classes.centerPanel}>
                <div className={classes.quoteBox}>
                    <div className={classes.photo}>

                    </div>
                    <div className={classes.quoteInfo}>
                        <Typography variant="h5" className={classes.quote}>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean volutpat eleifend ante at iaculis. Proin vel orci lobortis, mollis lorem vitae, auctor augue. Cras egestas velit ac urna luctus porta."
                        </Typography>
                        <Typography variant="h5" className={classes.source}>
                            Michael Sepesi, Esq.
                        </Typography>
                    </div>
                </div>
                <Button className={classes.contact} onClick={() => setRedirect(true)}>
                    <Typography variant="h4">contact us</Typography> <ArrowForward className={classes.arrow}/>
                </Button>
            </div>
            {redirect && <Navigate to="/contact"/>}
        </div>
    )
}

export default ContactPanel