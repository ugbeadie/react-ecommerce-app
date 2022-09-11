import React from 'react'
import { FaFacebookF,FaTwitter,FaYoutube,FaInstagram,FaPinterestP } from 'react-icons/fa'
import visa from './assets/footer/visa.jpg'
import discover from './assets/footer/discover.jpg'
import cirrus from './assets/footer/cirrus.jpg'
import mastercard from './assets/footer/mastercard.jpg'
import paypal from './assets/footer/paypal.jpg'

const Footer = () => {

  const year = new Date().getFullYear()

  return (
    <div className='footer'>
      <div className='footer-row'>

        <div className='footer-column col-1'>
          <h3 className='logo'>UGBE<span>STORE</span></h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit, sed do eiusmod tempor 
            incididunt cilisis consectetur adipiscin.
          </p>
          <div className='payment-options'>
            <img src={mastercard} alt='mastercard'/>
            <img src={visa} alt='visa'/>
            <img src={discover} alt='discover'/>
            <img src={paypal} alt='paypal'/>
            <img src={cirrus} alt='cirrus]'/>
          </div>
        </div>
        <div className='footer-column col-2'>
          <h6>quick links</h6>
          <ul>
            <li>About</li>
            <li>Blogs</li>
            <li>Contact</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className='footer-column col-3'>
          <h6>account</h6>
          <ul>
            <li>my account</li>
            <li>orders tracking</li>
            <li>checkout</li>
            <li>wishlist</li>
          </ul>
        </div>
        <div className='footer-column col-4'>
          <h6>newsletter</h6>
          <form action="#">
            <input type="text" placeholder="Email"/>
            <button type="submit" class="site-btn">Subscribe</button>
          </form>
          <div className='social-links'>
            <div className='link'><FaFacebookF/></div>
            <div className='link'><FaTwitter/></div>
            <div className='link'><FaYoutube/></div>
            <div className='link'><FaInstagram/></div>
            <div className='link'><FaPinterestP/></div>
          </div>
        </div>

      </div>
        <div className='copyright'>
          <p>Copyright © {year} All rights reserved</p>
        </div>
      
    </div>
  )
}

export default Footer