import Button from '@/components/ui/Button'
import { caseStudies, caseStudiesHeading } from '@/constants'
import { green } from '@/public/assets/icons/links'
import Image from 'next/image'
import React from 'react'


const CaseStudies = () => {
    return (
        <div className='container mt-[200px]'>
            <div className='flex items-center md:text-start text-center gap-[40px] mb-[80px] max-sm:flex-col'>
                <h2 className='rounded-[10px] leading-[50px] px-[7px] md:text-headingMedium text-headingMediumMobile bg-accentGreen text-black'>{caseStudiesHeading[0].headingLarge}</h2>
                <p className='text-baseText sm:max-w-[480px] text-primaryDark/80'>{caseStudiesHeading[0].paragraph}</p>
            </div>
            <div className='lg:bg-primaryDark text-white overflow-x-scroll snap-x  lg:rounded-[50px]'>
                <div className='flex max-lg:w-[300vw] justify-between lg:p-[70px] gap-4'>
                    {caseStudies.map((item, index) => (
                        <a href={item.link} className='flex text-accentGreen snap-start gap-[15px]'>
                            <div className=' flex max-lg:p-[70px] max-lg:rounded-[50px] max-lg:bg-primaryDark lg:w-[310px]' key={`_testimonial-${index}`}>
                                <div className='flex flex-col justify-between'>
                                    <p className='text-white'>{item.paragraph}</p>
                                    <div className='flex gap-[15px]'>
                                        <span>Learn More</span>
                                        <Image src={green} alt='green arrow' />
                                    </div>
                                </div>
                                {index !== 2 && <div className='ml-[64px] w-[5px] max-lg:hidden bg-white' />}
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CaseStudies