import React, { useState } from 'react'
import img from '../img/1.webp'
import Info from './Info'

export default function Item(props) {
    let [show, setShow] = useState(false)
    const info = () => {
        setShow(!show)
    }
  return (
    <div className='justify-between flex flex-col pb-2 m-2 w-[25%] border-2 border-gray rounded-t-[10px] hover:border-black transition-all'>
        <div>
          <img onClick={() => info()} className='w-full h-40 rounded-t-[10px]' src={`./img/${props.item.img}`}></img>
          <p onClick={() => info()}>{props.item.desc}</p>
        </div>
        <div className='mt-2 w-full inline-flex justify-around'>
            <p className='text-bold'>{props.item.price}$</p>
            <div className=''>
            <button className='px-4 border border-black rounded-lg text-bold hover:bg-gray-800 transition-all'>+</button>
            </div>
        </div>
        {show ? <Info item={props.item} show={show} info={info}/> : null}
    </div>
  )
}
