import React from 'react'

const BlueTransition = (): React.ReactElement => {
  return (
    <div
      className="w-[90vw] h-[150vh]"
      style={{
        background:
          'linear-gradient(180deg, rgba(255, 255, 255, 0.95) 0%, #000000 100%)',
      }}
    ></div>
  )
}

export default BlueTransition
