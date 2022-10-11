import React from 'react'

const RecorForm = () => {
    return (
        <form className='recor-form h-[33rem]'>
            <p className='recor-form-title'>Anadir Recordatoria</p>
            <label className='form-input-title'>
                Titule del Recordatoria<br />
                <input type='text' placeholder='Titulo' className='form-input-style' />
            </label>
            <label className='form-input-title'>
                Fecha <br />
                <input type='number' placeholder='DD/MM/YYYY' className='form-input-style' />
            </label>
            <label className='form-input-title'>
                Cuantos dias antes te recordamos <br />
                <select className='form-input-style'>
                    <option value=''>7 dias</option>
                    <option value=''>6 dias</option>
                    <option value=''>5 dias</option>
                </select>
            </label>
            <label className='form-input-title'>
                Nota(opcional) <br />
                <textarea className='p-[1rem] outline-none border-0' placeholder='Ecsribe aqui'>

                </textarea>
            </label>
            <button className='form-btn'>
                Anadir Recordatoria
            </button>
        </form>
    )
}

export default RecorForm