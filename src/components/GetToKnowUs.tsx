import { Card, CardActionArea, Typography } from '@material-ui/core'

import React from 'react'
import { SYSTEM_COLORS } from '../configs/colors'
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles({
    wrapper: {
        width: '70vw',
        padding: '15vh 10vw 10vh 10vw',
        display: 'flex',
        flexDirection: 'column',
        // background: '#4f708c',
        background: SYSTEM_COLORS.SECONDARY_SHADE,
        color: 'white',
        opacity: .95
    },
    one: {
        height: '50vh',
        width: '20vw',
        margin: '0px 2vw 0px 0px',
        borderRadius: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // background: 'url(/images/ladder.jpg)',
        // backgroundPosition: 'center',
        // backgroundSize: 'cover',
        // opacity: 1
    },
    two: {
        width: '48vw',
        height: '23.75vh',
        margin: '0px 0px 2.5vh 0px',
        borderRadius: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // background: 'url(/images/dragonfly.jpg)',
        // backgroundPosition: '40%',
        // backgroundSize: 'cover',
        // opacity: 1,
        // color: SYSTEM_COLORS.WHITE
    },
    three: {
        width: '18vw',
        height: '23.75vh',
        margin: '0px 2vw 0px 0px',
        borderRadius: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // background: 'url(/images/leaves.jpg)',
        // backgroundPosition: 'center',
        // backgroundSize: 'cover',
        // opacity: 1,
        // color: SYSTEM_COLORS.WHITE
    },
    four: {
        height: '23.75vh',
        width: '28vw',
        borderRadius: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // background: 'url(/images/mushrooms.jpg)',
        // backgroundPosition: 'center',
        // backgroundSize: 'cover',
        // opacity: 1,
        // color: SYSTEM_COLORS.WHITE
    },
    outer: {
        display: 'flex',
        flexDirection: 'row',
        margin: '5vh 0px',
    },
    inner: {
        display: 'flex',
        flexDirection: 'column',
    },
    inmost: {
        display: 'flex',
        flexDirection: 'row',
    },
    heading: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    rule: {
        width: '75%',
        backgroundColor: SYSTEM_COLORS.WHITE,
        height: '1px',
        border: 'none',
        // height: '20px',
        // width: '20px',
    }
})

const GetToKnowUs = (): React.ReactElement => {
    const classes = useStyles()
    return(
        <div className={classes.wrapper}>
            <div className={classes.heading}>
                <Typography variant="h4">Get to Know Us</Typography>
                <hr className={classes.rule}/>
            </div>
            <div className={classes.outer}>
                <CardActionArea href='/presentations'>
                    <Card className={classes.one}>
                        <Typography variant="h4">Presentations</Typography>
                    </Card>
                </CardActionArea>
                <div className={classes.inner}>
                    <CardActionArea href="/experience">
                        <Card className={classes.two}>
                            <Typography variant="h4">Our Experience</Typography>
                        </Card>
                    </CardActionArea>
                    <div className={classes.inmost}>
                        <CardActionArea href="/contact">
                            <Card className={classes.three}>
                                <Typography variant="h4">Contact Us</Typography>  
                            </Card>
                        </CardActionArea>
                        <CardActionArea href='/practice_focus'>
                            <Card className={classes.four}>
                                <Typography variant="h4">Practice Focus</Typography>    
                            </Card>
                        </CardActionArea>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetToKnowUs