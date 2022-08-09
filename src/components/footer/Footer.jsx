import React from 'react'
import './footer.css'
import {FaInstagram, FaGithub, FaLinkedinIn} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="home" className='footer__logo'>Bishwas Sagar</a>

      <ul className='permalinks'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experiences</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contacts">Contacts</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><FaLinkedinIn/></a>
        <a href="https://linkedin.com"><FaGithub/></a>
        <a href="https://github.com"><FaInstagram/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; BishwasSagar</small>
      </div>
    </footer>
  )
}

export default Footer