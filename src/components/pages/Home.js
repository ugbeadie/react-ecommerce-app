import React from 'react'
import Hero from '../Hero'
import Categories from '../Categories'
import Products from '../Products'
import Collection from '../Collection'
import MiniBlog from '../MiniBlog'
import Logos from '../Logos'
import Social from '../Social'
import Features from '../Features'
import Footer from '../Footer'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Categories/> 
      <Products/>  
      <Collection/>  
      <Logos/>
      <MiniBlog/>
      <Social/>
      <Features/>
      <Footer/>
    </div>
  )
}

export default Home