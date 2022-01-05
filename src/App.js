import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

// COMPONENTS
import Header from './components/Header/Header'
import Navigation from './components/Navigation/Navigation'
import { CartProvider } from './CartContext/CartContext'

// VIEWS
import Home from './Views/Home/Home'
import ItemDetail from './Views/ItemDetail/ItemDetail'
import Category from './Views/Category/Category'
import Cart from './Views/Cart/Cart'

function App () {
  return (
    <CartProvider>
      <Router>
        <div className='App'>
          <Header />
          <Navigation />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/details/:id' element={<ItemDetail />} />
            <Route path='/category/:category' element={<Category />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  )
}

export default App
