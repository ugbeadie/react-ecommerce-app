import React from 'react'
import products from './Data'
import ProductCard from './ProductCard';

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
              <ProductCard 
              key={product.id}
              product={product}
              handleAddToCart={handleAddToCart}/>
            ))}

        </div>
      </div>
    </div>
  )
}

export default Products