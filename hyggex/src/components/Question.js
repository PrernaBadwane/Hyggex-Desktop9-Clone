import React from 'react'
import dropdown from '../svg/dropdown.svg'

const Question = (props) => {
  return (
    <div className='border-0 rounded-xl w-[848px] my-[32px] bg-gradient-to-r from-[#217EEC] to-[#082299] p-[1px] '>
    <div className='  border-0 rounded-xl flex flex-wrap justify-between w-[848x] items-center bg-white'>
     
        <div className='text-sm font-inter text-[#28262C] m-[24px] font-semibold'>
         <p>{props.question}</p>
        </div>
        <div className='h-[24px] w-[24px] m-[24px]' >
        <img  className=' ' src={dropdown}  alt="v" /> 
        </div>
     
    </div>
    </div>
  )
}

export default Question
