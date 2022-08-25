import React from 'react'
import lacoste from './assets/logos/topshop.jpg'
import calvin from './assets/logos/mango.jpg'
import dior from './assets/logos/zara.jpg'
import chanel from './assets/logos/bershka.jpg'
import prada from './assets/logos/asos.jpg'
import zara from './assets/logos/river-island.jpg'

const Logos = () => {
  return (
    <div className='logos'>
        <div className='logo'>
            <img src={lacoste} alt='topshop'/>
        </div>
        <div className='logo'>
            <img src={calvin} alt='mango'/>
        </div>
        <div className='logo'>
            <img src={dior} alt='zara'/>
        </div>
        <div className='logo'>
            <img src={chanel} alt='bershka'/>
        </div>
        <div className='logo'>
            <img src={prada} alt='asos'/>
        </div>
        <div className='logo'>
            <img src={zara} alt='river-island'/>
        </div>
    </div>
  )
}

export default Logos