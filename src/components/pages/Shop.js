import React from 'react'
import products from '../Data'
import ProductCard from '../ProductCard';
import Social from '../Social'
import Footer from '../Footer'
import './Shop.css'

const Shop = ({handleAddToCart}) => {
  return (
    <>
    <div className='head'>
      SHOP
    </div>
      <section className='shop-imgs'>
        {products.map((product) => (
          <ProductCard 
          key={product.id}
          product={product}
          handleAddToCart={handleAddToCart}/>
        ))}
      </section>
      <Social/>
      <Footer/>
    </>
  )
}

export default Shop