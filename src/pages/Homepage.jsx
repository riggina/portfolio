import React from 'react'
import Landing from '../components/Landing'
import About from '../components/About'

export default function Homepage() {
  return (
    <React.Fragment>
        <div className="mx-32 xs:mx-6">
          <Landing/>
          <About/>
        </div>
    </React.Fragment>
  )
}
