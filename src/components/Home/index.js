import React from 'react'
import Hero from '../../pages/hero'
import About from '../../pages/about'
import Sponsers from '../../pages/sponsers'
import '../../index.css'
import Testimonial from '../../pages/testimonial'
import Join from '../../pages/join'

const Main = () => {
  return (
    <>
      <Hero />
      <About />
      <Sponsers />
      <Testimonial />
      <Join />
    </>
  )
}

export default Main