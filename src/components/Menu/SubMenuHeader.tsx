import React from 'react'

type Props = {
  title: string
}

export const SubMenuHeader: React.FC<Props> = ({ title }) => {
  return (
    <div className='flex justify-start w-full mt-3 mb-1 px-6'>

      <h4 className='text-xs tracking-wider font-semibold text-slate-400 uppercase'>{title}</h4>
    </div>
  )
}
