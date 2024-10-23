"use client"

import Button from '@/components/ui/Button'
import { team, teamHeading } from '@/constants'
import { linkedin, linkedinGreen } from '@/public/assets/icons/social'
import Image from 'next/image'
import React from 'react'

const Team = () => {
  return (
    <div className='mt-[140px] container'>
      <div className=''>
        <div className='flex items-center text-center gap-[40px] mb-[80px] max-sm:flex-col'>
          <h2 className='rounded-[10px] leading-[50px] px-[7px] md:text-headingMedium text-headingMediumMobile bg-accentGreen text-black'>{teamHeading[0].headingLarge}</h2>
          <p className='text-baseText sm:max-w-[480px] text-primaryDark/80'>{teamHeading[0].paragraph}</p>
        </div>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[40px]'>
          {team.map((item, index) => (
            <div className='flex md:max-w-[387px] w-full border flex-col gap-[28px] shadow-3xl border-black rounded-[50px] px-[35px] py-[40px]'>
              <div className='relative flex gap-[20px] justify-start gap- items-end'>
                <Image src={item.src} alt={item.paragraph} />
                <div>
                  <h3 className='text-baseText'>{item.headingXSmall1}</h3>
                  <h4 className='text- text-baseText text-primaryDark/80'>{item.headingXSmall2}</h4>
                </div>
                <div className='absolute top-0 right-0 w-[35px] h-[35px] flex justify-center items-center rounded-full bg-primaryDark'>
                  <Image src={linkedinGreen} className='text-[2px] ' />
                </div>
              </div>
              <div className='w-full h-[.1rem] bg-black/50' />
              <div>
                <p className='text-baseText text-primaryDark/70 md:max-w-[270px]'>{item.paragraph}</p>
              </div>
            </div>
          ))
          }
          <div className='lg:col-start-3 md:col-start-2 w-full flex items-end justify-end '>
            <Button className={'bg-black mt-[40px] w-full text-white hover:bg-white hover:text-black'}>See all team</Button>
          </div>
        </div>

      </div>
     
    </div>
  )
}

export default Team
