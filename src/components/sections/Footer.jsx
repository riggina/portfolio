import React from 'react';
import Form from '../partials/Form.jsx';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <>
      <svg className="h-12 w-full rotate-180 mt-12" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path data-v-6da3ec0c="" d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white/10"></path>
      </svg>
      <div className='bg-white/10 py-9 flex flex-row'>
        <div className='mx-32'>
            <h1 className='font-unbounded text-xl text-creole '>Riggina's Portfolio</h1>
            <div className='mt-8'>
                <div className='flex'><MdEmail size={24} /><h1 className='font-poppins font-bold text-md mx-2'>Email: <span className='font-poppins font-light'>rigginaadrianio@gmail.com</span></h1></div>
                <div className='flex my-4'>
                  <FaGithub size={24}/><h1 className='font-poppins font-bold text-md mx-2'>Github: <Link to={"https://github.com/riggina"} className='font-poppins font-light hover:text-white'>riggina</Link></h1>
                </div>
                <div className='flex'>
                  <FaLinkedin size={24} /><h1 className='font-poppins font-bold text-md mx-2'>LinkedIn: <Link to={"https://www.linkedin.com/in/riggina-adriani-oceania-142045224/"} className='font-poppins font-light hover:text-white'>Riggina Adriani Oceania</Link></h1>
                </div>
            </div>
        </div>
        <Form/>
      </div>
    </>
  )
}
