import {React} from 'react';
import jh from '../../assets/jh.jpg'
import Card from '../partials/Card';
import {BsGithub} from 'react-icons/bs';
import {VscPreview} from 'react-icons/vsc';


export default function Projects() {
  return (
    <>
      <div className='relative'>
        <div className='my-16' >
          <h1 className='text-7xl font-unbounded text-judgedark opacity-50'>Project My Project My Project My </h1>
        </div>
        <div className='mx-auto max-w-6xl grid grid-cols-4 xs:grid-cols-2 gap-6 group'>
          <Card imgSrc={jh}>
            <h3 className='text-xl font-bold font-unbounded mb-2 text-center'>HMIF CARE</h3>
            <p className='font-poppins font-thin text-xs text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Ipsum quis inventore, consequuntur corrupti maiores aspernatur iure? 
              Quia ullam ipsam facere molestiae sit commodi deserunt, repellendus saepe alias eaque ducimus id.</p>
            <div className='space-x-2 mt-4 flex justify-center'>
              <button className='btn p-1 bg-rodeo rounded-md'>
                <BsGithub/> 
              </button>
              <button className='btn p-1 bg-rodeo rounded-md'>
                <VscPreview/> 
              </button>
            </div>
          </Card>
          <Card imgSrc={jh}>
            <h3 className='text-xl font-bold font-unbounded mb-2 text-center'>HMIF CARE</h3>
            <p className='font-poppins font-thin text-xs text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Ipsum quis inventore, consequuntur corrupti maiores aspernatur iure? 
              Quia ullam ipsam facere molestiae sit commodi deserunt, repellendus saepe alias eaque ducimus id.</p>
            <div className='space-x-2 mt-4 flex justify-center'>
              <button className='btn p-1 bg-rodeo rounded-md'>
                <BsGithub/> 
              </button>
              <button className='btn p-1 bg-rodeo rounded-md'>
                <VscPreview/> 
              </button>
            </div>
          </Card>
          <Card imgSrc={jh}>
            <h3 className='text-xl font-bold font-unbounded mb-2 text-center'>HMIF CARE</h3>
            <p className='font-poppins font-thin text-xs text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Ipsum quis inventore, consequuntur corrupti maiores aspernatur iure? 
              Quia ullam ipsam facere molestiae sit commodi deserunt, repellendus saepe alias eaque ducimus id.</p>
            <div className='space-x-2 mt-4 flex justify-center'>
              <button className='btn p-1 bg-rodeo rounded-md'>
                <BsGithub/> 
              </button>
              <button className='btn p-1 bg-rodeo rounded-md'>
                <VscPreview/> 
              </button>
            </div>
          </Card>
          <Card imgSrc={jh}>
            <h3 className='text-xl font-bold font-unbounded mb-2 text-center'>HMIF CARE</h3>
            <p className='font-poppins font-thin text-xs text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Ipsum quis inventore, consequuntur corrupti maiores aspernatur iure? 
              Quia ullam ipsam facere molestiae sit commodi deserunt, repellendus saepe alias eaque ducimus id.</p>
            <div className='space-x-2 mt-4 flex justify-center'>
              <button className='btn p-1 bg-rodeo rounded-md'>
                <BsGithub/> 
              </button>
              <button className='btn p-1 bg-rodeo rounded-md'>
                <VscPreview/> 
              </button>
            </div>
          </Card>
          <Card imgSrc={jh}>
            <h3 className='text-xl font-bold font-unbounded mb-2 text-center'>HMIF CARE</h3>
            <p className='font-poppins font-thin text-xs text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Ipsum quis inventore, consequuntur corrupti maiores aspernatur iure? 
              Quia ullam ipsam facere molestiae sit commodi deserunt, repellendus saepe alias eaque ducimus id.</p>
            <div className='space-x-2 mt-4 flex justify-center'>
              <button className='btn p-1 bg-rodeo rounded-md'>
                <BsGithub/> 
              </button>
              <button className='btn p-1 bg-rodeo rounded-md'>
                <VscPreview/> 
              </button>
            </div>
          </Card>
          <Card imgSrc={jh}>
            <h3 className='text-xl font-bold font-unbounded mb-2 text-center'>HMIF CARE</h3>
            <p className='font-poppins font-thin text-xs text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Ipsum quis inventore, consequuntur corrupti maiores aspernatur iure? 
              Quia ullam ipsam facere molestiae sit commodi deserunt, repellendus saepe alias eaque ducimus id.</p>
            <div className='space-x-2 mt-4 flex justify-center'>
              <button className='btn p-1 bg-rodeo rounded-md'>
                <BsGithub/> 
              </button>
              <button className='btn p-1 bg-rodeo rounded-md'>
                <VscPreview/> 
              </button>
            </div>
          </Card>
          <Card imgSrc={jh}>
            <h3 className='text-xl font-bold font-unbounded mb-2 text-center'>HMIF CARE</h3>
            <p className='font-poppins font-thin text-xs text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Ipsum quis inventore, consequuntur corrupti maiores aspernatur iure? 
              Quia ullam ipsam facere molestiae sit commodi deserunt, repellendus saepe alias eaque ducimus id.</p>
            <div className='space-x-2 mt-4 flex justify-center'>
              <button className='btn p-1 bg-rodeo rounded-md'>
                <BsGithub/> 
              </button>
              <button className='btn p-1 bg-rodeo rounded-md'>
                <VscPreview/> 
              </button>
            </div>
          </Card>
        </div>
      </div>
    </>
  )
}
