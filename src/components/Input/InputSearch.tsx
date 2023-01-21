import React, { useState } from 'react'
import { MagnifyingGlass,XCircle   } from 'phosphor-react'

type Props = {
  placeholder?: string
}

export const InputSearch: React.FC<Props> = ({ placeholder }) => {
  const [input, setInput]= useState('')

  return (
    <div className="bg-white p-3 rounded-md flex justify-start items-center">
      <MagnifyingGlass size={18} className='text-slate-600 mr-2' />
      <input value={input} onChange={(e) => setInput(e.target.value) } placeholder={placeholder} className='text-md text-zinc-600' type="text"/>
      <div className='w-3'>
        {!!input.length && <XCircle size={15} className='cursor-pointer text-zinc-400' onClick={() => setInput('')}/>}
      </div>
    </div>
  )
}
