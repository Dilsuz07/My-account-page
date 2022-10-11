import React from 'react'
import SearchIcon from '../../image/search.png'

const Input = () => {
    return (
        <div className='input-class'>
            <input placeholder='Ingrese una palabra clave o un nombre de producto' className='input-form'/>
            <img src={SearchIcon} className='search-icon' />
        </div>
    )
}

export default Input