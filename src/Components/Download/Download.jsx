import React from 'react'
import appbanner from '../../assets/Images/appbanner.png'

import { FaApple, FaGooglePlay } from 'react-icons/fa6'

export default function Download() {
  return (
    <div className='py-12 px-5 justify-between gap-10 grid grid-cols-1 md:grid-cols-2 items-center'>
      <div className='w-full flex flex-col gap-4'>
        <h2 className='font-extrabold text-3xl md:text-4xl'>
        Download Mobile App To Stay Connected
        </h2>

        <p className='text-base md:text-lg text-[#7a7a7a] font-semibold'>
        Techx Projects gives you the added advantage of several other Techx apps and third party apps through seamless integrations.
        </p>

        <div className='flex flex-col md:flex-row items-center justify-between gap-5'>
          <button className='flex items-center p-4 gap-2 rounded-lg w-full md:w-3/4 bg-gradient-to-r from-[#FF175F] to-[#FFAB00] text-white'>
            <FaGooglePlay className='text-2xl md:text-3xl'/>
            <div>
              <p className='text-base md:text-lg'>GET IT ON</p>
              <h3 className='font-semibold text-lg md:text-xl'>
                Google Play
              </h3>
            </div>
          </button>
          <button className='flex items-center p-4 gap-2 rounded-lg w-full md:w-3/4 bg-gradient-to-r from-[#4B00E6] to-[#8255D3] text-white'>
            <FaApple className='text-2xl md:text-3xl'/>
            <div>
              <p className='text-base md:text-lg'>GET IT ON</p>
              <h3 className='font-semibold text-lg md:text-xl'>
                App Store
              </h3>
            </div>
          </button>
        </div>

      </div>

      <div className='hidden md:block'>
        <img src={appbanner} alt="" />
      </div>

      
    </div>
  )
}
