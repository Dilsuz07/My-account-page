import React from 'react'
import CarIcon from '../../image/car.png'
import CartIcon from '../../image/cart.png'
import UserIcon from '../../image/user.png'

const Services = ({ car, cart }) => {
    return (
        <div className='services-block'>
            <img src={car ? CarIcon
                : cart ? CartIcon
                    : UserIcon} />
            <p>{car ? 'Seguimiento'
                : cart ? 'Carrito'
                    : 'Milovan'}
            </p>
        </div>
    )
}

export default Services