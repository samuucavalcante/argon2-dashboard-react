import React from 'react'
import { MenuItem } from './MenuItem'
import { ListDashes, Table, AirplaneInFlight, AddressBook, Airplane, User ,CurrencyEth} from 'phosphor-react'
import { SubMenuHeader } from './SubMenuHeader'

export const Menu = () => {
  return (
    <div className='bg-white w-full h-[96vh] py-6 rounded-lg drop-shadow-sm flex flex-col justify-start items-center text-center'>
      <div className="flex justify-center items-center gap-2 ">

      <CurrencyEth size={30}  />
      <h1 className=' text-md text-zic-800 tracking-tight block border-b-violet-100 '> Argon Dashboard 2</h1>
      </div>
      <div className='bg-zinc-200 h-[1px] w-full my-4' />
      <SubMenuHeader title="Geral" />

      <MenuItem title='Dashboard' icon={<ListDashes />} />
      <MenuItem title='Tables' icon={<Table />} />
      <MenuItem title='Biling' icon={<AirplaneInFlight />} />
      <MenuItem title='Virtual Reality' icon={<AddressBook />} />
      <MenuItem title='RTL' icon={<Airplane />} />
      <SubMenuHeader title="Profile" />
      <MenuItem title='Perfil' icon={<User />} />

    </div>
  )
}
