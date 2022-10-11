import React from 'react'
import SocialComponets from './../../Components/SocialComponents/SocialComponets';
import CuponCardsComponents from './../../Components/CuponCardsComponents/CuponCardsComponents';
import TusRecom from './../../Components/TusRecom/TusRecom';
import SocialHeader from './../../Components/SocialHeader/SocialHeader';
import TableActivided from './../../Components/TableActivided/TableActivided';

const HomePage = () => {
    return (
        <div>
            <SocialComponets />
            <CuponCardsComponents />
            <TusRecom />
            <div className='main-border mt-[50px]'></div>
            <SocialHeader />
            <TableActivided />
            <div className='main-border mt-[50px]'></div>
        </div>
    )
}

export default HomePage