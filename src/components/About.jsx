import React from 'react'
import profile from '../assets/profile.svg';

export default function About() {
  return (
    <div id='aboutme'>
        <div className='flex flex-col gap-2 p-3 max-w-lg mx-32'>
            <div className='border'>
                <img src={profile} alt="" />
            </div>
        </div>
    </div>
  )
}
