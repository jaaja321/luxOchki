import React from 'react'

export default function Header() {
  return (
    <div>
    <div className='w-full bg-white flex justify-between border border-black'>
      <div></div>
      <div className='flex right-0'>
        <a className='p-1 m-auto'>UA</a>
        <p className='m-auto'>|</p>
        <a className='p-1 m-auto'>RU</a>
        <input className='border-2'></input>
      </div>
    </div>
    </div>
  )
}
