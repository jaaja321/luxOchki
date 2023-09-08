import React from 'react'
import {IoMdClose} from 'react-icons/io'

export default function Info(props) {
  return (
    <div className='z-10 px-2 left-[5%] top-[5%] w-[90%] border border-black bg-white fixed'>
        <div className='py-2 flex justify-between'>
        <img className='w-[60%] h-[80vh]' src={`./img/${props.item.img}`}></img>
        <ul className='text-center'>
          <li><p className='text-center'>{props.item.desc}</p></li>
        </ul>
        <div className='flex-none h-[100%] p-4 border border-black rounded-lg hover:bg-gray-800 transition-all'><IoMdClose onClick={() => props.info()} className='scale-[2]'/></div>
        </div>
    </div>
  )
}
