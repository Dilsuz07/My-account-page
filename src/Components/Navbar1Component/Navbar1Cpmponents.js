import React from 'react'
import Logo from '../../image/logo.png'
import Input from './../Input/Input';
import Diamond from './../Diamond/Diamond';
import ServicesComponent from './../ServicesComponent/ServicesComponent';

const Navbar1Cpmponents = () => {
    return (
        <div className='navbar-1'>
            <div className='flex w-[70%] gap-[130px] cursor-pointer'>
                <img src={Logo} />
                <Input />
            </div>
            <div className='flex gap-[30px]'>
                <Diamond />
                <ServicesComponent />
            </div>
        </div>
    )
}

export default Navbar1Cpmponents