import React from 'react'
import { Link } from "react-router-dom";
import { AiOutlineEye } from 'react-icons/ai';

const style ={
    padding: '8px',
    borderRadius: '50%',
    backgroundColor: 'white',
    cursor: 'pointer',
}

const ProductCard = ({handleAddToCart,product}) => {
  return (
    <div className='product-card'>
        <figure key={product.id}>
            <img className='img-back' src={product.imageBack} alt={product.name}/>
            <img className='img-front' src={product.imageFront} alt={product.name}/>
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
            <div className='overlay'>
                <button class="add-to-cart"
                onClick={() => handleAddToCart(product)}>
                ADD TO CART</button>
            </div>          
            <Link to={`${product.id}`}>
            <AiOutlineEye className='view-detail' size={40}/>  
            </Link>
        </div>
    </div>
  )
}

export default ProductCard