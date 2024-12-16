import React from 'react'
import statsbanner from '../../assets/Images/statsbanner.png'

export default function Stats() {
  return (
    <div className='py-24 px-5 md:px-40 justify-between gap-10 md:gap-20 bg-[#F2F2F2] grid grid-cols-1 md:grid-cols-2 items-start'>
        <div className='flex justify-center'>
            <img src={statsbanner} alt="" className="max-w-full h-auto" />
        </div>

        <ul className='grid grid-cols-1 gap-[20px] w-full md:w-3/4'>
            <li className='flex items-center gap-3 md:gap-5'>
                <div className="border-l-4 border-[#4B00E6] h-16 md:h-24"></div>
                <div>
                    <h1 className='font-extrabold text-3xl md:text-5xl'>386 <small className='font-normal text-base md:text-lg text-[#7a7a7a]'>million</small></h1>
                    <span className='text-lg md:text-xl text-[#7a7a7a]'>Human Actions Saved On Techx</span>
                </div>
            </li>
            <li className='flex items-center justify-end gap-3 md:gap-5'>
                <div className="border-l-4 border-[#FF175F] h-16 md:h-24"></div>
                <div>
                    <h1 className='font-extrabold text-3xl md:text-5xl'>999 <small className='font-normal text-base md:text-lg text-[#7a7a7a]'>million</small></h1>
                    <span className='text-lg md:text-xl text-[#7a7a7a]'>Users Throughout The World</span>
                </div>
            </li>
            <li className='flex items-center gap-3 md:gap-5'>
                <div className="border-l-4 border-[#0A9980] h-16 md:h-24"></div>
                <div>
                    <h1 className='font-extrabold text-3xl md:text-5xl'>200 <small className='font-normal text-base md:text-lg text-[#7a7a7a]'>percent</small></h1>
                    <span className='text-lg md:text-xl text-[#7a7a7a]'>Revenue Growth</span>
                </div>
            </li>
            <li className='flex items-center justify-end gap-3 md:gap-5'>
                <div className="border-l-4 border-[#D65B00] h-16 md:h-24"></div>
                <div>
                    <h1 className='font-extrabold text-3xl md:text-5xl'>50  <small className='font-normal text-base md:text-lg text-[#7a7a7a]'>software</small></h1>
                    <span className='text-lg md:text-xl text-[#7a7a7a]'>Integration Support In Techx</span>
                </div>
            </li>
        </ul>
    </div>
  )
}
