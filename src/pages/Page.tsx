import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import React from 'react'

type Props = {
  children: any
}

const Page = (props: Props): React.ReactElement => {
  return (
    <div
      className="w-screen"
      style={{
        backgroundImage: 'url(/images/lake_4.webp)',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Navbar />
      <div className="flex flex-col justify-center items-center">
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Page
