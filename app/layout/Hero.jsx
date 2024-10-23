"use client"
import Button from '@/components/ui/Button'
import { hero, logos } from '@/constants'
import { heroDesktop, heroMobile } from '@/public/assets/images/hero'
import Image from 'next/image'
import React from 'react'
const Hero = () => {
    return (
        <div className='container flex flex-col gap-[4.375rem]'>
            <div className='flex justify-between'>
                <div className='flex flex-col  gap-[1.1875rem]'>
                    <h1 className='md:text-headingLarge text-headingLargeMobile md:max-w-[33.18rem]'>{hero[0].largeHeading}</h1>
                    {/* image animation */}
                    <Image className='md:hidden w-full' src={heroMobile} alt='hero logo'/>
                    <p className='md:text-headingXSmall text-headingXSmallMobile md:max-w-[31.125rem] opacity-[.7]'>{hero[0].paragraph}</p>
                    <Button className={"bg-black hover:bg-white text-white"}>Book a consultation</Button>
                </div>
                <div>
                    {/* image Animation */}
                    <Image className='max-md:hidden' src={heroDesktop} alt='hero social icon' />
                </div>
            </div>
            <div>
                <div className='flex md:justify-between justify-center flex-wrap md:gap-[5.96rem]  gap-[2rem]'>
                {logos.map((item,index) => (
                    <Image src={item.src} alt={item.alt} key={`_company-logo-${index}`} className=' text-gray-400 grayscale'/>
                ))}
            </div>  
            </div>
        </div>
    )
}

export default Hero