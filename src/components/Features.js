import React from 'react'
import shipping from './assets/features/shipping.png'
import support from './assets/features/support.png'
import returns from './assets/features/return.png'
import secure from './assets/features/secure.png'

const Features = () => {

    const features = [
        {
            id: '1',
            image: `${shipping}`,
            type: 'free shipping',
            desc: 'Free shipping on all US order or order above $1000.'
        },
        {
            id: '2',
            image: `${support}`,
            type: 'support 24/7',
            desc: 'Contact us 24 hours a day, 7 days a week.'
        },
        {
            id: '3',
            image: `${returns}`,
            type: '30 days return',
            desc: 'Simply return it within 30 days for an exchange.'
        },
        {
            id: '4',
            image: `${secure}`,
            type: '100% secure payment',
            desc: 'We ensure secure payment with PEV.'
        },
    ]

  return (
    <div className='features'>
        {features.map((feature) => (
*            <div key={feature.id} class="feature">
            <div class="feature-img">
                <img src={feature.image}/>
            </div>
            <div class="feature-info">
                <h3>{feature.type}</h3>
                <p>{feature.desc}</p>
            </div>
        </div>
        ))}
    </div>
  )
}

export default Features