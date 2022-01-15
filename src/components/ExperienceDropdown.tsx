import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@material-ui/core'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import React from 'react'
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles({
    wrapper: {
        width: '35%',
    },
    bar: {
        display: 'flex',
        flexDirection: 'column',
    }
})

const ExperienceDropdown = (): React.ReactElement => {
    const [expanded, setExpanded] = React.useState<string>('');

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const handleClick = (to: string) => {
        window.location.href = "/" + to
    }

    const classes = useStyles()
    return(
        <div className={classes.wrapper}>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                    <Typography>Education</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <ul>
                        <li>
                            <Typography variant="body1">
                                University of Minnesota Law School, JD cum laude, Dean's List
                            </Typography>
                        </li>
                        <li>
                            <Typography>
                                University of Michigan School of Public Health, MPH
                            </Typography>
                        </li>
                        <li>
                            <Typography>
                                Washington University in St. Louis, BA Biology
                            </Typography>
                        </li>
                    </ul>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                >
                    <Typography>Bar Admissions</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div className={classes.bar}>
                        <ul>
                            <li>
                                <Typography>
                                    Minnesota (1994)
                                </Typography>
                            </li>
                            <li>
                                <Typography>
                                    Illinois (1995)
                                </Typography>
                            </li>
                        </ul>
                        <Typography>
                            Admitted to:
                        </Typography>
                        <ul>
                            <li>
                                <Typography>
                                    U.S. District Court Northern District of Illinois (1996; trial bar 2004)
                                </Typography>
                            </li>
                            <li>
                                <Typography>
                                    U.S. District Court District of Minnesota (1997)
                                </Typography>
                            </li>
                            <li>
                                <Typography>
                                    U.S. District Court Central District of Illinois (1999)
                                </Typography>
                            </li>
                            <li>
                                <Typography>
                                    U.S. District Court Southern District of Illinois (2000)
                                </Typography>
                            </li>
                            <li>
                                <Typography>
                                    Third Circuit Court of Appeals (2011)
                                </Typography>
                            </li>
                        </ul>
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
                >
                    <Typography>Organizations</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <ul>
                        <li>
                            <Typography>
                                Commissioner, Minneapolis Environmental Commission (1992-1994)
                            </Typography>
                        </li>
                        <li>
                            <Typography>
                                Minnesota State Bar Association, Section on Environmental, Natural Resources & Energy Law: Governing Council Delegate (2007-2014, 2019-2021), Secretary (2014-2015), Treasurer (2015-2016), Vice-Chair (2016-2017), Chair (2017-2018)
                            </Typography>
                        </li>
                        <li>
                            <Typography>
                                Minnesota CLE's Minnesota Environmental Institute Planning Committee (2009-2021)
                            </Typography>
                        </li>
                        <li>
                            <Typography>
                                Minnesota Brownfields ReScape Awards Judge (2013-2015)
                            </Typography>
                        </li>
                    </ul>
                </AccordionDetails>
            </Accordion>
            {/* <List>
                <ListItem button>
                    <ListItemLink href="/">
                        <ListItemText>
                            <Typography>
                                Publications
                            </Typography>
                        </ListItemText>
                    </ListItemLink>
                </ListItem>
            </List> */}


            {/* <Accordion>
                <AccordionSummary
                onClick={() => handleClick('biography')}
                aria-controls="panel2a-content"
                id="panel2a-header"
                >
                    <Typography variant="body1">Biography</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion> */}
            <Accordion>
                <AccordionSummary
                onClick={() => handleClick('presentations')}
                aria-controls="panel2a-content"
                id="panel2a-header"
                >
                    <Typography>Presentations</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default ExperienceDropdown