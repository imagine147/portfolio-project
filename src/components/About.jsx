import React from 'react'
import image from '../assets/icons/WhatsApp Image 2025-05-04 at 00.34.08_e427d06a.jpg'

const About = () => {
  return (
    <div className='w-full flex flex-col md:flex-row items-center md:gap-6  mx-auto px-6 lg:px-10 py-20 '>
      <img className='w-full h-80 md:h-2/3 md:w-96 object-cover mx-auto rounded-md shadow-lg transform transition-transform duration-550 hover:scale-105 hover:shadow-2xl' src={image} alt="about-img" />

      <div className='w-full md:w-1/2 text-center text-sm md:text-base md:text-start mx-auto '> 
        <h6 className='font-semibold text-sm mt-2 text-[#282938]'>About</h6>
        <div className='space-y-4'>
        <h1 className='text-3xl lg:text-4xl font-bold mt-4 text-[#282938] '>About Me</h1>
        <p className=''>I'm a Frontend Developer passionate about crafting dynamic, user-centered web applications. With a strong command of React, Next.js, and Tailwind CSS, i specialize in building responsive interfaces that balance performance, accessibiity, and modern design.</p>
        <p>When i'm not coding, you'll find me exploring new UI trends, refining components, or digging into web performance optimization.</p>
        </div>
      </div>
    </div>
  )
}

export default About