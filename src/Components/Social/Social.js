import React from 'react'
import Wallet from '../../image/wallet.png'
import Attention from '../../image/attention.png'
import Facebook from '../../image/facebook.png'
import Instagram from '../../image/instagram.png'
import Email from '../../image/email.png'
import Star from '../../image/star.png'

const Social = () => {
    const SocialCost = [
        {
            image: Wallet,
            title: '1 Punto por $1'
        },
        {
            image: Attention,
            title: '200.000 Puntos'
        },
        {
            image: Facebook,
            title: '5.000 Puntos'
        },
        {
            image: Instagram,
            title: '10.000 Puntos'
        },
        {
            image: Email,
            title: '10.000 Puntos'
        },
        {
            image: Star,
            title: '10.000 Puntos'
        },
    ]

    return SocialCost.map((post, index) =>
        <div key={index} className='w-full'>
            <div className='social-block'>
                <div className='social-sircle'>
                    <img src={post.image} />
                </div>
                <p>{post.title}</p>
            </div>
        </div>
    );

}

export default Social