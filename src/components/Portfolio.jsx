import React from 'react'
import PortfolioCard from './reuseable/PortfolioCard'
import image from '../assets/icons/Social button.png'


const Portfolio = () => {
  return (
    <div className='px-6 lg:px-10'>

    <div className='w-full flex flex-col mx-auto lg:flex-row lg:justify-between items-center pt-10 pb-4'>
    <div className='flex flex-col text-center gap-4 lg:text-start text-[#282938] '>
      <h6 className='font-semibold text-sm'>Recent Projects</h6>
      <h1 className='lg:text-start text-3xl lg:text-4xl font-bold'>My Portfolio</h1>
      </div>
       <a href='https://github.com/imagine147' target='_blank' rel='noopener noreferrer' className=''>
       <img className='pt-8 lg:pt-0' src={image} alt="GitHub Profile" />
       </a>
    </div>
  


      <PortfolioCard/>
    </div>
  )
}

export default Portfolio