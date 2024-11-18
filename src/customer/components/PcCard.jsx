import React from 'react'

function PcCard() {
  return (
   <div className='cursor-pointer flex flex-col items-center bg-black rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3'>
    <div className='h-[13rem] w-[10rem]'>
        <img className='object-cover object-top w-full h-full' src='https://modxcomputers.com/wp-content/uploads/2022/11/Ant-Esports-ICE-110-Auto-RGB-E-ATX-Mid-Tower-Cabinet-Black.webp' alt='' />
    </div>
    <div className='p-4'>
        <h3 className='text-lg font-medium text-white'>PCWALA Budget PC Build</h3>
        <p className='mt-2 text-sm text-red-600'>From ₹20,000</p>
    </div>
   </div>

  )
}

export default PcCard