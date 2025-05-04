import React from 'react'
import image from '../assets/icons/WhatsApp Image 2025-05-03 at 23.07.16_31e8a40f.jpg'
import { Link } from 'react-scroll'

const Hero = () => {
  return (
    <div className='flex flex-col  gap-6 lg:gap-4  lg:flex-row bg-[#F5FCFF] w-full mx-auto px-6 lg:px-10 py-30 items-center '>
      <div className='flex flex-col gap-6 lg:gap-4 order-2 lg:order-1 items-center lg:items-start'>
        <h6 className='font-semibold text-sm text-[#282938] animate-bounce'>Hey, I am Olajide</h6>
        <h1 className='tracking-normal font-bold text-3xl lg:text-5xl text-center text-[#282938] lg:text-left'>I create modern, dynamic web apps designed around user needs and behaviors.</h1>
        <p className='text-sm tracking-tight text-start text-[#1C1E53] pb-10 pt-4'>With a strong foundation in React, Next.js, and Tailwind CSS, I bring ideas to life on the browser, balancing creativity with clean maintainable code.</p>
       <Link to='contact'> <div className='py-10'><button className='bg-blue-800 w-full text-white text-sm p-3 rounded-md shadow transform transition-transform duration-550 hover:scale-105 hover:shadow-lg'> Get In Touch</button></div></Link>
      </div>
      <div className='order-1 lg:order-2'>
        <img src={image} alt="developer-image" className="rounded-lg object-cover antialiased max-h-fit shadow-lg transform transition-transform duration-550 hover:scale-101 hover:shadow-2xl" />
      </div>
    </div>
  )
 }
 
 
 export default Hero