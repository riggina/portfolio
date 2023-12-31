import React from 'react'
import profile from '../../assets/profile.png';

export default function About() {
  return (
    <div className='' id='aboutme' >
        <svg className="h-10 sm:h-16 w-full rotate-180" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-slate-100"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className='fill-slate-50'></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className='fill-slate-50'></path>
        </svg>
        <div className='bg-slate-50 py-8 sm:py-24 mt-0'>
            <div className='max-w-6xl relative flex flex-row mx-auto gap-6'>
                <div className='hidden relative px-5 pt-5 max-w-md lg:inline'>
                    <img src={profile} alt=""/>
                </div>
                <div className="flex gap-1 sm:gap-5 flex-col justify-center p-3">
                    <h2 className='text-lg font-poppins font-semibold sm:text-3xl text-center lg:text-start '>Hi! I'am </h2>
                    <h2 className="text-xl sm:text-5xl font-unbounded font-bold text-flint tracking-wide text-center lg:text-start mb-2">Riggina Adriani Oceania</h2>
                    <p className='text-xxs sm:text-lg text-center lg:text-justify font-poppins'>Recent graduate in Informatics from the Kalimantan Institute of Technology with a keen interest in pursuing a career in Web Development. Passionate about creating innovative and user-friendly web solutions, equipped with strong programming and problem-solving skills. Eager to contribute to dynamic projects and continue learning in the ever-evolving field of web development.</p>
                </div>
            </div>
        </div>
        <svg className="h-8 sm:h-12 w-full" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path data-v-6da3ec0c="" d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-slate-50"></path>
        </svg>
      </div>
  )
}
