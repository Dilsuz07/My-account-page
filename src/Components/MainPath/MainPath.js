import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './../../Page/HomePage/HomePage';
import Footer1 from './../Footer1/Footer1';
import RefleshPage from './../../Page/RefleshPage/RefleshPage';
import PedidosPage from './../../Page/PedidosPage/PedidosPage';
import DireccionsPage from './../../Page/DireccionsPage/DireccionsPage';
import RecordationPage from './../../Page/RecordationPage/RecordationPage';

const MainPath = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/remenders' element={<RecordationPage />} />
            <Route path='/delivery' element={<DireccionsPage />} />
            <Route path='/orders' element={<PedidosPage />} />
            <Route path='/' element={<Footer1 />} />
            <Route path='/refer' element={<RefleshPage />} />
        </Routes>
    )
}

export default MainPath