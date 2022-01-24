import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import React from 'react'
import { SYSTEM_COLORS } from '../configs/colors'
import background from '../lake_4.jpg'
import { makeStyles } from "@material-ui/styles"

type Props = {
    children: any,
}

const useStyles = makeStyles({
    wrapper: {
        height: 'auto',
        margin: '7vh 0vw 0px 0px',
        padding: '0px 5vw 5vh 5vw',
        width: '80vw',
        backgroundColor: SYSTEM_COLORS.WHITE,
        opacity: .95
    },
    bg: {
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        margin: '2.5vh 0px 0px 0px'
    },
})

const Page = (props: Props): React.ReactElement => {
    const classes = useStyles()
    return(
        <div className={classes.bg}>
            <Navbar />
            <div className={classes.content}>
                {/* <div className={classes.wrapper}>
                    <div className={classes.title}>
                        <Typography variant="h3">{props.title}</Typography>
                        <hr />
                    </div>
                    <div>
                        {props.children}
                    </div>
                </div> */}
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default Page