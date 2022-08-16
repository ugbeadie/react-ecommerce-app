import React from 'react'
import HeroImg from './assets/hero/hero4.png'

const Hero = () => {
  return (
    <div className='hero'>
        <img className='hero-img' src={HeroImg} alt='/' />
        <div className="hero-content">
            <div>
                <h3>Men Collection 2022</h3>
            </div>
            <div>
                <h1>NEW ARRIVALS</h1>
            </div>
            <div>
                <button><span>SHOP NOW</span></button>
            </div>
            
        </div>
    </div>
  )
}

export default Hero