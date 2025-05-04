import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from '../src/components/Hero'
import Skills from '../src/components/Skills'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import NavBar from './layouts/NavBar'
import Footer from './layouts/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <div className='font-roboto antialiased'>
    <NavBar/>
    <div id='hero'>
    <Hero/>
    </div>

    <div id='skills'>
    <Skills/> 
    </div>

    <div id='about'>
    <About/>
    </div>

    <div id='portfolio'>
    <Portfolio/>
    </div>

    <div id='testimonial'>
    <Testimonials/>
    </div>

    <div id='contact'>
    <Contact/>
    </div>
    
    
    <Footer/>
  </div>
    </>
  )
}

export default App
