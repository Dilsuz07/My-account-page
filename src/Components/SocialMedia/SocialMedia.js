import React from 'react'
import { BsTwitter, BsWhatsapp, BsMessenger, BsLink45Deg } from 'react-icons/bs'
import { GrFacebookOption } from 'react-icons/gr'
import { GoMail } from 'react-icons/go'

const SocialMedia = () => {
  return (
    <div>
      <div className='social-mini'>
        <div className='mini-block'>
          <div className='mini-circle bg-[#00ACED]'>
            <a href='#'><BsTwitter className='bg-icon' /></a>
          </div>
          <div className='mini-circle bg-[#1EBEA5]'>
            <a><BsWhatsapp className='bg-icon' /></a>
          </div>
          <div className='mini-circle bg-[#0084FF]'>
            <a><BsMessenger className='bg-icon' /></a>
          </div>
          <div className='mini-circle bg-[#0084FF]'>
            <a><GrFacebookOption className='bg-icon' /></a>
          </div>
          <div className='mini-circle bg-[#3B5998]'>
            <a><GoMail className='bg-icon' /></a>
          </div>
          <div className='mini-circle bg-[#818181]'>
            <a><BsLink45Deg className='bg-icon' /></a>
          </div>
        </div>
      </div>
    </div>

  )
}

export default SocialMedia