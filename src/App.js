import React, {useState} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar'

import HomePage from './pages/HomePage'
import Sidebar from './components/Sidebar'

import CategoryPage from './pages/CategoryPage'
import DetailPage from './pages/DetailPage'
import BackDrop from './components/BackDrop'
import ShoppingCart from './components/ShoppingCart'
import ShopcartPage from './pages/ShopcartPage'

const App = () => {
  const [sidebarShow, setSidebarShow] = useState(false)
  const [showCart, setShowCart] = useState(false)
  
  
  
  
    const toggleMenu = () => {
        setSidebarShow(!sidebarShow)
    }
    const toggleCart = () => {
      setShowCart(!showCart)
    }

    
    
  return (
    <Router>
      <Navbar toggleMenu={toggleMenu} sidebarShow={sidebarShow} toggleCart={toggleCart} />
      <Sidebar sidebarShow={sidebarShow} toggleMenu={toggleMenu}  />
      <ShoppingCart showCart={showCart} toggleCart={toggleCart} />
      <BackDrop toggleMenu={toggleMenu} sidebarShow={sidebarShow} />
      
      <Switch>
        <Route exact path="/" component={HomePage} />
       
        <Route exact path="/cart" component={ShopcartPage} />
        <Route exact path="/:category" component={CategoryPage} />
        <Route exact path="/product/:id" component={DetailPage} />
       
       
      </Switch>
    </Router>
  )
}

export default App
