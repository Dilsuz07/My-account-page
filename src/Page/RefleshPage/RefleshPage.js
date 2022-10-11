import React from 'react'
import RefleshButton from '../../Components/Button/RefleshButton'
import RefleshedInput from '../../Components/Input/RefleshedInput'
import RefleshedSocial from './../../Components/RefleshedSocial/RefleshedSocial';

const RefleshPage = () => {
    return (
        <section className='reflesh-section'>
            <div className='reflesh-header'>
                <p>Refiere A Alguen</p>
            </div>
            <div>
                <div>
                    <div className='main-border mb-[1.3rem]'></div>
                    <div className='reflesh-form w-[100%]'>
                        <RefleshedInput />
                        <RefleshButton/>
                    </div>
                    <div className='main-border mt-[1.3rem]'></div>
                </div>
                <div className='refleshed-social'>
                    <RefleshedSocial />
                </div>
            </div>

        </section>
    )
}

export default RefleshPage