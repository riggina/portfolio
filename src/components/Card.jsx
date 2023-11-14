import React from 'react'

export default function Card({children, imgSrc, ...props}) {
  return (
    <div {...props} className='relative group-hover:blur-xs hover:!blur-none max-w-xs overflow-hidden rounded-3xl shadow-lg bg-white/10 p-2 cursor-pointer'>
        <img 
            src={imgSrc} 
            alt='' 
            className='mx-auto w-max mt-5 h-32'>
        </img>
        <div className=''>
            <div className='p-4 text-slate-900'>{children}</div>
        </div>
    </div>
  )
}
