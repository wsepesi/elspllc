import { Card, IconButton, Typography } from '@material-ui/core'
import { LinkedIn, Mail, Phone } from '@material-ui/icons'

import Page from './Page'
import React from 'react'
import { SYSTEM_COLORS } from '../configs/colors'
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles({
    wrapper: {
        padding: '7vh 0px',
        width: '100vw',
        minHeight: '79vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: SYSTEM_COLORS.SECONDARY_SHADE,
        // backgroundImage: `url(/images/fire.jpg)`,
    },
    card: {
        borderRadius: 0,
        backgroundColor: SYSTEM_COLORS.WHITE,
        opacity: .95,
        width: '50vw',
        height: '30vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    line: {
        width: '1px',
        height: '90%',
        backgroundColor: SYSTEM_COLORS.BLACK,
    },
    middle: {
        margin: '20px 0px'
    },
    contact: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    type: {
        display: 'flex',
        flexDirection: 'row',
        margin: '10px 10px',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        margin: '0px 10px'
    },
    in: {
        color: SYSTEM_COLORS.BLACK,
    }
})

const Contact = (): React.ReactElement => {
    const classes = useStyles()
    return(
        <Page>
            <div className={classes.wrapper}>
                {/* <Typography variant='h3'>
                    Contact Us
                </Typography>
                <Typography className={classes.middle} variant='body1'>
                    email or something
                </Typography> */}
                <Card className={classes.card}>
                    <Typography variant='h3'>
                        Contact Us
                    </Typography>
                    <div className={classes.contact}>
                        <div className={classes.type}>
                            <Mail className={classes.icon} />
                            <Typography variant='body1'>
                                j.sepesi@att.net
                            </Typography>
                        </div>
                        <IconButton className={classes.in} href="https://www.linkedin.com/in/jeffery-sepesi-24980315">
                            <LinkedIn />
                        </IconButton>
                        <div className={classes.type}> 
                            <Phone className={classes.icon} />
                            <Typography variant='body1'>
                                (952) 426-8279
                            </Typography>
                        </div>
                    </div>
                </Card>
            </div>
        </Page>
    )
}

export default Contact