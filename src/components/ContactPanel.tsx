'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { ArrowRight } from 'lucide-react'
import { Button } from './ui/button'

const ContactPanel = (): React.ReactElement => {
  const router = useRouter()

  const handleContactClick = () => {
    router.push('/contact')
  }

  return (
    <div className="w-screen h-[60vh] flex justify-center items-center">
      <div className="w-[70vw] bg-white/80 backdrop-blur-sm p-[5vh_5vw] rounded-lg">
        <div className="flex flex-row justify-start items-center">
          <div className="min-w-24 h-24 rounded-full bg-[#123456] mr-5 my-[5px]"></div>
          <div className="h-auto w-auto">
            <h5 className="text-xl italic my-[10px]">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              volutpat eleifend ante at iaculis. Proin vel orci lobortis, mollis
              lorem vitae, auctor augue. Cras egestas velit ac urna luctus
              porta."
            </h5>
            <h5 className="text-xl text-[#0f8ffd]">Michael Sepesi, Esq.</h5>
          </div>
        </div>
        <Button
          variant="ghost"
          className="mt-[3vh] flex items-center p-0 hover-underline text-left justify-start"
          onClick={handleContactClick}
        >
          <h4 className="text-3xl">contact us</h4>
          <ArrowRight className="ml-[10px] w-[30px] h-[30px]" />
        </Button>
      </div>
    </div>
  )
}

export default ContactPanel
