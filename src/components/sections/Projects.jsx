import React from 'react';
import Card from '../partials/Card';
import project from '../../local-json/project.json';
import { Link } from 'react-router-dom';


export default function Projects() {
  return (
    <>
      <div className='relative' id='project'>
        <div className='my-5 sm:my-16' >
          <h1 className='text-xl sm:text-7xl font-unbounded text-judgedark opacity-90 text-center'>My Projects</h1>
        </div>
        <div className='max-w-8xl flex flex-row flex-wrap gap-6 mx-auto justify-center'>
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
