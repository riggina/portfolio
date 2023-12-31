import React from 'react'

export default function Card({children, imgSrc, ...props}) {
  return (
    <div {...props} className='relative max-w-xs overflow-hidden rounded-3xl shadow-lg bg-white/10 p-5 border border-flintdark/30'>
        <img 
            src={imgSrc} 
            alt='' 
            className='mx-auto w-max mt-5 h-32 rounded-xl'>
        </img>
        <div className=''>
            <div className='p-4 text-slate-900'>{children}</div>
        </div>
    </div>
  )
}
