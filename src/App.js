import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Topbar from './components/Topbar';
import Navbar from './components/Navbar';
import Home from "./components/pages/Home"
import Shop from "./components/pages/Shop"
import SingleProduct from "./components/pages/SingleProduct"
import Blog from "./components/pages/Blog"
import Contact from "./components/pages/Contact"
import Cart from "./components/pages/Cart";
import ScrollToTop from "./components/ScrollToTop";

function App() {

  return (
    <>
      <Router>
      <ScrollToTop/>
        <Topbar/>
        <Navbar/>
        <div className='content'>          
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/:productId' element={<SingleProduct/>}/>
            <Route path='/shop' element={<Shop/>}/>
            <Route path='/shop/:productId' element={<SingleProduct/>}/>
            <Route path='/blog' element={<Blog/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;