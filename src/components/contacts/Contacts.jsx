import React from 'react'
import './contacts.css'
import {MdOutlineEmail} from 'react-icons/md'
import {TiSocialLinkedin} from 'react-icons/ti'
import {BsInstagram} from 'react-icons/bs'

const Contacts = () => {
  return (
    <section id='contacts'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>bishwas@tuta.io</h5>
            <a href="mailto:bishwas@tuta.io">Send a message</a>
          </article>
          <article className="contact__option">
            <TiSocialLinkedin className='contact__option-icon'/>
            <h4>Linkedin</h4>
            <h5>@bishwassagar</h5>
            <a href="https://www.linkedin.com/in/bishwassagar/">Connect</a>
          </article>
          <article className="contact__option">
            <BsInstagram className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>@bishwassagar</h5>
            <a href="https://www.instagram.com/bi5hwas/">Follow me here!</a>
          </article>
        </div>
        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contacts