import React from 'react'
import Services from '../Services/Services'

const ServicesComponent = () => {
  return (
    <div className='services-container'>
        <Services car={true} />
        <Services cart={true} />
        <Services user={true} />
    </div>
  )
}

export default ServicesComponent