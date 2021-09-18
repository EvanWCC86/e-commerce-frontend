import React,{useState,useEffect} from 'react'
import {navbarData} from '../data/navbarData'
import {Link} from 'react-router-dom'
import { AiOutlineMenu,AiOutlineShoppingCart  } from 'react-icons/ai';
import {useSelector} from "react-redux";
const Navbar = ({toggleMenu,toggleCart}) => {
    const [show, handleShow] = useState(false)
    const cart = useSelector((state) => state.cart);
    const {cartItems} = cart;
    console.log(show)
    const getCartCount = () => {
        return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
      };

      useEffect(() => {
        const scrollEffect = () => {
            if(window.scrollY > 100) {
                handleShow(true)
            } else handleShow(false)
        }
        window.addEventListener("scroll", scrollEffect)
            
       
        return () => {
            window.removeEventListener("scroll", scrollEffect)
        }
    },[])
    
    return (
        <nav className={`navbar ${show && "navbarShow"}`}>
            <div className="navbar_container container">
                <div className="logo">
                    {/* icons */}
                    <h1>EasyShop<span>.</span></h1>
                </div>
                <ul className="nav_links">
                    {navbarData.map((item, index) => (
                        <li key={index}>
                            <Link to={item.url}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
                <div className="navbar-right">
                    <p className="cart">
                    <AiOutlineShoppingCart onClick={toggleCart} />
                    <span>{getCartCount()}</span>
                    </p>
                  
                    <button className="navbar_menu">
                        <AiOutlineMenu onClick={toggleMenu} />
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
