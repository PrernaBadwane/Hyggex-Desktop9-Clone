import React from 'react'
import Question from './Question'

const FAQ = () => {
  return (
    <div className='mt-[154.6px]'>
        <div className='text-5xl font-inter font-bold mb-[83px] text-transparent bg-gradient-to-b from-[#06286E] to-[#164EC0] bg-clip-text'> 
            <p className=' '>FAQ</p>
        </div>
        <div className='mb-[307px] '>
            <Question question="Can education flashcards be used for all age groups?"/>
            <Question question="How do education flashcards work?"/>
            <Question question="Can education flashcards be used for test preparation?"/>
        </div>
    </div>
  )
}

export default FAQ