import React from 'react'
import Navbar from '../Navbar/Navbar'

const NavbarMain = () => {
    return (
        <div>
            <div className='main-border'></div>
            <div className='main-navbar'>
                <Navbar />
            </div>
            <div className='main-border'></div>
        </div>
    )
}

export default NavbarMain