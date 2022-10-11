import React from 'react'
import Navbar1Cpmponents from '../../Components/Navbar1Component/Navbar1Cpmponents'
import NavbarMain from '../../Components/NavbarMain/NavbarMain'
import MainPage from './../MainPage/MainPage';
import Footer from './../../Components/Footer/Footer';
import Footer1 from './../../Components/Footer1/Footer1';
import { BrowserRouter } from 'react-router-dom'

const MyAccountMain = () => {
  return (
    <div>
      <Navbar1Cpmponents />
      <NavbarMain />
      <BrowserRouter>
        <MainPage />
      </BrowserRouter>
      <Footer1 />
      <Footer />
    </div>
  )
}

export default MyAccountMain