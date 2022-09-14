import React,{useState,useEffect} from 'react'
import { Link } from "react-router-dom";
import { AiFillDelete } from 'react-icons/ai';
import Social from '../Social'
import Footer from '../Footer'
import './Cart.css'

const Cart = ({cart,setCart}) => {
  const [price,setPrice] = useState(0)

  const handlePrice = () => {
    let ans = 0
    cart.map((item) => (ans += item.count * item.price))
    setPrice(ans)
  }

  useEffect(() => {
    handlePrice()
  })

  const handleChange = (item, d) => {
    const index = cart.indexOf(item)
    const arr = cart
    arr[index].count += d
    if (arr[index].count < 1) {
      arr[index].count = 1
    } else {
      setCart([...arr])
    }
  }

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id)
    setCart(arr)
    handlePrice()
  }

  return (
    <div className='cart'>
      <div className='cart-header'>Shopping Cart</div>
      {cart.length === 0 && (
        <div className='empty-cart-notif'>
          <p>Your Cart Is Empty</p>
          <Link className='go-shopping' to= "/shop"><button>
          Go Shopping</button></Link>
        </div>
      )}

      {/* <div className='cart-items'> */}
      {cart.length > 0 && (
        <div>
          <div className='cart-item-info'>
            <p className='product'>PRODUCT(S)</p>
            <div className='cost'><p>PRICE</p></div>
            <div className='quantity'><p>QUANTITY</p></div>
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
                <p className='item-color'>{item.color}</p>
                <AiFillDelete className='mobile'
                style={{cursor:'pointer'}} size={20}
                  onClick={() => handleRemove(item.id)}
                />
              </div>
            </div>

            <div className='col-2 item-price'>
            <p>${item.price}</p>
            
            </div>
            
            <div className='col-3'>
              <div className='quantity-wrapper'>
                <button onClick={() => handleChange(item, -1)}
                className='minus'>-</button>
                <span>{item.count}</span>
                <button onClick={() => handleChange(item, 1)}
                className='plus'>+</button>
              </div>
            </div>   

            <div className='col-4 desktop'>
              <AiFillDelete style={{cursor:'pointer'}} size={30}
                  onClick={() => handleRemove(item.id)}
                />
            </div>     
          </div>
            
          <hr/>
        </div>
        
        )}
        {cart.length > 0 ? 
        <div className='clear_continue'>
          <div className='clear-cart' onClick={() => setCart([])}>
          <p>clear cart</p>
        </div>
        <div className='continue-shopping'>
          <Link to="/shop">Continue shopping</Link>
        </div>
        </div> :
        null}
        {cart.length > 0 ? 
        <div className="cart-total">
          <div>
            <h6>Cart total</h6>
            <p>Subtotal: <span>$ {price}.00</span></p>
            <a href="#" className="primary-btn">Proceed to checkout</a>
          </div>
        </div> :
        null}

  <Social/>
  <Footer/>
        </div>
  )
}

export default Cart
        // {cart.map(item => item.price).reduce((total,value) => total + value, 0)}


// onClick={() => handleChange(item, -1)}
// onClick={() => handleChange(item, 1)}

  