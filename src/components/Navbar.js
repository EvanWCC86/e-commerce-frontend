import React from 'react'
import {navbarData} from '../data/navbarData'
import {Link} from 'react-router-dom'
import { AiOutlineMenu,AiOutlineShoppingCart  } from 'react-icons/ai';
const Navbar = ({toggleMenu,toggleCart}) => {
    
    return (
        <nav className="navbar">
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
                    
                    <AiOutlineShoppingCart onClick={toggleCart} />
                  
                    <button className="navbar_menu">
                        <AiOutlineMenu onClick={toggleMenu} />
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
