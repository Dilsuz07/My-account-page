import React from 'react'
import RecordationTable from '../../Components/RecordationTable/RecordationTable'
import RecorForm from '../../Components/RecorForm/RecorForm'
import RecorList from '../../Components/RecorList/RecorList'

const RecordationPage = () => {
    return (
        <section className='recor-section'>
            <div className='w-[67%] h-[100%]'>
                <RecordationTable />
                <div className='main-border m-[2rem_0]'></div>
                <div className='flex flex-col gap-[20px]'>
                    <RecorList red={true} title='Agosto 22 - 09:00PM' text='Aniversario de Matrimonia' />
                    <RecorList red={true} title='Agosto 30 - 12:00AM' text='Cumplionos de Jeritsa' />
                </div>
            </div>
            <div className='w-[33%] h-[34rem]'>
                <RecorForm />
            </div>
        </section>
    )
}

export default RecordationPage