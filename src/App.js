import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Topbar from './components/Topbar';
import Navbar from './components/Navbar';
import Home from "./components/pages/Home"
import Shop from "./components/pages/Shop"
import Blog from "./components/pages/Blog"
import Contact from "./components/pages/Contact"
import Cart from "./components/pages/Cart";
import SingleProduct from "./components/pages/SingleProduct"

//TODO: NEW IMAGES FOR BANNER
//TODO: PREVENT SCROLLING TO TOP WHEN CHANGING ROUTES

function App() {

  const [cart, setCart] = useState([])

  const handleAddToCart = (product) => {
    if (cart.indexOf(product) !== -1) return          
    setCart([...cart, product])
  }

  return (
    <>
      <Router>
        <Topbar/>
        <Navbar cart={cart}/>
        <div className='content'>          
          <Routes>
            <Route path='/' element={<Home 
              cart={cart} 
              setCart={setCart}/>}/>
            <Route path='/:productId' element={<SingleProduct
              cart={cart}
              setCart={setCart}
              handleAddToCart={handleAddToCart}
            />}/>
            <Route path='/shop' element={<Shop
              cart={cart} 
              setCart={setCart}
              handleAddToCart={handleAddToCart}
            />}/>
            <Route path='/shop/:productId' element={<SingleProduct
              cart={cart}
              setCart={setCart}
              handleAddToCart={handleAddToCart}
            />}/>
            <Route path='/blog' element={<Blog/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/cart' element={<Cart
              cart={cart}
              setCart={setCart}
              />}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;