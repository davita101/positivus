import { black, green } from '@/public/assets/icons/links'
import Image from 'next/image'
import React, { Children } from 'react'

const LinkIcon = ({className, src}) => {
  return (
    <div className={`${className} rounded-full w-[41px] h-[41px]`}>
      <Image src={src} alt="Link icon" className='w-full p-2' />
    </div>
  )
}

export default LinkIcon
