import React from 'react'
import products from './Data'
import { Link } from "react-router-dom";

const Products = ({cart,setCart}) => {

    const handleAddToCart = (product) => {
        if (cart.indexOf(product) !== -1) return          
        setCart([...cart, product])
    }
    
  return (
    <div className='products'>
      <div className='product-container'>
        <div className='product-head'>
          <h3><span>TRENDING</span></h3>
          <p>Top view this week</p>
        </div>
        <div className='product-imgs'>

            {products.map((product) => (
              <div key={product.id} className='a-prod-img'>
                <figure key={product.id}>
                  <Link to={`${product.id}`}>
                  <img className='img-back' src={product.imageBack} alt={product.name}/>
                  <img className='img-front' src={product.imageFront} alt={product.name}/>
                  </Link>
                </figure>
                <div class="perks">
                  <span class="one">{product.perk_one}</span>
                  <span class="two">{product.perk_two}</span>
                </div>
                <div class="a-prod-info">
                  <div class="brand">{product.brand}</div>
                  <div class="name">{product.name}</div>                                       
                  <div class="price">
                    <p>{product.discount}</p>
                    <span>{product.price}</span>
                  </div>                        
                  <button class="add-to-cart"
                  onClick={() => handleAddToCart(product)}>
                  ADD TO CART</button>
                </div>
              </div>
            ))}

        </div>
      </div>
    </div>
  )
}

export default Products