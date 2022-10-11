import React from 'react'
import CaseCard from '../../Components/CaseCars/CaseCard'
import PlusCard from '../../Components/PlusCard/PlusCard'

const DireccionsPage = () => {
    return (
        <div className='pl-[2rem]'>
            <div className='caseCard-page pl-[2rem]'>
                <CaseCard cases={true} />
                <CaseCard cases={false} />
                <CaseCard cases={false} />
            </div>
            <div>
                <PlusCard />
            </div>
        </div>
    )
}

export default DireccionsPage