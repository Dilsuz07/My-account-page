import React from 'react'

const CuponCard = () => {
    const cupon = [
        {
            cuponTitle: 'Cupon de',
            cuponCost: '$5000',
            puntos: '100.000 Puntos',
            button: 'Se Necesitan Mas Puntos'
        },
        {
            cuponTitle: 'Cupon de',
            cuponCost: '$5000',
            puntos: '100.000 Puntos',
            button: 'Se Necesitan Mas Puntos'
        },
        {
            cuponTitle: 'Cupon de',
            cuponCost: '$5000',
            puntos: '100.000 Puntos',
            button: 'Se Necesitan Mas Puntos'
        },
    ]
    return (
        cupon.map((item, index) => {
            return <div key={index} className='cupon-card w-full'>
                <div className='cupon-block1'>
                    <p className='text-1'>{item.cuponTitle}</p>
                    <p className='text-2'>{item.cuponCost}</p>
                    <p className='text-3'>{item.puntos}</p>
                    <div className='line'>
                        <div className='line-green'></div>
                    </div>
                </div>
                <div className='cupon-btn-block'>
                    <button className='cupon-btn'>
                        {item.button}
                    </button>
                </div>
            </div>
        })
    )
}

export default CuponCard