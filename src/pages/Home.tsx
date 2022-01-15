import AboutPanel from '../components/AboutPanel'
// import ContactPanel from '../components/ContactPanel'
import CorePanel from '../components/CorePanel'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import React from 'react'
import background from '../lake.png'
import { makeStyles } from "@material-ui/styles"

const useStyles = makeStyles({
    wrapper: {
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
    }
})

const Home = (): React.ReactElement => {
    const classes = useStyles()
    return(
        <div className={classes.wrapper}>
            <Navbar />
            <AboutPanel />
            <CorePanel />
            {/* <ContactPanel /> */}
            <Footer />
        </div>
    )
}

export default Home