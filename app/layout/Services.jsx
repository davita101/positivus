"use client"
import Button from '@/components/ui/Button'
import LinkIcon from '@/components/ui/LinkIcon'
import { servicesFooter, servicesHeading, servicesInfo } from '@/constants'
import { black, green } from '@/public/assets/icons/links'
import Image from 'next/image'
import React from 'react'

const Services = () => {
    // handle bg color
    const handleBgColor = (index) => {
        if ([0, 3].includes(index)) {
            return "bg-lightGray"
        }
        if ([1, 4].includes(index)) {
            return "bg-accentGreen"
        }
        return "bg-primaryDark text-white"
    }

    const handleH3TextBg = (index) => {
        if ([0, 3, 5].includes(index)) {
            return "bg-accentGreen text-black"
        }
        return "bg-white text-black"
    }

    const handlePTextBg = (index, txt) => {
        if ([2, 5].includes(index) && txt === "img") {
            return "bg-white"
        } else if (txt === "img") {
            return "bg-black"
        }
        else if ([2, 5].includes(index) && txt === "text") {
            return "text-white"
        } else if (txt === "text") {
            return "text-black"
        }

    }
    return (
        <div className='container mt-[180px]'>
            <div className='flex gap-[40px] mb-[80px] max-sm:flex-col max-sm:items-center max-sm:text-center'>
                <h2 className='rounded-[10px] leading-[50px] px-[7px] md:text-headingMedium text-headingMediumMobile bg-accentGreen text-black'>{servicesHeading[0].headingMedium}</h2>
                <p className='md:text-baseText text-baseTextMobile max-w-[580px]'>{servicesHeading[0].paragraph}</p>
            </div>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-[40px] '>
                {servicesInfo.map((item, index) => (
                    <div key={`_service-${index}`} className={`flex ${handleBgColor(index)} shadow-3xl border-black    justify-between items-center p-[50px] rounded-[50px]`}>
                        <div className='flex flex-col w-full justify-between h-[200px] '>
                            <div className='w-full'>
                                <div className='flex'>
                                    <h3 className={`md:text-headingSmall text-headingSmallMobile rounded-[10px] px-[7px] leading-[30px] ${handleH3TextBg(index)}`}>{item.headingSmall1}</h3>
                                </div>
                                <div className='flex'>
                                    <h3 className={`md:text-headingSmall text-headingSmallMobile capitalize rounded-[10px] px-[7px] leading-[30px] ${handleH3TextBg(index)}`}>{item.headingSmall2}</h3>
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <a href={item} className={`${item.link} flex items-center gap-[15px]`}>
                                    <LinkIcon src={[2, 5].includes(index) ? black : green} className={`${handlePTextBg(index, "img")} `} />
                                    <span className={`md:text-headingXSmall text-headingXSmall max-md:hidden ${handlePTextBg(index, "text")}`}>Learn More</span>
                                </a>
                                <Image className='sm:hidden' src={item.src} alt={item.alt} />
                            </div>
                        </div>
                        <Image className='max-sm:hidden' src={item.src} alt={item.alt} />
                    </div>
                ))}
            </div>
            <div>
            <div className='flex px-[50px] max-lg:py-[50px] justify-between items-center container bg-lightGray rounded-[60px] mt-[50px]'>
                <div className='flex flex-col gap-[15px]'>
                    <h3 className='sm:text-headingSmall text-headingSmallMobile'>{servicesFooter[0].headingSmall}</h3>
                    <p className='lg:max-w-[450px] text-baseText text-black/70 z-[1]'>{servicesFooter[0].paragraph}</p>
                    <Button className={"text-white max-lg:max-w-full bg-black"}>Get your free proposal</Button>
                </div>
                <div className='m-[-2rem] max-lg:hidden'>
                    <Image src={servicesFooter[0].src} alt={servicesFooter[0].alt} />
                </div>
            </div>
            </div>
        </div >
    )
}

export default Services