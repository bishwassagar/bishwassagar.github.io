import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'

const HeaderSocial = () => {
  return (
    <div className='header__social'>
        <a href="https://www.linkedin.com/in/bishwassagar/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/bishwassagar" target="_blank" rel="noreferrer"><FaGithub/></a>
        <a href="https://www.instagram.com/bi5hwas/" target="_blank" rel="noreferrer"><FaInstagram/></a>
    </div>
  )
}

export default HeaderSocial