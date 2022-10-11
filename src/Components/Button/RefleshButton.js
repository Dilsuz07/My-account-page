import React from 'react'
import { BsArrowRightShort } from 'react-icons/bs'

const RefleshButton = () => {
    return (
        <button className='refleshed-btn'>
            <span className='font-bold text-[1rem] leading-[20px] text-[#fff]'>Recomendar</span>
            <BsArrowRightShort className='text-[35px] text-[#fff]' />
        </button>
    )
}

export default RefleshButton