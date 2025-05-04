import React from 'react'
import TestimonialCard from './reuseable/TestimonialCard'
import { Link } from 'react-scroll'

const Testimonials = () => {
  return (
    <div className='px-6 lg:px-10'>
      <div className='flex flex-col gap-4 text-center lg:text-start text-[#282938] pt-10'>
        <h6 className='text-sm font-semibold'>Clients Feedback</h6>
        <h1 className='text-2xl lg:text-4xl font-bold'>Customer testimonials</h1>
      </div>
      <TestimonialCard/>
    </div>
  )
}

export default Testimonials
