import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles({
    
    centered: {
        display: 'flex',
        flexDirection: 'row',
    },
    photo: {
        margin: '0px 20px 0px 0px',
        height: 'auto',
        maxHeight: '30vh',
        // maxWidth: '30vw',
    },
    wrapper: {
        width: '65%',
        margin: '0px 10px 0px 0px'
    },
    name: {
        margin: '0px 0px 5px 0px'
    }
})

const ExperienceText = (): React.ReactElement => {
    const classes = useStyles()
    return(
        <div className={classes.wrapper}>
            <div className={classes.centered}>
                <img src='/images/headshot.png' alt='Jeff Sepesi' className={classes.photo}/>
                <div>
                    <Typography variant="h5" className={classes.name}>
                        Jeffery A. Sepesi
                    </Typography>
                    <Typography variant="body1">
                    Jeff's professional experience began with a start up environmental testing and consulting company, where he literally climbed smokestacks, went down sewers and ran an environmental laboratory.  He created his own interdisciplinary master’s program in hazardous waste management at the University of Michigan School of Public Health taking classes ranging from risk assessment and science policy to environmental engineering.   
                    </Typography>
                </div>
            </div>
            <br />
            <Typography variant="body1">
                Jeff was an environmental scientist at two nationally recognized environmental consulting firms, CH2M Hill and Barr Engineering. He performed site investigations and evaluations, health risk assessments and compliance evaluations for Superfund sites, MGP sites, refineries, landfills, commercial property and manufacturing operations.    
            </Typography>
            <br />
            <Typography variant="body1">
                Jeff has practiced environmental law for over 25 years at AmLaw 100 and mid-size law firms and in a solo practice. 
                During this time, he has addressed a broad range of environmental regulatory compliance, transactional and environmental litigation matters for clients ranging from oil companies to resort hotels. Jeff recently served as in-house environmental counsel at 3M Company, where his portfolio included facility environmental, safety and health, audits, OSHA complicance, TSCA compliance, site remediation, third party/legacy sites and PFAS issues.
                He also served on 3M's Institutional Review Board for human subject research.
            </Typography>
        </div>
    )
}

export default ExperienceText