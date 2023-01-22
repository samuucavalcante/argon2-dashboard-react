import React from 'react'
import {ArrowUp } from 'phosphor-react'
import { Graph } from './Graph'

export const SalesOverview = () => {
  return (
    <div className='rounded-lg p-4 shadow-sm bg-white'>
      <h3 className='text-slate-700 text-base font-semibold'>Sales Overview</h3>
      <div className='flex items-center gap-1 mb-6'>
        <ArrowUp className='text-green-500' />
          <span className='text-slate-500'>4% more in 2021 </span>
      </div>
      <Graph />
    </div> 
  )
}
