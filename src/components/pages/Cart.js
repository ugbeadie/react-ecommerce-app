import React from 'react'
// import Products from '../Products'

const Cart = ({cart,setCart}) => {
  return (
    <div className='cart'>
      <div className='cart-header'>Your Cart</div>
      {cart.length === 0 && (
        <div>
          Your Cart Is Empty
        </div>
      )}
      <div className='cart-items'>
        {cart.map((item) => 
        <div key={item.id}>
          <div className='cart-box'>
            <img className='item-img' src={item.imageFront} alt={item.name}/>
            <div class="detail-box">
                <div class="item-name">{item.name}</div>
                
            </div>
          </div>
        </div>
        )}
      </div>
    </div>
  )
}

export default Cart