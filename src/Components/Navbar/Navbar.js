import React from 'react'

const Navbar = () => {
    const navbar = [
        {
            title: 'Novedades'
        },
        {
            title: 'Mas Vendidos'
        },
        {
            title: 'Cumpleanos'
        },
        {
            title: 'Aniversario'
        },
        {
            title: 'Menos De $20 000'
        },
        {
            title: 'Porque Si'
        }
    ]
    return (
        <div>
            <ul className='navbar-class'>
                {navbar.map(((item, index) => {
                    return <li key={index} className='cursor-pointer'>{item.title}</li>
                }))}
            </ul>
        </div>
    );
}

export default Navbar