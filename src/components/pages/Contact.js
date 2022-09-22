import React from 'react'
import { BsHouse,BsPhone } from 'react-icons/bs';
import { GoMail } from 'react-icons/go';
import './Contact.css'
import Social from '../Social'
import Footer from '../Footer'
//TODO; ADD EMAIL VALIDATION

const Contact = () => {
  
  return (
    <>
    <div className='contact-header'>CONTACT</div>
    <section className='contact'>
    <h1 className='heading'>Get In Touch</h1>
      <div className='contact-body'>

        <div className='contact-left'>
          <form>
            <div class="custom-field message">
              <textarea name="message" id="message" cols="30" rows="10" 
              data-gramm="false" data-gramm-editor="false"
                  data-enable-grammarly="false" required></textarea>
              <span class="placeholder">Enter message</span>
            </div>
            <div className='name_email'>
              <div class="custom-field">
                  <input type="text" name="name" required/>
                  <span class="placeholder">Enter your name</span>
              </div>
              <div class="custom-field">
                  <input type="text" name="email" required/>
                  <span class="placeholder">Enter Email</span>
              </div>
            </div>
            <div class="custom-field">
                <input type="text" name="subject" required/>
                <span class="placeholder">Enter subject</span>
            </div>
          </form>
        </div>

        <div className='contact-right'>
          <div class="contact-info">
          <div className='icon'>              
            <BsHouse size={30} color='#6c7ae0'/>
            </div>
            <div class="media-body">
            <h3>calabar, nigeria.</h3>
            <p>Rosemead, CA 91770</p>
            </div>
          </div>

          <div class="contact-info">
          <div className='icon'>              
            <BsPhone size={30} color='#6c7ae0'/>
            </div>
            <div class="media-body">
            <h3>+234 123 4567 890</h3>
            <p>Mon to Fri 9am to 6pm</p>
          </div>
          </div>
          <div class="contact-info">
          <div className='icon'>              
            <GoMail size={30} color='#6c7ae0'/>
            </div>
            <div class="media-body">
            <h3>ugbeadie3@gmail.com</h3>
            <p>Send us your query anytime!</p>
            </div>
          </div>
        </div>

      </div>
      <button type="submit" class="form-btn">Send</button>

    </section>
      <Social/>
      <Footer/>
    </>
  )
}

export default Contact