import React from 'react'
import Hero from '../Hero'
import Categories from '../Categories'
import Products from '../Products'
import Collection from '../Collection'
import MiniBlog from '../MiniBlog'

const Home = ({cart,setCart}) => {
  return (
    <div>
      <Hero/>
      <Categories/> 
      <Products cart={cart} setCart={setCart}/>  
      <Collection/>  
      <MiniBlog/>
    </div>
  )
}

export default Home