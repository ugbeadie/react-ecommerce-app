import React from 'react'
import Men from './assets/categories/man-in-white-and-light-tan-outfit.jpg'
import Women from './assets/categories/woman-puts-hand-in-pocket.jpg'
import Footwears from './assets/categories/new-shoes.jpg'
import Accessories from './assets/categories/mens-watch-in-sun.jpg'

const Categories = () => {
    //TODO: set cursor to default on image hover

    const categories = [
        {
            id: 1,
            image: `${Men}`,
            name: 'Men'
        },
        {
            id: 2,
            image: `${Women}`,
            name: 'Women'
        },
        {
            id: 3,
            image: `${Footwears}`,
            name: 'Footwears'
        },
        {
            id: 4,
            image: `${Accessories}`,
            name: 'Accessories'
        }
    ]

  return (
    <div className='categories'>
    {categories.map((category) => {
        return (
        <div key={category.id} className='category-imgs'>
            <div className='zoom-in'>
                <figure>
                    <img src={category.image} alt={category.name}/>
                </figure>
                <p className='category-text'>{category.name}</p>
            </div>            
        </div>
    )})}
    </div>
  )
}

export default Categories