import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from "@material-ui/styles"

type Props = {
    mode: string,
    title: string,
    children: React.ReactNode,
    img: string,
    id: string
}

const useStyles = makeStyles({
    wrapper: {
       margin: '5vh 5vw',
       display: 'flex',
       justifyContent: 'left',
       flexDirection: 'column',
       alignItems: 'left',
    },
    dark: {
        width: "90vw",
        minHeight: '75vh',
        backgroundColor: '#1a1a1a',
        color: '#fafafa',
        height: 'auto',
    },
    light: {
        width: "90vw",
        minHeight: '75vh',
        backgroundColor: '#fafafa',
        color: '#1a1a1a',
        height: 'auto',
    },
    rule: {
        width: "85%",
        alignSelf: "left",
        justifySelf: "left",
        margin: "8px 0px",
    },
    textDark: {
        color: '#fafafa',
    },
    textLight: {
        color: '#1a1a1a',
    },
    title: {
        fontSize: 76,
        fontStyle: 'normal',
        fontWeight: 'normal',
    },
    img: {
        width: '25vw',
        height: 'auto',
        alignSelf: 'center',
        margin: '0px 10px',
    },
    content: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: '2.5vh 0px',
        padding: '0px 12vw 0px 0px',
        height: '45vh'
    },
    text: {
        // padding: '0px 15vw 0px 0px'
        minWidth: '25vw',
        margin: '0px 20px 0px 0px'
    },
    darkTitle: {
        // display: 'flex',
        // justifyContent: 'right',
        // margin: '0px 15% 0px 0px',
        margin: '5vh 5vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
    },
    lightTitle: {
    },
    contentDark: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: '2.5vh 0px',
        padding: '0px 0px 0px 12vw',
        height: '45vh'
    }
})

const CoreTemplate = (props: Props): React.ReactElement => {
    const classes = useStyles()
    return(
        <div className={props.mode === "dark" ? classes.dark : classes.light} id={props.id}>
            <div className={props.mode === "light" ? classes.wrapper : classes.darkTitle}>
                <Typography className={props.mode === "dark" ? classes.lightTitle : classes.lightTitle} variant="h1">
                    {props.title}
                </Typography>
                <hr className={classes.rule}/>
                <div className={props.mode === "dark" ? classes.contentDark : classes.content}>
                    {props.mode === "dark" && <img src={`/images/${props.img}.jpeg`} alt={props.img} className={classes.img}/>}
                    <div className={classes.text}>
                        {props.children}
                    </div>
                    {props.mode === "light" && <img src={`/images/${props.img}.jpeg`} alt={props.img} className={classes.img}/>}
                </div>
            </div>
        </div>
    )
}

export default CoreTemplate