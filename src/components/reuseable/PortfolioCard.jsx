import React from 'react'
import { GoArrowUpRight } from 'react-icons/go'
import { portfolio } from '../../Db'

const PortfolioCard = ({}) => {
  return (
   <div className='w-full flex flex-col lg:flex-row gap-8 py-20  '>
    

{portfolio.map((port)=>(
  <div className='lg:w-[40%] mx-auto flex flex-col gap-6 text-left ' key={port.id}>
  <img className='rounded-md' src={port.img} alt={port.name} />
 <div className='px-6 flex flex-col gap-2'>
 <h1 className='text-2xl font-bold text-[#282938]'>{port.name}</h1>
 <p>{port.desc}</p>
 </div>
  <a href={port.link} target='_blank' rel='noopener noreferrer' className='px-6 mb-20 font-semibold text-xl text-[#282938] '>
  <button className='border-b-2 border-purple-400 pb-4 flex'>{port.button} <GoArrowUpRight size={30}/> </button>
  </a>
  
</div>
))}
   </div>
  )
}

export default PortfolioCard
