import React from 'react'

const Cart = ({cart,setCart}) => {

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id)
    setCart(arr)
  }

  return (
    <div className='cart'>
      <div className='cart-header'>Shopping Cart</div>
      {cart.length === 0 && (
        <div>
          Your Cart Is Empty
        </div>
      )}
      <div className='cart-items'>
      <div className='cart-item-info'>
        <p>PRODUCT</p>
        <p>PRICE</p>
        <p>QUANTITY</p>
        <p>SUBTOTAL</p>
      </div>
      {cart.map((item) => 
        <div key={item.id} className='cart-box'>
            <div className='col-1'>
              <img className='item-img' src={item.imageFront} alt={item.name}/>
              <div>
                <p>{item.name}</p>
                <h6 className='cart-remove' 
                onClick={() => handleRemove(item.id)}>Remove</h6>
              </div>
            </div>
            <div className='col-2'>{item.price}</div>
            <div className='col-3'>
              <button className='minus'>-</button>
              <span>1</span>
              <button className='plus'>+</button>
            </div>        
            <div className='col-4'>{item.price}</div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart