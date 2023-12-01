import React from 'react';
import circle from '../../assets/circle.png';
import MiddleImage from '../../assets/sticky.png'

export default function StickyProfile() {

  return (
    <>
      <a href='#contactme'>
      <div className=''>
        <img src={circle} alt='hire me' className='fixed z-10 w-28 sm:w-40 right-3 sm:right-10 bottom-10 animate-spin-slow'/>
        <img src={MiddleImage}
          className="rounded-full w-20 sm:w-28 fixed right-7 sm:right-16 bottom-14 sm:bottom-16 z-10 hover:animate-pulse"
        alt='' />
      </div>
      </a>
    </>
  )
}
