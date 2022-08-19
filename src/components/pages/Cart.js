import React from 'react'
import { Link } from "react-router-dom";
import { AiFillDelete } from 'react-icons/ai';

const Cart = ({cart,setCart}) => {

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id)
    setCart(arr)
  }

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item)
    const arr = cart
    arr[ind].count += d
    if (arr[ind].count < 1) {
      arr[ind].count = 1
    } else {
      setCart([...arr])
    }
  }

  // const handlePrice = () => {
  //   let ans = 0
  //   const qwe = cart.map((item) => (ans += item.count * item.price))
  //   console.log(qwe)
  //   setPrice(ans)
  // }

  return (
    <div className='cart'>
      <div className='cart-header'>Shopping Cart</div>
      {cart.length === 0 && (
        <div className='empty-cart-notif'>
          <p>Your Cart Is Empty</p>
          <button><Link className='go-shopping' to= "/shop">
          Go Shopping</Link></button>
        </div>
      )}

      {/* <div className='cart-items'> */}
      {cart.length > 0 && (
        <div>
          <div className='cart-item-info'>
            <p className='product'>PRODUCT(S)</p>
            <div className='cost'><p>PRICE</p></div>
            <div className='quantity'><p>QUANTITY</p></div>
            <p className='sub-total'>SUBTOTAL</p>
          </div>
          <hr className='line'/>
        </div>
      )}

      {cart.map((item) => 
        <div key={item.id}>
          <div className='cart-box'>
            <div className='col-1'>
              <img className='item-img' src={item.imageFront} alt={item.name}/>
              <div>
                <p className='item-brand'>{item.brand}</p>
                <p className='item-name'>{item.name}</p>
                <AiFillDelete style={{cursor:'pointer'}} size={20}
                  onClick={() => handleRemove(item.id)}
                />
              </div>
            </div>

            <div className='col-2 item-price desktop'>
            <div><p>{item.price}</p></div>
            
            </div>
            
            <div className='col-3 desktop'>
              <div className='quantity-wrapper'>
                <button onClick={() => handleChange(item, -1)}
              className='minus'>-</button>
              <input className='item-count' type='text' value={item.count}/>
              <button onClick={() => handleChange(item, 1)}
              className='plus'>+</button>
              </div>
            </div>        
            
            <div className='col-4 desktop'>{item.price}</div>

          <div className='mobile'>
            <div className='col-2 item-price'>
            <div><p><span>Price:</span> {item.price}</p></div>
            
            </div>
            
            <div className='col-3'>
              <div className='quantity-wrapper'>
                <button onClick={() => handleChange(item, -1)}
              className='minus'>-</button>
              <input className='item-count' type='text' value={item.count}/>
              <button onClick={() => handleChange(item, 1)}
              className='plus'>+</button>
              </div>
            </div>        
            
            <div className='col-4'><span>Subtotal:</span> {item.price}</div>
          </div>

          </div>
          <hr/>
        </div>
        )}
      {/* </div> */}
      {/* <div className='main-total'>maintotal: ${price}</div> */}
    </div>
  )
}

export default Cart