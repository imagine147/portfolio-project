import React from 'react'
import SkillCard from './reuseable/SkillCard'

const Skills = () => {
  return (
    <div className='bg-white px-6 lg:px-10 py-20'>
        <div className=' w-full flex flex-col gap-3 py-20 text-[#282938] text-center lg:text-start '>
            <h6 className='font-semibold text-sm'>My Skills</h6>
            <h1 className='font-bold text-3xl lg:text-4xl'>My Expertise</h1>
            <div></div>
        </div>
    <SkillCard/>
    </div>
  )
 }
 
 
 export default Skills