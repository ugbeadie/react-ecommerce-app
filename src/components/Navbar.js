import React, { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { NavLink } from "react-router-dom";
import '../App.css'
import Cart from './pages/Cart';

const Navbar = ({cart}) => {

    const [nav, setNav] = useState(false)
    const [navOnScroll, setNavOnScroll] = useState(false)

    const changeNavBackgroundOnScroll = () => {
        if(window.scrollY >= 600) {
            setNavOnScroll(true)
        }   else {
            setNavOnScroll(false)
        }
    }
    
    window.addEventListener('scroll', changeNavBackgroundOnScroll)

  return (
        <nav className={navOnScroll ? 'navbar onscroll' : 'navbar'}>
            <div className='toggle-btn' onClick={() => setNav(!nav)}>
                {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
            </div>
            <div className='nav-left'>
                <div className='logo'>ugbe<span>store</span></div>
                <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                    <li onClick={() => setNav(false)} className='nav-items'>                    
                    <NavLink to= "/"
                    className={({ isActive }) => (isActive ? 'link active' : 'link')}>
                    Home
                    </NavLink>
                    </li>

                    <li onClick={() => setNav(false)} className='nav-items'>                    
                    <NavLink to= "/shop"
                    className={({ isActive }) => (isActive ? 'link active' : 'link')}>
                    Shop
                    </NavLink>
                    </li>

                    <li onClick={() => setNav(false)} className='nav-items'>                    
                    <NavLink to= "/blog"
                    className={({ isActive }) => (isActive ? 'link active' : 'link')}>
                    Blog
                    </NavLink>
                    </li>

                    <li onClick={() => setNav(false)} className='nav-items'>                    
                    <NavLink to= "/contact"
                    className={({ isActive }) => (isActive ? 'link active' : 'link')}>
                    Contact
                    </NavLink>
                    </li>

                    <p class="hot">HOT</p>
                </ul>
            </div>
            <div className='nav-right'>
            <NavLink to="/cart">
                <FaShoppingCart size={20} style={{color: '#333'}}/>  
                <span>{cart.length}</span>
            </NavLink>              
            </div>            
        </nav>
  )
}

export default Navbar