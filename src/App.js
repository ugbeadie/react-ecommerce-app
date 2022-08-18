import { useState } from "react";
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home"
import Shop from "./components/pages/Shop"
import About from "./components/pages/About"
import Contact from "./components/pages/Contact"
import Topbar from './components/Topbar';
import Cart from "./components/pages/Cart";

function App() {

  const [cart, setCart] = useState([])

  return (
    <>
      <Router>
        <Topbar/>
        <Navbar />
        <div className='content'>          
          <Routes>
            <Route path='/' element={<Home cart={cart} setCart={setCart}/>}/>
            <Route path='/shop' element={<Shop/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;