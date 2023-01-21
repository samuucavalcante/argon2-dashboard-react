import React, { cloneElement } from 'react'

type Props = {
  icon?: JSX.Element
  title: string
  href?: string
}

export const MenuItem: React.FC<Props> = ({ title, icon, href }) => {
  const Icon = cloneElement(icon as JSX.Element, {  
    size: 18,
    color: `#${Math.floor(Math.random()*16777215).toString(16)}` 
  })


  return (
    <div className='w-full flex justify-start duration-200 items-center px-6  py-3 text-center gap-5 cursor-pointer  hover:bg-zinc-100 '>
      {Icon}
      <span className='text-center'>{title}</span>
    </div>
  )
}
