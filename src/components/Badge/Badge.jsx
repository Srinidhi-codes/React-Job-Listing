import React from 'react'
import SandClock from '../../assets/sand-clock.svg'

function Badge() {
  return (
    <>
      <div className='w-[190px] py-[1rem]'>
        <div className='flex items-center justify-center gap-x-2 border rounded-full px-1 py-1 shadow-sm w-auto'>
          <img src={SandClock} alt="Sand-Clock" className='w-[15px] h-[1.5rem]' /><h1 className='text-[14px] font-sans'>Posted 10 days ago</h1>
        </div>
      </div>
    </>
  )
}

export default Badge