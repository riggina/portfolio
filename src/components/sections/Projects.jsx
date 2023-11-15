import React from 'react';
import jh from '../../assets/jh.jpg'
import Card from '../partials/Card';
import {BsGithub} from 'react-icons/bs';
import {VscPreview} from 'react-icons/vsc';
import project from '../../local-json/project.json';


export default function Projects() {
  return (
    <>
      <div className='relative'>
        <div className='my-16' >
          <h1 className='text-7xl font-unbounded text-judgedark opacity-90'>Project My Project My Project My </h1>
        </div>
        <div className='mx-auto max-w-6xl grid grid-cols-4 xs:grid-cols-2 gap-6 group'>
        {project.projects && project.projects.map(({ id, title, description}) => (
          <Card imgSrc={jh} key={id}>
            <h3 className='text-xl font-bold font-unbounded mb-2 text-center'>{title}</h3>
            <p className='font-poppins font-thin text-xs text-justify'>{description}</p>
            <div className='space-x-2 mt-4 flex justify-center'>
              <button className='btn p-1 bg-black/20 rounded-md'>
                <BsGithub/> 
              </button>
              <button className='btn p-1 bg-black/20 rounded-md'>
                <VscPreview/> 
              </button>
            </div>
        </Card>
        ))}
          
        </div>
      </div>
    </>
  )
}
