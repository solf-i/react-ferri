import React from 'react'
import './App.css'
import 'semantic-ui-css/semantic.min.css'
import NavBar from './components/NavBar/NavBar'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Home from './views/Home'
import Category from './views/Category'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App () {
  return (
    <>
      <Router>
        <div className='App'>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/category/:categoryId' element={<Category />}></Route>
            <Route path='/item/:id' element={<ItemDetailContainer />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
