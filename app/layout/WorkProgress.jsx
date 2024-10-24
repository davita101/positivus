"use client"
import { ourWorkingProcess, ourWorkingProcessHeading } from '@/constants'
// import { minusIcon, plusIcon } from '@/public/assets/icons'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { minusIcon, plusIcon } from '@/public/assets/icons/plus'

// Animation variants for opening/closing the paragraph
const itemVariants = {
    open: {
        opacity: 1,
        height: "auto",
        transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: {
        opacity: 0,
        height: 0,
        transition: { duration: 0.2 },
    }
}

const WorkProgress = () => {
    // State to manage which item is open
    const [openIndex, setOpenIndex] = useState(null)
    const [trueIndex, setTrueIndex] = useState(false)
    const toggleItem = (index) => {
        setOpenIndex(index === openIndex ? null : index)
        setTimeout(() => {
            setTrueIndex(!trueIndex)
        }, .5);
    }
   
    return (
        <div className='container mt-[140px] mb-[80px]'>
            <div className='flex items-center md:text-start text-center gap-[40px] mb-[80px] max-sm:flex-col'>
                <h2 className='rounded-[10px] leading-[50px] px-[7px] md:text-headingMedium text-headingMediumMobile bg-accentGreen text-black'>
                    {ourWorkingProcessHeading[0].headingLarge}
                </h2>
                <p className='text-baseText sm:max-w-[270px] text-primaryDark/80'>
                    {ourWorkingProcessHeading[0].paragraph}
                </p>
            </div>

            <div className='flex flex-col gap-[30px]'>
                {ourWorkingProcess.map((item, index) => (
                    <div key={`working-process-${index}`} onClick={() => toggleItem(index)} className={`${openIndex === index ? "bg-accentGreen" : "bg-lightGray"} cursor-pointer flex flex-col gap-[30px]  rounded-[50px] px-[60px] py-[41px]`}>
                        <div className='flex sm:justify-between justify-center max-sm:text-center items-center' >
                            <div className='flex gap-[25px] items-center'>
                                <h2 className='max-sm:hidden md:text-headingLarge text-headingLargeMobile'>{item.id}</h2>
                                <span className='md:text-headingSmall text-headingSmallMobile'>{item.headingMedium}</span>
                            </div>
                            <div className='max-sm:hidden flex justify-center items-center rounded-full w-[58px] h-[58px] bg-white border-2 border-black'>
                                {/* Change icon based on open state */}
                                <Image src={openIndex === index ? minusIcon : plusIcon} alt='toggle icon' />
                            </div>
                        </div>
                        
                        {/* Animated paragraph */}
                        <motion.div
                            initial={false}
                            animate={openIndex === index ? "open" : "closed"}
                            variants={itemVariants}
                            className={'overflow-hidden  max-sm:text-center'}
                        >
                            <div className={` w-full h-[2px] bg-black rounded-full my-[20px]`} />
                            <p className='md:text-headingXSmallMobile'>{item.paragraph}</p>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WorkProgress
