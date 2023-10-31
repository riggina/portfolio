import React from 'react'
import profile from '../assets/profile.png';

export default function About() {
  return (
    <div id='aboutme'>
        <div className='max-w-5xl relative flex mx-auto gap-28'>
            <div className='bg-slate-300 opacity-70 w-11/12 px-5 pt-5 rounded-lg'>
                <img className="" src={profile} alt="" />
            </div>
            <div className='translate-x-14 translate-y-3 rotate-3 absolute bg-slate-300 w-1/4 px-5 pt-5 rounded-lg'>
                <img src={profile} alt="" />
            </div>
            <div>
                <h2 className='text-3xl font-poppins font-semibold'>Hi! I'am </h2>
                <h className="text-5xl font-poppins font-bold text-rodeo tracking-wide">Riggina Adriani Oceania</h>
                <p className='my-3 text-justify text-md font-poppins'>Lorem ipsum dolor sit amet consectetur. Adipiscing pellentesque orci integer elit massa nisl rhoncus turpis dolor. Dictum varius rutrum enim consectetur nulla ultrices porttitor odio. Sem odio sed mauris vitae ut eu ut nulla sed. Penatibus ipsum sit purus feugiat amet vestibulum consectetur purus et. Integer rhoncus rutrum tortor enim amet. Amet vel pulvinar suspendisse tortor.</p>
            </div>
          </div>
      </div>
  )
}
