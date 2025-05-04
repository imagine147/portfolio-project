import React from 'react'
import { skills } from '../../Db'

const SkillCard = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 md:gap-6 w-full'>
      {skills.map((skill)=>(
        <div className='w-full h-auto md:w-[340px] mx-auto lg:w-full flex justify-center items-center p-6 border border-gray-200 rounded-md shadow-lg ' key={skill.id}>
          <div className='flex flex-col gap-6 '>
          <div className='bg-white p-4 w-16 h-16 flex justify-center rounded-md '>
            <img src={skill.icon} alt={skill.name}/>
            </div>
          <h4 className='font-bold text-[#282938] text-xl'> {skill.name}</h4>
          <p>{skill.desc}</p>
        </div>
          </div>
      ))}
    </div>
  )
 }
 
 
 export default SkillCard
