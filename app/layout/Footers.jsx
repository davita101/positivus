import Button from '@/components/ui/Button'
import { contact, copyright, footerLinks, footerSocial, header } from '@/constants'
import { logoWhite } from '@/public/assets/icons/logo'
import Image from 'next/image'
import React from 'react'

const Footers = () => {
    return (
        <div className='max-sm:bg-primaryDark mt-[140px]'>
            <div className='sm:bg-primaryDark px-[60px] md:rounded-t-[50px] py-[37px] container text-center gap-[37px] text-white flex flex-col  items-center pt-[50px]'>
                <div className='flex md:flex-row gap-[37px] flex-col items-center md:justify-between justify-center w-full'>
                    <div className='flex flex-row cursor-pointer items-center  text-headingSmall gap-2'>
                        <Image src={logoWhite} alt="Website logo" className='w-[2.25rem]' />
                        <span>Positivus</span>
                    </div>
                    <ul className='text-center flex flex-col md:flex-row gap-[15px]'>
                        {
                            header.map((item, index) => (
                                <li key={`_footer--item${index}`}>{item.li} </li>
                            ))
                        }
                    </ul>
                    <div className='md:flex hidden gap-[20px] '>
                        {footerSocial.map(item => (
                            <a key={item.li}   href={item.link}><Image src={item.src} alt={item.alt} /></a>
                        ))}
                    </div>
                </div>
                <div className='flex md:flex-row flex-col w-full justify-between gap-[37px]'>
                    <div className='flex flex-col md:items-start items-center gap-[37px]'>
                        <div>
                            <h6 className='bg-accentGreen text-primaryDark rounded-[6px] px-[7px]'>Contact Us:</h6>
                        </div>
                        <ul>
                            {contact.map((item, index) => (
                                <div key={index} className='font-thin flex flex-col gap-3 md:items-start md:text-start text-center items-center'>
                                    <li>Email: {item.email}</li>
                                    <li>Phone: {item.phone}</li>
                                    <li className='max-w-[250px]'>Address: {item.address}</li>
                                </div>
                            ))}
                        </ul>
                    </div>
                    <div className='bg-[#292A32] p-[30px] rounded-[10px] flex'>
                        <div className='flex gap-5 md:flex-row flex-col w-full items-center'>
                            <input className={`border-solid bg-transparent outline-none text-start transition-all border-2 md:max-w-[265px] border-white rounded-[14px] py-[1.25rem] px-[2.1875rem] cursor-pointer w-full`} placeholder='Enter email...' />
                            <Button className={"bg-accentGreen text-primaryDark w-full"}>Subscribe to news</Button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex gap-[20px] md:hidden'>
                        {footerSocial.map(item => (
                            <a key={item.li}   href={item.link}><Image src={item.src} alt={item.alt} /></a>
                        ))}
                    </div>
                    
                </div>
                <div className='w-full h-[1px] bg-white my-[3'/>
                <div className='flex md:flex-row flex-col md:items-start items-center w-full gap-[40px]'>
                    <p className='font-thin'>
                        {copyright[0].paragraph}
                    </p>
                    <a href="/"><p className='font-thin'>
                        {copyright[1].paragraph}
                    </p></a>
                </div>
            </div>
        </div>
    )
}

export default Footers