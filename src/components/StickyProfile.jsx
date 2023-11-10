import React from 'react'
import circle from '../assets/circle.png';
import MiddleImage from '../assets/jh.jpg'

export default function StickyProfile() {

  return (
    <div className=''>
      <img src={circle} alt='hire me' className='fixed w-40 right-10 bottom-10 animate-spin-slow'/>
      <img src={MiddleImage}
         className="rounded-full w-28 fixed right-16 bottom-16"
      alt='' />
    </div>
  )
}
