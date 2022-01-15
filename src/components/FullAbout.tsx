import React from 'react'
import { SYSTEM_COLORS } from '../configs/colors'
import { Typography } from '@material-ui/core'
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles({
    wrapper: {
        height: 'auto',
        margin: '7vh 0vw 0px 0px',
        padding: '0px 5vw 5vh 5vw',
        width: '80vw',
        backgroundColor: SYSTEM_COLORS.WHITE,
        opacity: .9
    },
    title: {
        margin: '2.5vh 0px 0px 0px'
    },
    text: {

    },
    centered: {
        display: 'flex',
        flexDirection: 'row',
    },
    photo: {
        margin: '0px 0px 0px 20px',
        height: '45vh',
        maxWidth: '30vw'
    }
})

const FullAbout = (): React.ReactElement => {
    const classes = useStyles()
    return(
        // <div className={classes.wrapper}>
        //     <div className={classes.title}>
        //         <Typography variant="h3">About</Typography>
        //         <hr />
        //     </div>
            <div className={classes.text}>
                <Typography variant="body1">
                    Environmental law services provided by Environmental Law and Science, PLLC are informed by our experiences as in-house environmental counsel at a Fortune 100 diversified, multi-national conglomerate, at Am Law 100 law firms, in solo practice and in environmental consulting.  We provide strong client advocacy, coupled with collaborative problem solving and practical solutions.
                </Typography>
                <br />
                <div className={classes.centered}>
                    <div>
                        <Typography variant="body1">
                            We work with businesses big and small, from startups to Fortune 100 companies, including manufacturers, commercial businesses, investors, financial instutions and property developers. In each situation we work to address their specific environmental needs.  We also team with law firms that require environmental law expertise for mergers and acquisitions, property transactions and clients facing environmental enforcement actions. Environmental Law and Science also provide environmental law expertise for general counsel offices lacking dedicated in-house environmental attorneys.
                        </Typography>
                        <br />
                        <Typography variant="body1">
                            Over the years, we have addressed environmental law issues in the courtroom and the board room, at the factory floor and Superfund sites.  Whether in the conference room, on a Zoom call, before a judge or at a regulatory agency, we have provided sophisticated, timely, practical and cost-effective environmental legal and regulatory representation and advice.  
                        </Typography>
                    </div>
                    <img src='/images/conference.png' alt='Jeff giving a talk at a conference' className={classes.photo}/>
                </div>
                <br />
                <Typography variant="body1">
                    At its core, the practice of environmental law solves intertwining legal and scientific considerations.  Effective representation requires not only understanding the environmental laws and regulations, but also their technical underpinnings. We provide this understanding. As a result, we effectively work and communicate with clients and their EHS staff, agency lawyers and technical staff, environmental consultants and experts.
                </Typography>
            </div>
        // </div>
    )
}

export default FullAbout