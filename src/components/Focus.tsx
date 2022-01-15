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
        width: '100%',
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
    }
})

const Focus = (): React.ReactElement => {
    const classes = useStyles()
    return(
        <div>
            <div className={classes.wrapper}>
                <div className={classes.text}>
                    <Typography>
                            Environmental Law and Science, PLLC has experience across a wide range of environmental law matters and issues at the federal level and in many states.  Our core practice focus fall into four areas:
                    </Typography>
                    <ul>
                        <li className={classes.item}>
                            <Typography>
                                <span className={classes.emph}>Environmental Compliance and Advocacy </span>– advising and supporting clients in complying with the vast network of laws addressing air, water and waste, as well defense of agency actions.
                            </Typography>
                        </li>
                        <li className={classes.item}>
                            <Typography>
                                <span className={classes.emph}>Contaminated Sites and Brownfield Redevelopment </span>- providing legal support to clients regarding liability of environmental legacy site liabilities, as well as the clean up and redevelop of contaminated property.
                            </Typography>
                        </li>
                        <li className={classes.item}>
                            <Typography>
                                <span className={classes.emph}>Transactional Advice and Representation </span>– assisting clients in addressing the environmental aspects of corporate, real estate and other transactions
                            </Typography>
                        </li>
                        <li className={classes.item}>
                            <Typography>
                                <span className={classes.emph}>PFAS and Chemical Regulation </span>– providing strategic and compliance advice to clients on chemical product regulation, including emerging chemicals such as PFAS
                            </Typography>
                        </li>
                    </ul>
                </div>
                <div className={classes.space}><img className={classes.img} src="/images/lab.jpg" alt="Jeff working in a lab" /></div>
            </div>
            
        </div>
    )
}

export default Focus