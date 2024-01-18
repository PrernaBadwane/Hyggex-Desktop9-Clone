import React from 'react'
import home from '../svg/home.svg'
import arrow from '../svg/arrow.svg'
import hint from '../svg/hint.svg'
import readloud from '../svg/readloud.svg'
import reload from '../svg/reload.svg'
import backwards from '../svg/backwards.svg'
import forwards from '../svg/forward.svg'
import logo from '../svg/logo.svg'
import logoname from '../svg/logoname.svg'
import expand from '../svg/expand.svg'
import add from '../svg/add.svg'

const Flashcard = () => {
    let example="9 + 6 + 7x - 2x - 3";
    let current=1; 
    let all=10;
  return (
    <div className='mt-[64px]'>
        <div className='flex flex-wrap h-[30px] w-[487px]'>
            <span className='flex flex-wrap font-inter text-[#696671] text-[18px] font-medium'>
            <img className='h-[21.25px] w-[20px] mx-[2.5px] my-[3.75px]'src={home}  alt="H" />
            <img className='h-[24px] w-[24px] my-[3px] 'src={arrow}  alt=">" />
            Flashcard
            </span>
            <span className='flex flex-wrap font-inter text-[#696671] text-[18px] font-medium'>
            <span className='flex flex-wrap '>
            <img className='h-[24px] w-[24px] my-[3px] 'src={arrow}  alt=">" />
            Mathematics
            </span>
            <span className='flex flex-wrap font-inter text-[#06286E] text-[18px] font-semibold'>
            <img  className='h-[24px] w-[24px] my-[3px]   'src={arrow}  alt=">" />
            Relation and Function
            </span>
            </span>
        </div>
        <div>
            <h4 className='font-montserrat font-bold text-[32px]  text-transparent bg-gradient-to-b from-[#06286E] to-[#164EC0] bg-clip-text mt-[64px]'>Relation and Function {"("} Mathematics {")"} </h4>
        </div>
        <div className='flex justify-center mt-[56px]  '>
            <ul className='flex flex-wrap gap-[40px] font-normal font-inter h-[29px]'>
                <li className='flex justify-center font-bold font-inter border-b-2 border-[#06286E] w-[82px] h-[32px]  text-[#06286E] text-[20px]'>Study</li>
                <li className='flex justify-center font-medium font-inter w-[82px] h-[32px]  text-[#696671] text-[20px] '>Quiz</li>
                <li className='flex justify-center font-medium font-inter w-[82px] h-[32px]  text-[#696671] text-[20px]' >Test</li>
                <li className='flex justify-center font-medium font-inter w-[82px] h-[32px] text-[#696671] text-[20px]' >Game</li>
                <li className='flex justify-center font-medium font-inter w-[82px] h-[32px]  text-[#696671] text-[20px] '>Others</li>
            </ul>
            </div>
        <div className='flex justify-center mt-[32px]'>
            
            <div className=''>
             <div className='h-[393.19px] w-[712px] border  bg-gradient-to-bl from-[#051A91] via-[#061C93] via-[#2284F1] to-[#1F80EB] rounded-[42.51px] '>
                <div className='flex flex-wrap justify-between m-[34.01px] ' >
                    <img  className='' src={hint}  alt="hint" />
                    <img src={readloud}  alt="readout" />
                </div>
                <div className='flex justify-center mt-[107px]  '>
                    <p className='font-bold font-loto h-[46px] text-[38.26px] text-white'>{example}</p>
                </div>
             </div>
             <div className='flex justify-center  '>
                <div className='flex flex-wrap justify-between mt-[32px] w-[612px] h-[60px] gap-[140px]'>
                    <img className='h-[30.02px] w-[30px] my-[15px] ' src={reload}  alt="readout" />
                    <div className='flex flex-wrap w-[272px] gap-[43px]'>
                        <img src={backwards}  alt="<-" />
                        <span className='flex justify-center font-bold font-inter w-[66px] h-[29.05px] my-[21.5px] text-[#202B37] text-[24px]'>{current}/{all}</span>
                        <img src={forwards}  alt="->" />
                    </div>
                    <img className='h-[30px] w-[30px] my-[15px] ' src={expand}  alt="expand" />
                </div>
                </div>
             </div>
        </div>
        <div className='flex flex-wrap justify-between mt-[80.9px]'>
            <div className='flex flex-wrap gap-[10.63px] '>
                <span className='h-[80.6px] w-[80.6px] border-0 rounded-full content-center shadow-logo shadow-blue/40'>
                <img className='w-[44.69px] h-[34.54px] my-[23.03px] mx-[17.71px] ' src={logo}  alt="logo" />
                </span>
                <span className='w-[115.14px] ml-[10.69px]'>
                <p className='font-inter text-[12.4px] font-bold text-[#696671] mb-[7.0px]'>Published by</p>
                <img src={logoname}  alt="logoname" />
                </span>
            </div>
            <div className='flex flex-wrap'>
               
                <img className='h-[60px] w-[60px] p-[5px]' src={add}  alt="+" />
                <span >
                <p className='pl-[8px] font-inter font-semibold text-[28px] my-[9px] text-transparent bg-gradient-to-b from-[#06286E] to-[#164EC0] bg-clip-text'> Create Flashcard</p>  
                </span>
            </div>
        </div>
    </div>
  )
} 

export default Flashcard


