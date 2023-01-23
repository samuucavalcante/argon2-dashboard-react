import React from 'react'
import { Item } from './Item'
import { Flag } from 'phosphor-react'

export const Categories = () => {
  return (
    <div className='bg-white shadow-md p-4 pb-0 rounded-lg'>
      <h3 className='text-base text-slate-600'>Categories</h3>

      <Item title='Devices' description={
        <span className='text-xs text-zinc-400' >250 in stock, <strong>346+ sold</strong></span>
      } icon={<Flag />}  />
      <Item title='Devices' description={
        <span className='text-xs text-zinc-400' >250 in stock, <strong>346+ sold</strong></span>
      } icon={<Flag />}  />
      <Item title='Devices' description={
        <span className='text-xs text-zinc-400' >250 in stock, <strong>346+ sold</strong></span>
      } icon={<Flag />}  />
      <Item title='Devices' description={
        <span className='text-xs text-zinc-400' >250 in stock, <strong>346+ sold</strong></span>
      } icon={<Flag />}  />
      <Item title='Devices' description={
        <span className='text-xs text-zinc-400' >250 in stock, <strong>346+ sold</strong></span>
      } icon={<Flag />}  />
    
    </div>
  )
}
