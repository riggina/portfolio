import React from 'react';
import circle from '../../assets/circle.png';
import MiddleImage from '../../assets/jh.jpg'

export default function StickyProfile() {

  return (
    <>
      <a href='#footer'>
      <div className=''>
        <img src={circle} alt='hire me' className='fixed z-10 w-40 right-10 bottom-10 animate-spin-slow'/>
        <img src={MiddleImage}
          className="rounded-full w-28 fixed right-16 bottom-16 z-10 hover:animate-pulse"
        alt='' />
      </div>
      </a>
    </>
  )
}
