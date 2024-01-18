import React from 'react'
import logo from '../logo.svg';
const Navbar = () => {
  return (
    <div className='flex flex-wrap justify-between  items-center'>
        <div className='mt-[32px]'>
        <img src={logo}  alt="logo" />
        
        </div>
        <div className='flex flex-wrap items-center pt-[27px]'>
             <ul className='flex flex-wrap items-center text-lg gap-[40px] font-normal font-inter' >
                <li>Home</li>
                <li>Flashcard</li>
                <li>Contact</li>
            </ul>
            <ul className='mx-[40px] font-normal text-lg font-inter'>
                <li>FAQ</li>
            </ul>

            <button type="button" class="border font-mediun font-inter text-white bg-gradient-to-b from-[#06286E] to-[#164EC0] w-[128px] h-[48px] rounded-[32px] ">Login</button>
        </div>
    
    </div>
  )
}

export default Navbar