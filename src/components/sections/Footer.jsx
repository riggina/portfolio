import React, {useState} from 'react';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';
import axios from 'axios';


export default function Contact() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const handleSubmit= async (e) => {
    e.preventDefault();

    const data ={
      Name: name,
      Email: email,
      Message: message,
    }

    await axios.post('https://sheet.best/api/sheets/97676265-4209-4f14-b653-2215f0f7e1bf', data)
    .then((response)=> {
      setName('');
      setEmail('');
      setMessage('');
    })
    .catch((error)=>{
      console.error(error);
    })
  };

  return (
    <div id='contactme' className=''>
      <svg className="h-12 w-full rotate-180 mt-32" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path data-v-6da3ec0c="" d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white/10"></path>
      </svg>
      <div className='flex flex-col sm:flex-row bg-white/10 py-16 gap-5'>
        <div className='max-w-lg mx-auto'>
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
        <div className='max-w-lg mx-auto'>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
              <div className='flex flex-col lg:flex-row gap-4'>
                  <input onChange={(e) => setName(e.target.value)} value={name} type="name" placeholder='Write your name' className='font-poppins border-none p-3 rounded-lg bg-white/20 mix-blend-luminosity' required/>
                  <input onChange={(e) => setEmail(e.target.value)} value={email} placeholder='Write your email' className='font-poppins border-none p-3 rounded-lg bg-white/20 mix-blend-luminosity'/>
              </div>            
              <input onChange={(e) => setMessage(e.target.value)} value={message}  placeholder='Write your message' className='font-poppins border-none focus:outline-none p-3 rounded-lg bg-white/20 mix-blend-luminosity' required/>
              <button className='text-white p-3 rounded-lg hover:opacity-90 disabled:opacity-80 self-start w-sm bg-rodeo' type='submit'>Send Now</button>
          </form>
        </div>
      </div>
    </div>
  )
}
