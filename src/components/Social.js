import React from 'react'
import one from './assets/social/one.jpg'
import two from './assets/social/two.jpg'
import three from './assets/social/three.jpg'
import four from './assets/social/four.jpg'
import five from './assets/social/five.jpg'
import six from './assets/social/six.jpg'
import { AiOutlineInstagram } from 'react-icons/ai';

const social = () => {

    const socials = [
        {
            id: 1,
            image: `${one}`,
            handle: 'ugbeadie'
        },
        {
            id: 2,
            image: `${two}`,
            handle: 'ugbeadie'
        },
        {
            id: 3,
            image: `${three}`,
            handle: 'ugbeadie'
        },
        {
            id: 4,
            image: `${four}`,
            handle: 'ugbeadie'
        },
        {
            id: 5,
            image: `${five}`,
            handle: 'ugbeadie'
        },
        {
            id: 6,
            image: `${six}`,
            handle: 'ugbeadie'
        },
    ]

  return (
    <div className='social-container'>
        <div className='blog-head'>
          <h3><span>FOLLOW US ON INSTAGRAM</span></h3>
          <p>See our latest posts</p>
        </div>
        <div className='socials'>        
        {socials.map((social) => (
        <div key={social.id} className='social'>
                <img src={social.image} alt=''/>
                <div className='instagram-link'>
                    <AiOutlineInstagram size={30}/>
                    <p>@ <a href='#'>{social.handle}</a></p>
                </div>
        </div>
        ))}
    </div>
    </div>
  )
}

export default social