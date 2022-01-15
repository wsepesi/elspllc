import { Card, CardActionArea, Typography } from '@material-ui/core'

import React from 'react'
import { makeStyles } from "@material-ui/styles"

type Props = {
    link: string,
    children: any,
}

const useStyles = makeStyles({
    panel: {
        // width: '21.25vw',
        height: '15vh',
        padding: 24,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        boxShadow: '0 20 20 rgba(41, 41, 42, .2)',
        borderRadius: 0,
        margin: '5px 5px'
    },
    text: {
        
    },
    action: {
        width: '21.25vw',
        height: '15vh',
    }
})

// add hover effect, add link
const Panel = (props: Props): React.ReactElement => {
    const classes = useStyles()
    return(
        <CardActionArea href={props.link}>
            <Card raised className={classes.panel}> 
                    <Typography variant="h5" className={classes.text}>{props.children}</Typography>
            </Card>
        </CardActionArea>
    )
}

export default Panel
