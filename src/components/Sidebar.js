import React from 'react'
import {Link} from 'react-router-dom'
import {navbarData} from '../data/navbarData'
import { IoIosMan,IoIosWoman,IoMdClose} from 'react-icons/io';
import { GiRunningShoe,GiBigDiamondRing} from 'react-icons/gi';
const Sidebar = ({sidebarShow, toggleMenu}) => {
    return (
        <aside className={`longSidebar ${sidebarShow ? "showSidebar" : ""}`}>
            <div className="longSidebar_container">
                <header>
                    <h1>EasyShop<span>.</span></h1>
                    <button onClick={toggleMenu}><IoMdClose /></button>
                </header>
                
                <ul>
                    {navbarData.map((item, index) => (
                        <li key={index} onClick={toggleMenu}>
                            <Link to={item.url}>{item.name}</Link>
                        </li>
                    ))}
                    
                </ul>
            
                <footer>
                   <p>Sign In</p>
                   <p>Contact Us</p>
                </footer>
            </div>
        </aside>
    )
}

export default Sidebar
