import React from 'react'
import { FaTiktok, FaInstagram, FaFacebookF } from 'react-icons/fa'

const Footer1 = () => {
    return (
        <div className='w-full flex justify-center mb-[-12rem]'>
            <div className='footer1-block'>
                <div className='footer1-text'>
                    <p>Subcribete A Nuestro Newsletter</p>
                </div>
                <div>
                    <div className='footer1-form'>
                        <input type='email' placeholder='Email' className='footer-email' />
                        <button className='footer-button'>Subcribete</button>
                    </div>
                </div>
                <div className='footer-social'>
                    <FaTiktok />
                    <FaInstagram />
                    <FaFacebookF />
                </div>
            </div>
        </div>
    )
}

export default Footer1