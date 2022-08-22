import React from 'react'
import Hero from '../Hero'
import Categories from '../Categories'
import Products from '../Products'
import Collection from '../Collection'

const Home = ({cart,setCart}) => {
  return (
    <div>
      <Hero/>
      <Categories/> 
      <Products cart={cart} setCart={setCart}/>  
      <Collection/>  
    </div>
  )
}

export default Home