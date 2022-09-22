import React, {useEffect} from 'react'
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {

    useEffect(() => {
        AOS.init({duration: 1500})
    },[])

  return (
    <div className='hero'>
        <div className="hero-content">
            <div data-aos="fade-down">
                <h3>Men Collection 2022</h3>
            </div>
            <div data-aos="fade-up" data-aos-delay="700">
                <h1>NEW ARRIVALS</h1>
            </div>
            <div data-aos="zoom-in" data-aos-delay="1400">
                <Link to="/shop"><button>SHOP NOW</button></Link>
            </div>
            
        </div>
    </div>
  )
}

export default Hero