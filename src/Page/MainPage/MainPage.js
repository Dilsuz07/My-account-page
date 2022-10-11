import React from 'react'
import { IoHomeOutline, IoArrowRedoSharp } from 'react-icons/io5'
import { TbBellRinging } from 'react-icons/tb'
import { RiRoadMapLine } from 'react-icons/ri'
import { BiShoppingBag } from 'react-icons/bi'
import { AiOutlineGift } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import MainPath from '../../Components/MainPath/MainPath'

const MainPage = () => {

    const activeLink = 'bg-[#D96581] text-[#fff]'
    const normalLink = ''

    return (
        <div className='main-padding main-page-container'>
            <div className='w-[20%] h-[100%]'>
                <div className='user-menu'>
                    <div className='user-name'>
                        <div className='user-name-circle'><p>M</p></div>
                        <p className='user'>Milovan</p>
                    </div>
                    <div>
                        <ul>
                            <NavLink to='/' className={({ isActive }) => isActive ? 'bg-[#D96581] text-[#fff]' : ''}>
                                <li className={`menu-list`}><IoHomeOutline className='menu-icon' />Inicio</li>
                            </NavLink>
                            <NavLink to='/remenders' className={({ isActive }) => isActive ? activeLink : normalLink}>
                                <li className={`menu-list`}><TbBellRinging className='menu-icon' />Recordatories</li>
                            </NavLink>
                            <NavLink to='/delivery' className={({ isActive }) => isActive ? activeLink : normalLink}>
                                <li className={`menu-list`}><RiRoadMapLine className='menu-icon' />Direcciones</li>
                            </NavLink>
                            <NavLink to='/orders' className={({ isActive }) => isActive ? activeLink : normalLink}>
                                <li className={`menu-list`}><BiShoppingBag className='menu-icon' />Pedidos</li>
                            </NavLink>
                            <NavLink to='/' className={({ isActive }) => isActive ? activeLink : normalLink}>
                                <li className={`menu-list`}><AiOutlineGift className='menu-icon' />VIP</li>
                            </NavLink>
                            <NavLink to='/refer' className={({ isActive }) => isActive ? activeLink : normalLink}>
                                <li className={`menu-list`}><IoArrowRedoSharp className='menu-icon' />Referidos</li>
                            </NavLink>
                        </ul>
                    </div>
                </div>
            </div >
            <div className='w-[80%] p-[0_20px_25px_25px]'>
                <MainPath />
            </div>
        </div>
    )
}

export default MainPage