import React from 'react'
import img from '../img/1.webp'

export default function Info(props) {
  return (
    <div className='px-2 left-[5%] top-[5%] w-[90%] border border-black bg-white fixed'>
        <div className='py-2 flex justify-between'>
        <img className='w-[60%] h-[80vh]' src={`./img/${props.item.img}`}></img>
        <ul className='text-bold text-center'>
          <li><p className='text-center'>{props.item.desc}</p></li>
        </ul>
            <button onClick={() => props.info()}
            className='px-5 h-12 border border-black rounded-lg text-bold hover:bg-gray-800 transition-all'>-</button>
        </div>
        <p className='text-center'>{props.item.title}</p>
    </div>
  )
}
