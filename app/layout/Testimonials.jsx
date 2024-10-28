import { testimonialsHeading } from '@/constants'
import React from 'react'

const Testimonials = () => {
    return (
        <div className='mt-[60px]'>
            <div className='flex items-center md:text-start text-center gap-[40px] mb-[80px] max-sm:flex-col'>
                <h2 className='rounded-[10px] leading-[50px] px-[7px] md:text-headingMedium text-headingMediumMobile bg-accentGreen text-black'>
                    {testimonialsHeading[0].headingLarge}
                </h2>
                <p className='text-baseText sm:max-w-[270px] text-primaryDark/80'>
                    {testimonialsHeading[0].paragraph}
                </p>
            </div>
        </div>
    )
}

export default Testimonials