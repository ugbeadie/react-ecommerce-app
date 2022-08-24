import React from 'react'
import Hero from '../Hero'
import Categories from '../Categories'
import Products from '../Products'
import Collection from '../Collection'
import MiniBlog from '../MiniBlog'
import Logos from '../Logos'
import Social from '../Social'
import Features from '../Features'

const Home = ({cart,setCart}) => {
  return (
    <div>
      <Hero/>
      <Categories/> 
      <Products cart={cart} setCart={setCart}/>  
      <Collection/>  
      <Logos/>
      <MiniBlog/>
      <Social/>
      <Features/>
    </div>
  )
}

export default Home