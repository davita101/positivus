import React from 'react'

const Button =({children, className}) => {
  return (
    <div className={`border-solid ${className} md:max-w-[265px] text-center  transition-all border-2 border-black rounded-[14px] py-[1.25rem] px-[2.1875rem] cursor-pointer`}>
        <span>{children}</span>
    </div>
  )
}

export default Button