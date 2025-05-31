import React from 'react'
import { PiSpinnerBold } from "react-icons/pi";

const LoadingSpinner = () => {
  return (
    <div className='w-full h-full flex items-center justify-center absolute bg-blue-100 z-40'>
        <PiSpinnerBold color='black' size={50} className='animate-spin'/>
    </div>
  )
}

export default LoadingSpinner