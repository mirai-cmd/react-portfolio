import React from 'react'
export default function Tech({title,icons,MainIcon}) {
  return (
    <div className="projectCard bg-gray-900 max-w-[22rem] lg:w-[30rem] max-h-[25rem] rounded-xl py-4">
        {MainIcon}
        <div className='relative text-center top-2 text-[1.2rem] font-semibold'>{title}</div>
        <div className="w-full grid grid-cols-3 gap-6 text-center px-6 py-10">
          {icons.map(({ id, source, title }) => (
            <div
              key={id}
              className="hover:scale-105 duration-500 py-2 rounded-lg"
            >
              <img src={source} alt={title} className="h-10 w-10 mx-auto" />
              <p className="text-white mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
  )
}
