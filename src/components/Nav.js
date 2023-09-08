import React, { Component } from 'react'
import Category from './Category'
import {HiMenu} from 'react-icons/hi'

let categories = [
  {
    key : 'sport',
    name : 'Спорт',
    icon : 'MdOutlineSportsSoccer'
  },
  {
    key : 'kids',
    name : 'Детские',
    icon : 'MdOutlineSportsSoccer'
  },
  {
    key : 'read',
    name : 'Чтение',
    icon : 'MdOutlineSportsSoccer'
  },
  {
    key : 'sport',
    name : 'Спорт',
    icon : 'MdOutlineSportsSoccer'
  },
]

export class Nav extends Component {
  render() {
    return (
      <nav className='fixed flex flex-col left-0 top-0 h-full w-[20%] bg-white border border-black'>
        <div className='flex mt-2'>
            <div className='mx-2 p-4 border border-black rounded-lg hover:bg-gray-800 transition-all'><HiMenu className='scale-[2]'/></div>
            <p className='my-auto font-bold'>LuxOchki</p>
        </div>
        <div className=''>
          <ul>

          </ul>
        </div>
      </nav>
    )
  }
}

export default Nav