import React from 'react'

export default function Form() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
        <form className='flex flex-col gap-4'>
            <div>
                <input type="name" placeholder='Write your name' className='font-poppins border-none focus:outline-none p-3 rounded-lg bg-white/20 mix-blend-luminosity mr-3'/>
                <input type="email" placeholder='Write your email' className='font-poppins border-none focus:outline:none p-3 rounded-lg bg-white/20 mix-blend-luminosity'/>
            </div>            
            <input type="text" placeholder='Write your message' className='font-poppins border-none focus:outline-none p-3 rounded-lg bg-white/20 mix-blend-luminosity'/>
            <button className='text-white p-3 rounded-lg hover:opacity-90 disabled:opacity-80 self-start w-sm bg-rodeo'>Send Now</button>
        </form>
    </div>
  )
}
