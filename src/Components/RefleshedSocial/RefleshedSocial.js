import React from 'react'
import { RiShareForwardFill } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import { FaFacebookMessenger } from 'react-icons/fa'
import { FiCopy } from 'react-icons/fi'
import { SiInstagram } from 'react-icons/si'

const RefleshedSocial = () => {

    const refleshIcon = [
        {
            icon: <RiShareForwardFill />,
            title: 'Compartin'
        },
        {
            icon: <BsWhatsapp />,
            title: 'Whatsapp'
        },
        {
            icon: <FaFacebookMessenger />,
            title: 'Mensaje'
        },
        {
            icon: <FiCopy />,
            title: 'Copiar'
        },
        {
            icon: <SiInstagram />,
            title: 'Instagram'
        },
    ]

    return (
        <div className='social-reflesh'>
            {
                refleshIcon.map((item, key) => {
                    return <div key={key} className='social-ref-block'>
                        <div className='block-reflesh-social'>
                            {item.icon}
                        </div>
                        <p className='ref-text'>{item.title}</p>
                    </div>
                })
            }
        </div>
    )
}

export default RefleshedSocial