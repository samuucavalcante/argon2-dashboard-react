import React, { cloneElement } from 'react'

type Props = {
  title: string
  icon: React.ReactNode
  value: React.ReactNode
  description: React.ReactNode
}

export const AtomCardDashboard: React.FC<Props> = ({ title, description, icon, value }) => {
  const Icon = cloneElement(icon as JSX.Element, {
    size: 23,
  })

  return (
    <div className='w-full flex justify-between items-start bg-white rounded-xl p-4'>
      <div>
        <h3 className='text-md font-semibold text-slate-500 tracking-tighter uppercase'>{title}</h3>
        <span className='font-bold text-zinc-600 uppercase text-xl block -mt-1'>{value}</span>
        <span className='font-semibold text-slate-500 uppercase text-sm block mt-2'>{description}</span>
      </div>
      <div className='p-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500'>
        {Icon}
      </div>
    </div>
  )
}
