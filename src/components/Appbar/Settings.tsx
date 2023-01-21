import React from 'react'
import { InputSearch } from '../Input/InputSearch'
import { Gear, BellRinging } from 'phosphor-react'

export const Settings = () => {
  return (
    <div className='flex items-center gap-3'>
      <InputSearch placeholder='Digite algo...' />
      <Gear  className='text-white cursor-pointer' weight='fill' size={16} />
      <BellRinging className='text-white cursor-pointer' weight='fill' size={16}/>
    </div>
  )
}
