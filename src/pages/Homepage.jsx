import React from 'react'
import Landing from '../components/Landing'
import About from '../components/About'

export default function Homepage() {
  return (
    <React.Fragment>
        <div className="">
          <Landing/>
          <About/>
        </div>
    </React.Fragment>
  )
}
