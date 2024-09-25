"use client"
import { header } from '@/constants'
import { BurgerMenuIcon, logoBlack } from '@/public/assets/icons/logo'
import Image from 'next/image'
import React, { useState } from 'react'
const Headers = () => {
    const [click, setClick] = useState(false)
    return (
        <div className='container font-thin text-headingXSmall flex items-center justify-center'>
            <div className='md:flex gap-4 items-center w-full flex justify-between'>
                {/* desktop */}
                        <div className='flex cursor-pointer items-center text text-headingSmall gap-2'>
                            <Image src={logoBlack} alt="Website logo" className='w-[2.25rem]' />
                            <span>Positivus</span>
                        </div>
                        <ul className='md:flex hidden md:flex-row flex-col 2xl:gap-[40px] gap-[10px]'> 
                            {header.map((item,index) => (
                                <li key={index} className='cursor-pointer  transition-all hover:opacity-[.5]'>{item.li}</li>
                            ))}
                        </ul>
                        <div className='md:flex hidden border-solid hover:bg-black hover:text-white transition-all border-2 border-black rounded-lg py-[1.25rem] px-[2.1875rem] cursor-pointer'>
                            <span>Request a quoute</span>
                        </div>
                    {/* mobile */}
                <div
                    onClick={() => setClick(!click)}
                    className='md:hidden relative text-[1.56rem] cursor-pointer'>
                        
                  <Image src={BurgerMenuIcon} alt='Burger menu icon'/>
                   <div className={`flex border-2 text-headingXSmallMobile rounded-md delay-75 border-black p-3 top-[7rem] transition-all right-0 fixed md:hidden items-center flex-col ${click ? "translate-x-[-0]" : "translate-x-[500px]"} bg-white`}>
                        <ul className='md:flex md:flex-row flex-col flex-wrap gap-[40px]'> 
                            {header.map((item,index) => (
                                <li key={index} className='cursor-pointer  transition-all hover:opacity-[.5]'>{item.li}</li>
                            ))}
                        </ul>
                        <div className='border-solid hover:bg-black hover:text-white transition-all border-2 border-black rounded-lg py-[1.25rem] px-[2.1875rem] cursor-pointer'>
                            <span>Request a quoute</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Headers