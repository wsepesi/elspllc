import AboutPanel from '../components/AboutPanel'
import CorePanel from '../components/CorePanel'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import React from 'react'

const Home = (): React.ReactElement => {
  return (
    <div
      className="w-screen"
      style={{
        backgroundImage: 'url(/images/lake_4.webp)',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Navbar />
      <AboutPanel />
      <CorePanel />
      <Footer />
    </div>
  )
}

export default Home
