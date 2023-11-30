import React from 'react';
import Card from '../partials/Card';
import project from '../../local-json/project.json';
import { Link } from 'react-router-dom';


export default function Projects() {
  return (
    <>
      <div className='relative' id='project'>
        <div className='my-16' >
          <h1 className='text-7xl font-unbounded text-judgedark opacity-90'>Project My Project My Project My </h1>
        </div>
        <div className='mx-auto max-w-7xl grid grid-cols-4 xs:grid-cols-2 gap-6 group'>
        {project.projects && project.projects.map(({ id, title, description,titleLink, link, link2, titleLink2, image, tools}) => (
          <Card imgSrc={image} key={id}>
            <h3 className='text-md font-bold font-unbounded mb-2 text-center'>{title}</h3>
            <p className='font-poppins font-thin text-xs text-center'>{description}</p>
            <div className='space-x-2 my-4 flex justify-center'>
              <Link to={link}>
              <button className='btn p-2 bg-creole text-white rounded-md text-sm font-poppins hover:bg-rodeo'>
                {titleLink} 
              </button>
              </Link>
              {
                link2 && (
                <Link to={link2}>
                <button className='btn p-2 bg-creole text-white rounded-md text-sm font-poppins hover:bg-rodeo'>
                  {titleLink2} 
                </button>
                </Link>
              )}
            </div>
            <p className='text-xs font-poppins text-center'>{tools}</p>
        </Card>
        ))}
          
        </div>
      </div>
    </>
  )
}
