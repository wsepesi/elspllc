import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles({
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: '5vh 0px',
    },
    emph: {
        fontWeight: 'bold'
    },
    img: {
        width: '15vw',
        height: '15vw',
    },
    text: {
        width: '50%'
    },
    space: {
        width: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0px 3vw'
    },
    item: {
        margin: '5px 0px',
    },
    nospace: {
        margin: '0px',
        width: '15vw'
    }
})

const Focus = (): React.ReactElement => {
    const classes = useStyles()
    return(
        <div>
            <div className={classes.wrapper}>
                <div className={classes.text}>
                    <Typography>
                        Environmental Law and Science, PLLC has experience with a wide range of environmental law matters and challenges at the federal level and in many states. 
                        Our practice focuses on four primary areas:
                    </Typography>
                    <ul>
                        <li className={classes.item}>
                            <Typography>
                                <span className={classes.emph}>Environmental Compliance and Advocacy </span>– advising and supporting clients in complying with the vast network of laws addressing air, water and waste, including permitting and auditing, as well the defense of agency enforcement actions
                            </Typography>
                        </li>
                        <li className={classes.item}>
                            <Typography>
                                <span className={classes.emph}>Contaminated Sites and Brownfields </span>- providing legal support to clients regarding potential liability from third party and legacy waste sites, as well as the cleanup and redevelop of contaminated property
                            </Typography>
                        </li>
                        <li className={classes.item}>
                            <Typography>
                                <span className={classes.emph}>Transactional Advice </span>– assisting clients with the environmental aspects of corporate, real estate and other business transactions
                            </Typography>
                        </li>
                        <li className={classes.item}>
                            <Typography>
                                <span className={classes.emph}>PFAS and Chemical Regulation </span>– providing strategic and compliance advice to clients on chemical product regulation, including PFAS and other emerging chemicals
                            </Typography>
                        </li>
                    </ul>
                    <Typography>
                        Beyond these core areas, we have experience in a broad array of environmental, health and safety law issues, at the federal level and across the states, from Minnesota to the US Virgin Islands.
                    </Typography>
                </div>
                <div className={classes.space}>
                    <div className={classes.nospace}>
                        <img className={classes.img} src="/images/lab.jpg" alt="Jeff working in a lab" />
                        <img className={classes.img} src='/images/drums_color.png' alt='Waste drums'/>
                    </div>
                    <div className={classes.nospace}>
                        <img className={classes.img} src='/images/red.png' alt='Superfund site on the US Virgin Islands'/>
                        <img className={classes.img} src="/images/conference_2.png" alt="Jeff presenting at a conference" />
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Focus