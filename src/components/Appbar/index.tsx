import React from 'react'
import { Breadcrumb } from './Breadcrumb'
import { Settings } from './Settings'

export const AppBar = () => {
  return (
    <div className='flex justify-between items-start px-5'>
      <Breadcrumb routes={[{ title: 'Pages' }, {title: 'Dashboard'}]} />
      <Settings />
    </div>
  )
}
