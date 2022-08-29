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
    <div class="product-head">
        <h3><span>OUR PRODUCTS</span></h3>
        <p>Get the right fit for you</p>
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