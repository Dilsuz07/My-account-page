import React from 'react'
import Case1 from '../Case1/Case1'
import Case2 from '../Case2/Case2'

const CaseCard = ({ cases }) => {
    return (
        <div className='cases-card'>
            <div>
                {cases ? <Case1 /> : <Case2 />}
            </div>
            <div>
                <p className='caseCard-text'>Milovan Busolich , Av Jose Rabat 9600 , Colina</p>
            </div>
            <div>
                <p className='caseCard-text'>+56999388926</p>
            </div>
        </div>
    )
}

export default CaseCard