import React from 'react'
import Call from '../Call/Call'
import SocialMedia from '../SocialMedia/SocialMedia'

const SocialHeader = () => {
  return (
    <div className='p-[30px_0]'>
      <p className='social-mini-text'>Invitar A Amigos</p>
      <div className='social-header-block'>
        <Call />
        <SocialMedia />
      </div>
    </div>
  )
}

export default SocialHeader