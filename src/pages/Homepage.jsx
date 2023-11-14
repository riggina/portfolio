import React from 'react'
import Landing from '../components/Landing'
import About from '../components/About'
import Projects from '../components/Projects'


export default function Homepage() {
  return (
    <React.Fragment>
        <div className="">
          <Landing/>
          <About/>
          <Projects/>
        </div>
    </React.Fragment>
  )
}
