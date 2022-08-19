import React from 'react'

const Topbar = () => {
  return (
    <div className="top-bar">
        <div className="top-bar-left">
            <p>Free shipping for standard order over $1000</p>
        </div>
        <div className="top-bar-right">
            <p className='top-bar-links first-top-bar-link'>Help & FAQs</p>
            <p className='top-bar-links'>My Account</p>
            <p className='top-bar-links'>EN</p>
            <p className='top-bar-links'>USD</p>
        </div>
    </div>
  )
}

export default Topbar