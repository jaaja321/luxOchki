import React, { Component } from 'react'

export class Nav extends Component {
  render() {
    return (
      <nav className='fixed flex flex-col left-0 top-0 h-full w-[20%] bg-white border border-black'>
        <div className='flex mt-2'>
            <p className='mx-2 px-4 py-2 border border-black rounded-lg text-bold hover:bg-gray-800 transition-all'>=</p>
            <p className='my-auto'>LuxOchki</p>
        </div>
        <div className=''>
            <ul>
                <li>wqr</li>
                <li>wqr</li>
                <li>wqr</li>
                <li>wqr</li>
                <li>wqr</li>
                <li>wqr</li>
            </ul>
        </div>
      </nav>
    )
  }
}

export default Nav