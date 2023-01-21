import React from 'react'

type Route = {
  title: string
  href?: string
}

type Props= {
  routes: Route[]
}

export const Breadcrumb: React.FC<Props> = ({ routes }) => {
  const [firstPosition, ...restRoutes] = routes

  const lastPosition = routes.at(-1)
 
  return (
    <div>
      <span className="text-base text-slate-300">
          {firstPosition.title}
      </span>
      {restRoutes?.map((route) => (
            <span key={route.title} className='text-base text-white'> <span className='px-1 font-semibold text-white'>/</span> {route.title}</span>
      ))}
      <br />
      <h4 className='text-lg  font-bold text-white '>{lastPosition?.title}</h4>
    </div>
  )
}
