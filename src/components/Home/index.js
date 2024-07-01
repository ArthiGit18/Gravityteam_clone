import React from 'react'
import Hero from '../../pages/hero'
import About from '../../pages/about'
import Sponsers from '../../pages/sponsers'
import '../../index.css'
import Testimonial from '../../pages/testimonial'
import Join from '../../pages/join'
import Contact from '../../pages/contact'
import Footer from '../../pages/footer'


const Main = () => {
  return (
    <>
      <Hero />
      <About />
      <Sponsers />
      <Testimonial />
      <Join />
      <Contact />
      <hr></hr>
      <Footer />
    </>
  )
}

export default Main