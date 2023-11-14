import React from 'react'
import Landing from '../components/sections/Landing'
import About from '../components/sections/About'
import Projects from '../components/sections/Projects'
import Contact from '../components/sections/Footer'


export default function Homepage() {
  return (
    <React.Fragment>
        <div className="">
          <Landing/>
          <About/>
          <Projects/>
          <Contact/>
        </div>
    </React.Fragment>
  )
}
