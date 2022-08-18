import React from 'react'
import Hero from '../Hero'
import Categories from '../Categories'
import Products from '../Products'

const Home = ({cart,setCart}) => {
  return (
    <div>
      <Hero/>
      <Categories/> 
      <Products cart={cart} setCart={setCart}/>    
    </div>
  )
}

export default Home