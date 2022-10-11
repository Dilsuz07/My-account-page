import React from 'react'

const Footer = () => {
    const footer = [
        {
            name1: 'Come Comprer',
            name2: 'Come Comprer',
            name3: 'Come Comprer',
            name4: 'Come Comprer',
            name5: 'Come Comprer',
        },
        {
            name1: 'Sobre Nosotres',
            name2: 'Sobre Nosotres',
            name3: 'Sobre Nosotres',
            name4: 'Sobre Nosotres',
            name5: 'Sobre Nosotres',
        },
        {
            name1: 'Nuestro Diferencia',
            name2: 'Nuestro Diferencia',
            name3: 'Nuestro Diferencia',
            name4: 'Nuestro Diferencia',
            name5: 'Nuestro Diferencia',
        },
        {
            name1: 'Trabaja',
            name2: 'Trabaja',
            name3: 'Trabaja',
            name4: 'Trabaja',
            name5: 'Trabaja',
        },
        {
            name1: 'Referedas',
            name2: 'Referedas',
            name3: 'Referedas',
            name4: 'Referedas',
            name5: 'Referedas'
        },
    ]
    const header = [
        {
            title: 'INFORMACION'
        },
        {
            title: 'FLORERIA SUECIA'
        },
        {
            title: 'SERVICIO AL CLIENTE'
        },
        {
            title: 'OCASION'
        },
    ]
    return (
        <div className='footer'>
            <ul className='grid grid-cols-12'>
                {header.map((item, index) => {
                    return <li key={index} className='footer-title'>{item.title}</li>
                })}
            </ul>
            <ul className='grid grid-cols-12'>
                {footer.map((item, index) => {
                    return <li key={index} className='footer-li'>{item.name1}</li>
                })}
                {footer.map((item, index) => {
                    return <li key={index} className='footer-li'>{item.name2}</li>
                })}
                {footer.map((item, index) => {
                    return <li key={index} className='footer-li'>{item.name3}</li>
                })}
                {footer.map((item, index) => {
                    return <li key={index} className='footer-li'>{item.name4}</li>
                })}
                {footer.map((item, index) => {
                    return <li key={index} className='footer-li'>{item.name5}</li>
                })}
            </ul>
            <div>
            <ul className='footer-end'>
                {header.map((item, index) => {
                    return <li key={index} className='footer-end-text'>{item.title}</li>
                })}
            </ul>
            </div>
            <div className='end-footer-block'>
                <p>FLORERIA SUECIA 2022</p>
            </div>
        </div>
    )
}

export default Footer