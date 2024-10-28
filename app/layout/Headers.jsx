"use client"
import Button from '@/components/ui/Button'
import { header } from '@/constants'
import { BurgerMenuIcon, logoBlack } from '@/public/assets/icons/logo'
import Image from 'next/image'
import React, { useState } from 'react'
const Headers = () => {
    const [click, setClick] = useState(false)
    return (
        <div className='bg-white relative z-[99] pb-5'>
            <div className='md:h-[10.625rem] h-[5.375rem]' />
            <div className='container  top-[0] pb-[2rem] right-0 left-0 fixed font-thin text-headingXSmall flex items-center justify-center'>
                <div className='md:flex gap-4 pb-[1rem]  pt-[3.75rem] bg-white items-center w-full flex justify-between'>
                    {/* desktop */}
                            <div className='flex cursor-pointer items-center text text-headingSmall gap-2'>
                                <Image src={logoBlack} alt="Website logo" className='w-[2.25rem]' />
                                <span>Positivus</span>
                            </div>
                            <div className='flex items-center  gap-[2.5rem]'>
                                <ul className='md:flex flex-wrap justify-end hidden md:flex-row flex-col xl:gap-[40px] gap-[10px]'> 
                                    {header.map((item,index) => (
                                        <a href={item.link} key={index} ><li className='cursor-pointer  transition-all hover:opacity-[.5]'>{item.li}</li></a>
                                    ))}
                                </ul>
                        <Button className={" hover:bg-black w-[565px] max-md:hidden hover:text-white"}>Request a quote</Button>
                            </div>
                        {/* mobile */}
                    <div
                        onClick={() => setClick(!click)}
                        className='md:hidden relative text-[1.56rem] cursor-pointer'>
                    <Image src={BurgerMenuIcon} alt='Burger menu icon'/>
                    <div className={`flex border-2 text-headingXSmallMobile rounded-md bg-white z-[99] delay-75 border-black p-3 top-[7rem] transition-all right-0 fixed md:hidden items-center flex-col ${click ? "translate-x-[-0]" : "translate-x-[500px]"} bg-white`}>
                            <ul className='md:flex md:flex-row w-full bg-white text-center'> 
                                {header.map((item,index) => (
                                    <a href={item.link}><li key={index} className='cursor-pointer  transition-all hover:opacity-[.5]'>{item.li}</li></a>
                                ))}
                            </ul>
                            <Button className={"hover:bg-black  hover:text-white"}>Request a quote</Button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    )
}

export default Headers