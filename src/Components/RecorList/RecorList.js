import React from 'react'

const RecorList = ({ title, text, red }) => {
    return (
        <div className='recor-list'>
            <div className={`recor-line bg-[${red ? '#D96581' : '#509D6F'}]`}></div>
            <div className='recor-paragraf'>
                <div className='paragraf-recors'>
                    <p className={`recor-paragraf-1`}>{title}</p>
                    <p className={`recor-paragraf-2 text-[${red ? '#D96581' : '#509D6F'}]`}>{text}</p>
                    <p className='semana-class'><span className='recor-span'>Recordar</span>1 semana antes</p>
                </div>
                <div>
                    <p className='text-lorem'>Lorem, ipsum dolor sit amet <br />consectetur adipisicing elit. Molestias <br />pariatur distinctio fugit itaque iusto neque?<br />consectetur adipisicing elit. Molestias</p>
                </div>
            </div>
        </div>
    )
}

export default RecorList